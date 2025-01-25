"use client";
import { motion } from "motion/react";
import { Cedarville_Cursive } from "next/font/google";

const cedarville = Cedarville_Cursive({
  weight: "400",
  subsets: ["latin"],
  style: ["normal"],
});

export default function About() {
  return (
    <>
      <div className="flex flex-none flex-col items-start justify-center flex-nowrap gap-[40px] h-min overflow-hidden p-0 font-fs max-w-[750px]">
        <div className="text-foreground-2 gap-[15px] flex flex-col mb-[50px] text-[14px]">
          <p className="font-semibold text-[16px] text-foreground-2">About</p>
          <p>
            Ever since I was young, technology has been a magnetic force in my
            life. Growning up I found a new interest in economy and finance.{" "}
          </p>
          <p>
            During my studies I had the opportunity to dive in the world of
            coding. A statistics course introduced me to the{" "}
            <span className="text-blue font-semibold">R</span> programming
            language, where I learned to analyze and solve statistical models
            and problems.
          </p>
          <p>
            This sparked a deeper curiosity in me, and I soon found myself
            exploring additional coding languages, with a special focus on{" "}
            <span className="text-green font-semibold">Python</span> and{" "}
            <span className="text-indigo-600 font-semibold">SQL</span> for data
            analysis.
          </p>
          <p>
            My journey didn't stop there. I ventured into{" "}
            <span className="text-orange font-semibold">web development</span>,
            having fun building web and desktop applications.
          </p>
          <p className="font-semibold text-[15px]">
            tldr; I enjoy learning new programming languages and creating
            valuable solutions, especially in the field of financial and data
            analysis.
          </p>
        </div>
        <div className="border-b border-solid text-foreground-2 w-[100%] pb-[20px] text-[14px]">
          <p className="text-foreground-2 font-semibold text-[16px]">
            Education
          </p>
          <div>
            <p>
              Università Telematica UniNettuno - Economia e Governo d'Impresa /{" "}
              <span className="font-semibold">2024 -</span>{" "}
              <motion.span
                className="h-2 w-2 rounded-full bg-green inline-block ml-1 mt-[2px]"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </p>
          </div>
        </div>
        <div className="border-b border-solid text-foreground-2 w-[100%] pb-[20px] text-[14px]">
          <p className="text-foreground-2 font-semibold text-[16px]">
            Working on
          </p>
          <div className="flex flex-col gap-[20px]">
            <div>
              <p>
                <span className="font-semibold text-blue">rs-quant</span> /{" "}
                <span className="font-semibold">2024 -</span>{" "}
                <motion.span
                  className="h-2 w-2 rounded-full bg-green inline-block ml-1 mt-[2px]"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />{" "}
              </p>
              <p className="flex flex-row items-center">
                rs-quant is a rust library designed for quantitative finance
                enthusiasts. It provides a set of models, formulas and tools to
                perform financial analysis.
              </p>
            </div>
            <div>
              <p>
                <span className="font-semibold text-blue">portfolio-rs</span> /{" "}
                <span className="font-semibold">2024 -</span>{" "}
                <motion.span
                  className="h-2 w-2 rounded-full bg-green inline-block ml-1 mt-[2px]"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />{" "}
              </p>
              <p className="flex flex-row items-center">
                portfolio-rs is a rust library designed to simplify portfolio
                management and analysis for developers, quantitative analystis,
                and finance enthusiasts. The library provides tools to create
                and manage portfolio instances, calculate metrics for both
                portfolio and individual positions, and apply portfolio models
                and theories for deeper insights and analysis.
              </p>
            </div>
            <div>
              <p>
                <span className="font-semibold text-blue">
                  securities-master
                </span>
                / <span className="font-semibold">2024 -</span>
                <motion.span
                  className="h-2 w-2 rounded-full bg-green inline-block ml-1 mt-[2px]"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </p>
              <p className="flex flex-row items-center">
                securities-master contains SQL and Python scripts designed to
                help automate the management, fetching, and manipulation of
                financial data. The tools provided in this library are useful
                for those who works with financial databases and need to
                streamline data operations such as data extraction, data
                transformation, and period updates.
              </p>
            </div>
          </div>
        </div>
        <div className="text-foreground-2 w-[100%] flex flex-col">
          <p className={`${cedarville.className} text-[25px] font-semibold`}>
            Study hard what interests you the most in the most undisciplined,
            irreverent and original manner possible.
          </p>
          <p
            className={`${cedarville.className} font-semibold text-foreground-3 self-end text-[20px]`}
          >
            Richard Feynman
          </p>
        </div>
      </div>
    </>
  );
}
