import React from "react";
import Image from "next/image";

import bg1 from "@/assets/images/bg2.jpg";
import Link from "next/link";
import logo from "@/assets/images/logo.jpg";

export default function WizardStep1() {
  return (
    <div className="flex h-screen w-full font-sans">
      {/* Left Side */}
      <div className="w-[30%] relative">
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

        {/* Timeline */}
        <div className="relative z-20 flex flex-col items-center pt-20 pl-80">
          {[1, 2, 3, 4, 5].map((step) => (
            <React.Fragment key={step}>
              |
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full border-2 ${
                  step === 1
                    ? "border-white text-white-900"
                    : "border-gray-300 text-white-900"
                }`}
                style={{ backgroundColor: step <= 2 ? "#E20612" : "#bcbdbd" }}
              >
                {step}
              </div>
              |
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Right Side */}
      <div className="w-[70%] bg-gray-50 flex flex-col justify-between p-20">
        <div>
          <Link href="/">
            <Image src={logo} alt="Logo" width={50} height={50} className="mb-4" />
          </Link>
          <p className="text-gray-400 text-sm mb-4" style={{ color: "#E20612" }}>Step 2</p>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
          2. Was the content relevant to your leadership role?
          </h1>
          <p className="text-gray-500 max-w-2xl mb-10">
            Talion argumentum et usu, dicit viderer evertitur te has. Eu dictas
            concludaturque usu, facete detracto patrioque an per, lucilius
            pertinacia eu vel.
          </p>

          <div className="space-y-4">
            {["Yes", "No", "Somewhat"].map(
              (option, index) => (
                <label
                  key={index}
                  className="flex items-center border rounded-md p-4 cursor-pointer hover:shadow-md transition-all border-gray-300 bg-white"
                >
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-purple-600 border-gray-300 mr-4"
                  />
                  <span className="text-gray-700 font-medium">{option}</span>
                </label>
              )
            )}
          </div>
        </div>

        <div className="flex justify-end">

          <Link
            className="text-white px-6 py-3 rounded-md hover:bg-purple-700 mr-2"
            style={{ backgroundColor: "#2c2c2c" }}
            href="/survey-form"
          >
            {" "}
            PREVIUOS →{" "}
          </Link>

          <Link
            className="text-white px-6 py-3 rounded-md hover:bg-purple-700"
            style={{ backgroundColor: "#E20612" }}
            href="/step-2"
          >
            NEXT →
          </Link>
          
        </div>
      </div>
    </div>
  );
}
