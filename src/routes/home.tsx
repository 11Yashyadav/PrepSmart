import { Sparkles } from "lucide-react";
import Marquee from "react-fast-marquee";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { MarqueImg } from "@/components/marquee-img";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const HomePage = () => {
  const textRef = useRef<HTMLSpanElement>(null);
  const changingTexts = [
    "Engineering",
    "Software",
    "Marketing",
    "Data Science",
    "Product Management",
    "UX Design",
    "Sales",
  ];

  const faqs = [
    {
      question: "What is PrepSmart?",
      answer:
        "PrepSmart is an AI-powered mock interview platform that provides personalized, role-based interviews with real-time evaluation. It helps candidates refine their skills with AI-driven feedback, making interview preparation more effective and data-driven.",
    },
    {
      question: "How does PrepSmart generate interview questions?",
      answer:
        "PrepSmart uses AI models like Gemini AI to generate industry-specific interview questions. The system adapts dynamically based on your job role, experience level, and past performance to create a tailored interview experience.",
    },
    {
      question: "Can I customize my mock interview?",
      answer:
        "Yes! PrepSmart allows you to choose your job role, experience level, and interview type (technical, behavioral, or HR). This customization ensures that your practice sessions closely resemble real-world interview scenarios.",
    },
    {
      question: "How does the real-time AI evaluation work?",
      answer:
        "Our AI assesses your responses in real time, analyzing aspects such as clarity, tone, confidence, technical depth, and overall response quality. This helps you understand your strengths and areas needing improvement.",
    },
    {
      question: "What kind of feedback will I receive after an interview?",
      answer:
        "You'll receive detailed AI-driven feedback that includes a response score, personalized improvement suggestions, and insights into areas such as communication, structure, and content relevance.",
    },
    {
      question: "Can I record and review my interview sessions?",
      answer:
        "Yes! PrepSmart lets you record interviews so you can review your responses later. This feature helps track your progress over multiple sessions and refine your answering strategies effectively.",
    },
    {
      question:
        "How does PrepSmart ensure the relevance of interview questions?",
      answer:
        "PrepSmart continuously updates its question bank based on industry trends, company hiring patterns, and AI analysis of previous interview responses. This ensures up-to-date and relevant practice questions.",
    },
    {
      question: "Does PrepSmart store my voice and responses?",
      answer:
        "No, PrepSmart does not permanently store your voice recordings or responses. Your privacy and data security are our top priorities, ensuring a safe and secure interview preparation experience.",
    },
    {
      question: "Can I retake an interview to improve my performance?",
      answer:
        "Yes! You can take unlimited mock interviews to practice and improve. AI-driven feedback allows you to track progress over time and focus on areas where you need improvement.",
    },
    {
      question: "Does PrepSmart support group or panel interviews?",
      answer:
        "Currently, PrepSmart focuses on AI-driven one-on-one interviews. However, we are working on integrating features for panel interview simulations and peer practice sessions.",
    },
    {
      question: "Can I cancel my subscription at any time?",
      answer:
        "Yes, you can cancel your subscription anytime. There are no hidden fees, and your progress data will remain available until the subscription period ends.",
    },
    {
      question: "Do you offer discounts or promotions?",
      answer:
        "Yes! PrepSmart provides seasonal discounts, special offers for students, and referral bonuses. Stay updated with our website or subscribe to our newsletter for exclusive deals.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "You can reach us via email or our live chat support on the website. Our team is available to assist you with any queries regarding the platform, technical issues, or subscription plans.",
    },
    {
      question:
        "Can companies or organizations use PrepSmart for bulk interviews?",
      answer:
        "Yes! We offer enterprise solutions that allow companies to conduct large-scale AI-driven mock interviews for multiple candidates. Contact us for customized business plans and bulk interview packages.",
    },
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Toggle FAQ visibility
  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  useEffect(() => {
    const element = textRef.current;
    if (!element) return;

    const handleTyping = () => {
      if (isDeleting) {
        if (charIndex > 0) {
          setCharIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setCurrentTextIndex(
            (prevIndex) => (prevIndex + 1) % changingTexts.length
          );
        }
      } else {
        if (charIndex < changingTexts[currentTextIndex].length) {
          setCharIndex((prev) => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    };

    const timeout = setTimeout(handleTyping, isDeleting ? 20 : 100);
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentTextIndex, changingTexts]);

  return (
    <div className="flex-col w-full pb-16 bg-black">
      <div className="relative w-full h-screen">
        <div className="absolute inset-0 overflow-hidden z-0">
          <video
            className="absolute inset-0 w-full object-cover"
            autoPlay
            loop
            muted
          >
            <source src="/assets/robot.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="relative z-10 p-8 md:p-12 space-y-6 text-white md:w-1/2">
          <div className="my-4">
            <h2 className="text-3xl text-center md:text-left md:text-6xl">
              Ace your <span className="font-bold"></span>
              <br />
              <span ref={textRef} className="font-bold text-purple-500">
                {changingTexts[currentTextIndex].substring(0, charIndex)}
              </span>
              <br />
              interviews
            </h2>
            <p className="mt-4 text-gray-300 text-xl leading-relaxed">
              Boost your interview skills and increase your success rate with
              AI-driven insights. Say goodbye to interview performance anxiety.
              Master any role, any level, any industry and land your dream job.
              Get detailed feedback on your answers and suggestions to improve
              them. Discover a smarter way to prepare, practice, and stand out.
            </p>
          </div>
          <div className="flex w-full items-center justify-evenly md:px-8 md:py-12 gap-8">
            <p className="text-3xl font-semibold text-white text-center">
              250k+
              <span className="block text-xl text-gray-300 font-normal">
                Offers Received
              </span>
            </p>
            <p className="text-3xl font-semibold text-white text-center">
              1.2M+
              <span className="block text-xl text-gray-300 font-normal">
                Interviews Aced
              </span>
            </p>
          </div>
          <div>
            <Link to={"/generate"} className="w-full">
              <Button className="w-3/4 bg-gradient-to-b from-purple-700 to-purple-950 hover:from-purple-700 hover:to-purple-900 text-white shadow-lg shadow-purple-500/50 transition-transform transform hover:scale-105">
                Try a free mock interview now
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full bg-black max-h-40">
        <Marquee pauseOnHover>
          <MarqueImg img="/assets/img/logo/firebase.png" />
          <MarqueImg img="/assets/img/logo/meet.png" />
          <MarqueImg img="/assets/img/logo/zoom.png" />
          <MarqueImg img="/assets/img/logo/firebase.png" />
          <MarqueImg img="/assets/img/logo/microsoft.png" />
          <MarqueImg img="/assets/img/logo/meet.png" />
          <MarqueImg img="/assets/img/logo/tailwindcss.png" />
          <MarqueImg img="/assets/img/logo/microsoft.png" />
        </Marquee>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 py-16">
        {/* Smart Interview Simulation */}
        <div className="p-8 rounded-xl hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 border border-purple-700">
          <div className="flex flex-col items-center space-y-4">
            <img
              src="/assets/icons/brain.png"
              alt="AI Icon"
              className="h-12 w-12 animate-pulse"
            />
            <h3 className="text-2xl font-semibold text-white text-center">
              Smart Interview Simulation
            </h3>
            <p className="text-gray-200 text-center leading-relaxed">
              Our advanced AI bot is trained to conduct realistic mock
              interviews, simulating various scenarios and industries.
            </p>
          </div>
        </div>

        {/* Interactive Voice Interviews */}
        <div className="rounded-xl p-8 shadow-2xl hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 border border-purple-700">
          <div className="flex flex-col items-center space-y-4">
            <img
              src="/assets/icons/voice.png"
              alt="Voice Icon"
              className="h-12 w-12 animate-float"
            />
            <h3 className="text-2xl font-semibold text-white text-center">
              Interactive Voice Interviews
            </h3>
            <p className="text-gray-200 text-center leading-relaxed">
              Speak directly with our AI bot for a lifelike interview
              experience, mimicking face-to-face interactions.
            </p>
          </div>
        </div>

        {/* Personalized Feedback */}
        <div className="rounded-xl p-8 shadow-2xl hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 border border-purple-700">
          <div className="flex flex-col items-center space-y-4">
            <img
              src="/assets/icons/feedback.png"
              alt="Feedback Icon"
              className="h-12 w-12 animate-float"
            />
            <h3 className="text-2xl font-semibold text-white text-center">
              Personalized Feedback
            </h3>
            <p className="text-gray-200 text-center leading-relaxed">
              Receive detailed feedback on your responses, communication skills,
              and accuracy to improve your interview techniques.
            </p>
          </div>
        </div>

        {/* Practice Anytime, Anywhere */}
        <div className="rounded-xl p-8 shadow-2xl hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 border border-purple-700">
          <div className="flex flex-col items-center space-y-4">
            <img
              src="/assets/icons/map.png"
              alt="Map Icon"
              className="h-12 w-12 animate-float"
            />
            <h3 className="text-2xl font-semibold text-white text-center">
              Practice Anytime, Anywhere
            </h3>
            <p className="text-gray-200 text-center leading-relaxed">
              Access the platform on any device and practice at your own pace to
              fit your busy schedule.
            </p>
          </div>
        </div>

        {/* Any Industry, Any Job Title */}
        <div className="rounded-xl p-8 shadow-2xl hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 border border-purple-700">
          <div className="flex flex-col items-center space-y-4">
            <img
              src="/assets/icons/industry.png"
              alt="Industry Icon"
              className="h-12 w-12 animate-float"
            />
            <h3 className="text-2xl font-semibold text-white text-center">
              Any Industry, Any Job Title
            </h3>
            <p className="text-gray-200 text-center leading-relaxed">
              Our AI customizes interviews for various industries and job
              levels, tailored to your career path.
            </p>
          </div>
        </div>

        {/* Playback Your Answers */}
        <div className="rounded-xl p-8 shadow-2xl hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 border border-purple-700">
          <div className="flex flex-col items-center space-y-4">
            <img
              src="/assets/icons/playback.png"
              alt="Playback Icon"
              className="h-12 w-12 animate-float"
            />
            <h3 className="text-2xl font-semibold text-white text-center">
              Playback Your Answers
            </h3>
            <p className="text-gray-200 text-center leading-relaxed">
              Listen to your responses, identify areas for improvement, and
              enhance clarity and fluency.
            </p>
          </div>
        </div>
      </div>
      {/* FAQ Section */}
      <section className="py-12 px-6 md:px-16">
        <h2 className="text-3xl text-white font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="max-w-4xl mx-auto ">
          {faqs.map((faq, index) => (
            <div key={index} className=" mb-3">
              <button
                className="w-full text-left py-3 px-4 flex justify-between items-center bg-black rounded-lg bg-gradient-to-br from-black to-purple-950 border border-purple-700 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 "
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg text-gray-100 font-semibold">
                  {faq.question}
                </span>
                <span className="text-xl text-gray-50">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>
              {activeIndex === index && (
                <div className="px-4 py-2 text-gray-100 rounded-b-lg">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      <Container className="py-4 space-y-6 ">
        <h2 className="tracking-wide text-xl text-gray-400 font-semibold">
          Unleash your potential with personalized AI insights and targeted
          interview practice.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          <div className="col-span-1 md:col-span-3">
            <img
              src="/assets/img/office.jpg"
              alt=""
              className="w-full max-h-80 animate-float "
            />
          </div>

          <div className="col-span-1 md:col-span-2 gap-6 min-h-80 w-full flex flex-col items-center justify-center text-center">
            <p className="text-center text-gray-400 text-muted-foreground">
              Transform the way you prepare, gain confidence, and boost your
              chances of landing your dream job. Let AI be your edge in
              today&apos;s competitive job market.
            </p>
            <Link to={"/generate"} className="w-full">
              <Button className="w-3/4 bg-gradient-to-b from-purple-700 to-purple-950 hover:from-purple-700 hover:to-purple-900 text-white shadow-lg shadow-purple-500/50 transition-transform transform hover:scale-105">
                Generate <Sparkles className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
