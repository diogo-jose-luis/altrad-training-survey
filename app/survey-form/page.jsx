"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import bg1 from "@/assets/images/bg3.jpg";
import logo from "@/assets/images/logo.jpg";
import not_bad from "@/assets/images/not_bad.png";
import adorable from "@/assets/images/adorable.png";
import fire from "@/assets/images/fire.png";

const questions = [
  {
    type: 1,
    step: 1,
    title: "How would you rate your overall experience in the training session?",
    description: "Think about the session from start to finish.",
    answers: ["Poor", "Good", "Excellent"],
  },
  {
    type: 1,
    step: 2,
    title: "Was the training clear and easy to understand ?",
    description: "Evaluate how the topics connect to your daily challenges.",
    answers: ["Not at all", "Somewhat", "Very clear"],
  },
  {
    type: 1,
    step: 3,
    title: "Has your perspective on managing or working with your team change after the training ?",
    description: "Evaluate how the topics connect to your daily challenges.",
    answers: ["Not at all", "Somewhat", "Very Helpfull"],
  },
  {
    type: 1,
    step: 4,
    title: "Did you feel engaged throughout the session?",
    description: "Consider your attention and involvement level.",
    answers: ["Rarely", "Mostly", "Fully engaged"],
  },
  {
    type: 1,
    step: 5,
    title: "How comfortable were you sharing your thoughts?",
    description: "Think about how safe and supported you felt.",
    answers: ["Not comfortable", "Somewhat comfortable", "Very comfortable"],
  },
  {
    type: 1,
    step: 6,
    title: "How would you describe the trainer's delivery?",
    description: "Focus on clarity, energy, and connection.",
    answers: ["Unclear", "Clear", "Very engaging"],
  },
  {
    type: 1,
    step: 7,
    title: "How did you find the session’s pace?",
    description: "Was it too fast, too slow, or just right?",
    answers: ["Too slow", "Just right", "Too fast"],
  },
  {
    type: 1,
    step: 8,
    title: "How effective was the group interaction?",
    description: "Think about the exchange of ideas and participation.",
    answers: ["Low", "Moderate", "High"],
  },
  {
    type: 1,
    step: 9,
    title: "Would you attend another training like this?",
    description: "Your interest in similar future sessions.",
    answers: ["No", "Maybe", "Yes"],
  },
  {
    type: 3,
    step: 10,
    title: "What topics would you like to see covered in future trainings?",
    description: "Your interest in similar future sessions.",
    answers: ["Comment", "Comment", "Comment"],
  },
  {
    type: 1,
    step: 11,
    title: "Would you recommend this training to others?",
    description: "Share if you'd suggest this to fellow leaders.",
    answers: ["No", "Yes"],
  },
  {
    type: 1,
    step: 12,
    title: "What best describes your post-session feeling?",
    description: "Summarize your overall sentiment now.",
    answers: ["Neutral", "Motivated", "Inspired"],
  },
];

