/* eslint-disable @typescript-eslint/no-unused-vars */
import { useAuth } from "@clerk/clerk-react";
import {
  CircleStop,
  Loader,
  Mic,
  RefreshCw,
  Save,
  Video,
  VideoOff,
  WebcamIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import useSpeechToText, { ResultType } from "react-hook-speech-to-text";
import { useNavigate, useParams } from "react-router-dom";
import WebCam from "react-webcam";
import { TooltipButton } from "./tooltip-button";
import { toast } from "sonner";
import { chatSession } from "@/scripts";
import { SaveModal } from "./save-modal";
import {
  addDoc,
  collection,
  getDocs,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { db } from "@/config/firebase.config";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

interface RecordAnswerProps {
  question: { question: string; answer: string };
  isWebCam: boolean;
  setIsWebCam: (value: boolean) => void;
}

interface AIResponse {
  ratings: number;
  feedback: string;
}

export const RecordAnswer = ({
  question,
  isWebCam,
  setIsWebCam,
}: RecordAnswerProps) => {
  const {
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false,
  });

  const [userAnswer, setUserAnswer] = useState("");
  const [isAiGenerating, setIsAiGenerating] = useState(false);
  const [aiResult, setAiResult] = useState<AIResponse | null>(null);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const { userId } = useAuth();
  const { interviewId } = useParams();

  const navigate = useNavigate();
  const [confirmOpen, setConfirmOpen] = useState(false);

  const handleSubmit = () => setConfirmOpen(true);

  const confirmFinalSubmit = () => {
    setConfirmOpen(false);
    navigate("/generate");
  };

  const recordUserAnswer = async () => {
    if (isRecording) {
      stopSpeechToText();
      if (userAnswer.length < 30) {
        toast.error("Your answer should be more than 30 characters");
        return;
      }
      setAiResult(
        await generateResult(question.question, question.answer, userAnswer)
      );
    } else {
      startSpeechToText();
    }
  };

  const cleanJsonResponse = (responseText: string): AIResponse => {
    try {
      return JSON.parse(responseText.trim().replace(/(json|```|`)/g, ""));
    } catch (error) {
      throw new Error("Invalid JSON format: " + (error as Error)?.message);
    }
  };

  const generateResult = async (
    qst: string,
    qstAns: string,
    userAns: string
  ): Promise<AIResponse> => {
    setIsAiGenerating(true);
    const prompt = `
      Question: "${qst}"
      User Answer: "${userAns}"
      Correct Answer: "${qstAns}"
      Provide a rating (1-10) based on answer quality, and offer feedback for improvement , feedback as JSON with "ratings" (number) and "feedback" (string).`;
    try {
      const aiResult = await chatSession.sendMessage(prompt);
      return cleanJsonResponse(aiResult.response.text());
    } catch (error) {
      toast.error("An error occurred while generating feedback.");
      return { ratings: 0, feedback: "Unable to generate feedback" };
    } finally {
      setIsAiGenerating(false);
    }
  };

  const recordNewAnswer = () => {
    setUserAnswer("");
    stopSpeechToText();
    startSpeechToText();
  };

  const saveUserAnswer = async () => {
    if (!aiResult) return;
    setLoading(true);
    try {
      const existingAnswers = await getDocs(
        query(
          collection(db, "userAnswers"),
          where("userId", "==", userId),
          where("question", "==", question.question)
        )
      );
      if (!existingAnswers.empty) {
        toast.info("You have already answered this question.");
        return;
      }
      await addDoc(collection(db, "userAnswers"), {
        mockIdRef: interviewId,
        question: question.question,
        correct_ans: question.answer,
        user_ans: userAnswer,
        feedback: aiResult.feedback,
        rating: aiResult.ratings,
        userId,
        createdAt: serverTimestamp(),
      });
      toast.success("Your answer has been saved.");
    } catch (error) {
      toast.error("An error occurred while saving your answer.");
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };

  useEffect(() => {
    setUserAnswer(
      results
        .filter((r): r is ResultType => typeof r !== "string")
        .map((r) => r.transcript)
        .join(" ")
    );
  }, [results]);

  return (
    <div className="w-full flex flex-col items-center gap-8 mt-4">
      <SaveModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={saveUserAnswer}
        loading={loading}
      />
      <div className="w-full h-[400px] md:w-96 flex flex-col items-center justify-center border p-4 bg-gray-50 rounded-md">
        {isWebCam ? (
          <WebCam
            className="w-full h-full object-cover rounded-md"
            onUserMedia={() => setIsWebCam(true)}
            onUserMediaError={() => setIsWebCam(false)}
          />
        ) : (
          <WebcamIcon className="min-w-24 min-h-24 text-muted-foreground" />
        )}
      </div>
      <div className="flex itece justify-center gap-3">
        <TooltipButton
          content={isWebCam ? "Turn Off" : "Turn On"}
          icon={
            isWebCam ? (
              <VideoOff className="min-w-5 min-h-5" />
            ) : (
              <Video className="min-w-5 min-h-5 text-white" />
            )
          }
          onClick={() => setIsWebCam(!isWebCam)}
        />
        <TooltipButton
          content={isRecording ? "Stop Recording" : "Start Recording"}
          icon={
            isRecording ? (
              <CircleStop className="text-white" />
            ) : (
              <Mic className="text-white" />
            )
          }
          onClick={recordUserAnswer}
        />
        <TooltipButton
          content="Record Again"
          icon={<RefreshCw className="min-w-5 min-h-5 text-white" />}
          onClick={recordNewAnswer}
        />

        <TooltipButton
          content="Save Result"
          icon={
            isAiGenerating ? (
              <Loader className="animate-spin text-white" />
            ) : (
              <Save className="text-white" />
            )
          }
          onClick={() => setOpen(true)}
          disbaled={!aiResult}
        />
        <Button onClick={handleSubmit}>Submit</Button>
        <Dialog open={confirmOpen} onOpenChange={setConfirmOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Submit Answer</DialogTitle>
            </DialogHeader>
            <DialogFooter>
              <Button variant="outline" onClick={() => setConfirmOpen(false)}>
                Cancel
              </Button>
              <Button
                onClick={confirmFinalSubmit}
                className="bg-red-600 text-white"
              >
                Confirm
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className="w-full p-4 border rounded-md bg-gray-50">
        <h2>Your Answer:</h2>
        <p>{userAnswer || "Start recording to see your answer here"}</p>
      </div>
    </div>
  );
};
