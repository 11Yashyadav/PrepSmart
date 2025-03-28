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
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

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
