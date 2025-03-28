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
    <div className="h-screen w-full font-sans flex flex-col">
      {/* Top Section - 50% */}
      <div
        className="relative h-[50%] w-full bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bg1.src})` }}
      >
        {/* <Image src={logo} alt="Logo" width={70} height={70} /> */}
      </div>

      {/* Bottom Section - 50% */}
      <div className="h-[50%] w-full bg-[#E20612] text-white flex flex-col items-center justify-center text-center px-6 sm:px-10 md:px-20 lg:px-40">
        <Image src={logo} alt="Logo" width={50} height={50} />

        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 mt-5 leading-snug">
          Welcome to the Training Leadership Feedback Survey
        </h1>
        <p className="text-sm sm:text-base md:text-lg max-w-2xl mb-10">
          Your opinion matters. This quick survey helps us improve future
          training sessions and ensures we meet your leadership development
          needs.
        </p>

        {alreadySubmitted ? (
          <p className="bg-white text-[#E20612] px-6 py-4 rounded-md text-sm sm:text-base font-semibold shadow-lg">
            You have already submitted the survey. Thank you!
          </p>
        ) : (
          <Link
            href="/survey-form"
            className="bg-white text-[#E20612] px-6 py-4 rounded-md text-sm sm:text-base font-semibold shadow-lg"
          >
            Start Survey →
          </Link>
        )}
      </div>
    </div>
  );
}
