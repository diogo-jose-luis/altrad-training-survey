"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import bg1 from "@/assets/images/bg3.jpg";
import logo from "@/assets/images/logo.jpg";

import axios from "axios";

export default function WizardSurveyPage() {
  const [questions, setQuestions] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [textAnswer, setTextAnswer] = useState("");
  const [userAnswers, setUserAnswers] = useState([]);
  const [showWarning, setShowWarning] = useState(false);

  const question = questions[currentStep];

  useEffect(() => {
    axios
      .get("https://admin.hrl.ao/api/perguntas-com-respostas")
      .then((response) => {
        const formatted = response.data.map((pergunta) => ({
          id: pergunta.id,
          step: pergunta.step,
          type: pergunta.type,
          title: pergunta.title,
          description: pergunta.description,
          answers: pergunta.respostas.map((r) => ({
            id: r.id,
            description: r.description,
            imagem: r.imagem,
          })),
        }));

        setQuestions(formatted);
      })
      .catch((error) => {
        console.error("Erro ao buscar perguntas:", error);
      });
  }, []);

  useEffect(() => {
    if (!question) return;
    const existing = userAnswers.find((a) => a.pergunta_id === question.id);
    if (existing) {
      setSelectedOption(existing.resposta_id);
      setTextAnswer(existing.text || "");
    } else {
      setSelectedOption(null);
      setTextAnswer("");
    }
  }, [currentStep, question]);

  const allAnswered = questions.every((q) =>
    userAnswers.some(
      (a) => a.pergunta_id === q.id && (a.resposta_id != null || a.text)
    )
  );

  const answeredCount = userAnswers.filter(
    (a) => a.resposta_id != null || a.text
  ).length;

  if (questions.length === 0) {
    return <p className="p-10 text-gray-500">A carregar perguntas...</p>;
  }

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
                  className={`w-5 h-5 flex items-center justify-center rounded-full border-2 p-3 ${
                    idx === currentStep
                      ? "border-white text-white"
                      : "border-gray-300 text-white"
                  }`}
                  style={{
                    backgroundColor: idx <= currentStep ? "#E20612" : "#bcbdbd",
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
                We appreciate you taking the time to complete this survey.{" "}
                <br />
                Your feedback is valuable and helps us improve our training
                sessions.
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
                <p className="text-gray-500 max-w-2xl mb-10">
                  {question.description}
                </p>

                {question.type === 1 ? (
                  <div className="space-y-4">
                    {question.answers.map((answer, index) => {
                      const isSelected = selectedOption === answer.id;

                      return (
                        <label
                          key={answer.id}
                          className={`flex items-center border rounded-md p-4 cursor-pointer transition-all ${
                            isSelected
                              ? "border-[#E20612] bg-white shadow-sm"
                              : "border-gray-300 bg-white hover:shadow-md"
                          }`}
                          onClick={() => {
                            setSelectedOption(answer.id);
                            setUserAnswers((prev) => {
                              const existing = prev.find(
                                (a) => a.pergunta_id === question.id
                              );
                              if (existing) {
                                return prev.map((a) =>
                                  a.pergunta_id === question.id
                                    ? {
                                        ...a,
                                        resposta_id: answer.id,
                                        text: null,
                                      }
                                    : a
                                );
                              } else {
                                return [
                                  ...prev,
                                  {
                                    pergunta_id: question.id,
                                    resposta_id: answer.id,
                                    text: null,
                                  },
                                ];
                              }
                            });
                          }}
                        >
                          <input
                            type="radio"
                            name={`resposta-${question.id}`}
                            className="form-radio h-5 w-5 mr-4 text-[#E20612] focus:ring-[#E20612]"
                            checked={isSelected}
                            onChange={() => setSelectedOption(answer.id)}
                          />
                          <span className="text-gray-700 font-medium">
                            {answer.description}
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
                        setSelectedOption(question.answers[0]?.id || 1);
                        setUserAnswers((prev) => {
                          const resposta_id = question.answers[0]?.id || 1;
                          const existing = prev.find(
                            (a) => a.pergunta_id === question.id
                          );
                          if (existing) {
                            return prev.map((a) =>
                              a.pergunta_id === question.id
                                ? { ...a, resposta_id, text: e.target.value }
                                : a
                            );
                          } else {
                            return [
                              ...prev,
                              {
                                pergunta_id: question.id,
                                resposta_id,
                                text: e.target.value,
                              },
                            ];
                          }
                        });
                      }}
                    />
                  </div>
                ) : null}

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

                      axios
                        .post("https://admin.hrl.ao/api/submissao-survey-respostas", {
                          respostas: userAnswers,
                        })
                        .then((res) => {
                          console.log(
                            "Respostas enviadas com sucesso!",
                            res.data
                          );
                          localStorage.setItem("altrad_survey_training", "true");
                          setCompleted(true);
                        })
                        .catch((err) => {
                          console.error("Erro ao enviar respostas:", err);
                          alert("Ocorreu um erro ao submeter as respostas.");
                        });
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