export default function WizardSurveyPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const question = questions[currentStep];

  const [completed, setCompleted] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [textAnswer, setTextAnswer] = useState("");
  const [userAnswers, setUserAnswers] = useState([]);
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    const existing = userAnswers.find((a) => a.step === question.step);
    if (existing) {
      setSelectedOption(existing.answer);
      setTextAnswer(existing.text || "");
    } else {
      setSelectedOption(null);
      setTextAnswer("");
    }
  }, [currentStep]);

  const allAnswered = questions.every((q) =>
    userAnswers.some((a) => a.step === q.step && (a.answer != null || a.text))
  );

  const answeredCount = userAnswers.filter((a) => a.answer != null || a.text).length;

  return (
    <div className="relative h-screen w-full font-sans">
      <div className="flex flex-col lg:flex-row h-full w-full font-sans">
        <div className="w-full lg:w-[30%] relative h-64 lg:h-auto">
          <div className="absolute inset-0"> 
            <Image
              src={bg1}
              alt="Background"
              layout="fill"
              objectFit="cover"
              className="z-0"
            />
            <div
              className="absolute inset-0 z-10"
              style={{ backgroundColor: "#000", opacity: 0.5 }}
            />
          </div>

          <div className="relative z-20 hidden lg:flex flex-col items-center pt-10 pl-20">
            {questions.map((_, idx) => (
              <React.Fragment key={idx}>
                |
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-full border-2 ${
                    idx === currentStep
                      ? "border-white text-white"
                      : "border-gray-300 text-white"
                  }`}
                  style={{
                    backgroundColor:
                      idx <= currentStep ? "#E20612" : "#bcbdbd",
                  }}
                >
                  {idx + 1}
                </div>
                |
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-[70%] bg-gray-50 flex flex-col justify-between px-6 sm:px-10 md:px-16 lg:px-20 py-10">
          {completed ? (
            <div className="flex flex-col items-center justify-center min-h-[400px]">
              <Image
                src={logo}
                alt="Logo"
                width={80}
                height={80}
                className="mb-6"
              />
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
                Thank You!
              </h2>
              <p className="text-gray-600 text-base sm:text-lg text-center max-w-xl mb-6">
                We appreciate you taking the time to complete this survey. <br />
                Your feedback is valuable and helps us improve our training sessions.
              </p>
              <Link
                href="/"
                className="text-white px-6 py-3 rounded-md"
                style={{ backgroundColor: "#E20612" }}
              >
                Back to Home
              </Link>
            </div>
          ) : (
            <>
              <div>
                <Link href="/">
                  <Image
                    src={logo}
                    alt="Logo"
                    width={50}
                    height={50}
                    className="mb-4"
                  />
                </Link>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
                  <p className="text-base sm:text-lg font-semibold text-gray-800">
                    {answeredCount} of {questions.length} completed
                  </p>
                  <div className="w-full sm:w-1/2 h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-300"
                      style={{
                        width: `${(answeredCount / questions.length) * 100}%`,
                        backgroundColor: "#E20612",
                      }}
                    />
                  </div>
                </div>

                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  {question.step}. {question.title}
                </h1>
                <p className="text-gray-500 max-w-2xl mb-10"></p>

                {question.type === 1 ? (
                  <div className="space-y-4">
                    {question.answers.map((option, index) => {
                      const isSelected = selectedOption === index + 1;

                      return (
                        <label
                          key={index}
                          className={`flex items-center border rounded-md p-4 cursor-pointer transition-all ${
                            isSelected
                              ? "border-[#E20612] bg-white shadow-sm"
                              : "border-gray-300 bg-white hover:shadow-md"
                          }`}
                          onClick={() => {
                            setSelectedOption(index + 1);
                            setUserAnswers((prev) => {
                              const existing = prev.find(
                                (a) => a.step === question.step
                              );
                              if (existing) {
                                return prev.map((a) =>
                                  a.step === question.step
                                    ? { ...a, answer: index + 1 }
                                    : a
                                );
                              } else {
                                return [
                                  ...prev,
                                  { step: question.step, answer: index + 1 },
                                ];
                              }
                            });
                          }}
                        >
                          <input
                            type="radio"
                            name={`resposta-${question.step}`}
                            className="form-radio h-5 w-5 mr-4 text-[#E20612] focus:ring-[#E20612]"
                            checked={isSelected}
                            onChange={() => setSelectedOption(index + 1)}
                          />
                          <span className="text-gray-700 font-medium">
                            {option}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                ) : question.type === 3 ? (
                  <div className="mb-6">
                    <textarea
                      className="w-full p-4 border rounded-md"
                      rows={5}
                      placeholder="Type your suggestions here..."
                      value={textAnswer}
                      onChange={(e) => {
                        setTextAnswer(e.target.value);
                        setSelectedOption(1);
                        setUserAnswers((prev) => {
                          const existing = prev.find((a) => a.step === question.step);
                          if (existing) {
                            return prev.map((a) =>
                              a.step === question.step ? { ...a, answer: 1, text: e.target.value } : a
                            );
                          } else {
                            return [...prev, { step: question.step, answer: 1, text: e.target.value }];
                          }
                        });
                      }}
                    />
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {question.answers.map((card, index) => {
                      const isSelected = selectedOption === index + 1;

                      return (
                        <div
                          key={index}
                          onClick={() => {
                            setSelectedOption(index + 1);
                            setUserAnswers((prev) => {
                              const existing = prev.find(
                                (a) => a.step === question.step
                              );
                              if (existing) {
                                return prev.map((a) =>
                                  a.step === question.step
                                    ? { ...a, answer: index + 1 }
                                    : a
                                );
                              } else {
                                return [
                                  ...prev,
                                  { step: question.step, answer: index + 1 },
                                ];
                              }
                            });
                          }}
                          className={`border rounded-lg p-6 flex flex-col items-center cursor-pointer transition-all ${
                            isSelected
                              ? "border-[#E20612] shadow-md"
                              : "border-gray-200 hover:shadow-md"
                          }`}
                        >
                          <Image
                            src={card.img}
                            alt={card.title}
                            width={64}
                            height={64}
                            className="mb-4"
                          />
                          <p className="text-center font-medium text-gray-800">
                            {card.title}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                )}

                {showWarning && !allAnswered && (
                  <p className="text-red-600 mt-4 font-semibold">
                    Please answer all questions before submitting.
                  </p>
                )}
              </div>

              <div className="flex flex-wrap justify-end gap-4 mt-10">
                {currentStep > 0 && (
                  <button
                    className="text-white px-6 py-3 rounded-md"
                    style={{ backgroundColor: "#2c2c2c" }}
                    onClick={() => setCurrentStep((prev) => prev - 1)}
                  >
                    PREVIOUS →
                  </button>
                )}
                {currentStep < questions.length - 1 ? (
                  <button
                    className="text-white px-6 py-3 rounded-md"
                    style={{ backgroundColor: "#E20612" }}
                    onClick={() => setCurrentStep((prev) => prev + 1)}
                  >
                    NEXT →
                  </button>
                ) : (
                  <button
                    className="text-white px-6 py-3 rounded-md disabled:opacity-50"
                    style={{ backgroundColor: "#E20612" }}
                    disabled={!allAnswered}
                    onClick={() => {
                      if (!allAnswered) {
                        setShowWarning(true);
                        return;
                      }
                      localStorage.setItem("survey_submitted", "true");
                      console.log("User Answers:", userAnswers);
                      setCompleted(true);
                    }}
                  >
                    SUBMIT →
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
