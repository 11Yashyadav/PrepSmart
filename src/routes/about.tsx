import React from "react";

const About: React.FC = () => {
  return (
    <section className="bg-gray-900 py-12 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-100 mb-6">
          About PrepSmart
        </h2>

        {/* Introduction */}
        <p className="text-lg text-gray-100 mb-6">
          PrepSmart is an AI-powered mock interview platform built to redefine
          the way candidates prepare for job interviews. In a competitive hiring
          landscape, traditional preparation methods fall short in providing
          real-time, actionable insights. PrepSmart fills this gap with
          intelligent AI-driven assessments, helping users boost confidence,
          refine communication, and maximize their performance.
        </p>

        {/* Unique Value Proposition */}
        <div className="mt-10 bg-gray-800 shadow-md p-8 rounded-lg">
          <h3 className="text-3xl font-semibold text-gray-100 mb-4">
            🚀 Why PrepSmart?
          </h3>
          <p className="text-lg text-gray-100">
            Unlike standard mock interviews, PrepSmart leverages AI to provide
            instant, detailed feedback, allowing users to analyze speech
            clarity, response structure, and overall impact. The goal is simple:
            To make interview preparation smarter, faster, and more effective.
          </p>
        </div>

        {/* User Impact */}
        <div className="mt-10 bg-gray-800 shadow-md p-8 rounded-lg">
          <h3 className="text-3xl font-semibold text-gray-100 mb-4">
            🌍 Transforming Interview Preparation
          </h3>
          <p className="text-lg text-gray-100">
            Thousands of candidates struggle with interview anxiety, lack of
            structured feedback, and inconsistent preparation. PrepSmart bridges
            the gap by offering AI-driven guidance that helps users:
          </p>
          <ul className="text-gray-100 text-left mt-4 list-disc list-inside">
            <li>✔️ Receive personalized insights on every answer</li>
            <li>✔️ Track improvement over time with detailed analytics</li>
            <li>
              ✔️ Practice real-world scenarios in an interactive environment
            </li>
            <li>✔️ Get tailored feedback** based on industry best practices</li>
          </ul>
        </div>

        {/* Future Vision */}
        <div className="mt-10 bg-gray-800 shadow-md p-8 rounded-lg">
          <h3 className="text-3xl font-semibold text-gray-100 mb-4">
            🔮 What’s Next?
          </h3>
          <p className="text-lg text-gray-100">
            We envision PrepSmart evolving into a complete AI-driven career
            assistant, offering:
          </p>
          <ul className="text-gray-100 text-left mt-4 list-disc list-inside">
            <li>🚀 AI-powered resume & cover letter analysis</li>
            <li>🎤 Advanced voice modulation & non-verbal feedback</li>
            <li>🌍 Global language support for diverse users</li>
            <li>
              📊 Integration with job platforms for skill-based interview prep
            </li>
          </ul>
          <p className="text-lg text-gray-100 mt-4">
            Our mission is to make AI-powered interview prep accessible to
            everyone, helping users land their dream jobs with confidence.
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-10">
          <a
            href="/generate"
            className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg bg-gradient-to-b from-purple-700 to-purple-950 hover:from-purple-700 hover:to-purple-900 shadow-lg shadow-purple-500/100 transition-transform transform hover:scale-105"
          >
            Start Your Journey Today 🚀
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
