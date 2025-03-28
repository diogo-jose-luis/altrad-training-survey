"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import bg1 from "@/assets/images/bg2.jpg";
import logo from "@/assets/images/logo.jpg";

export default function SurveyHomePage() {
  const [alreadySubmitted, setAlreadySubmitted] = useState(false);

  useEffect(() => {
    const submitted = localStorage.getItem("survey_submitted");
    if (submitted === "true") {
      setAlreadySubmitted(true);
    }
  }, []);

  return (
    <div className="relative h-screen w-full font-sans">
      {/* Background */}
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
          style={{ backgroundColor: "#E20612", opacity: 0.5 }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center text-white px-6 sm:px-10 md:px-20 lg:px-40">
        <Image src={logo} alt="Logo" width={70} height={70} className="mb-6" />
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-snug">
          Welcome to the Training Leadership Feedback Survey
        </h1>
        <p className="text-base sm:text-lg md:text-xl max-w-2xl mb-10">
          Your opinion matters. This quick survey helps us improve future
          training sessions and ensures we meet your leadership development
          needs.
        </p>

        {alreadySubmitted ? (
          <p className="bg-white text-[#E20612] px-6 py-4 rounded-md text-base sm:text-lg font-semibold shadow-lg">
            You have already submitted the survey. Thank you!
          </p>
        ) : (
          <Link
            href="/survey-form"
            className="px-6 sm:px-8 py-3 sm:py-4 rounded-md text-white text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            style={{ backgroundColor: "#E20612" }}
          >
            Start Survey →
          </Link>
        )}
      </div>
    </div>
  );
}
