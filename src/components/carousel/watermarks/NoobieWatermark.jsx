"use client";

import React from "react";
import { motion } from "framer-motion";

export function NoobieSectionWatermark() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden select-none z-0"
    >
      <motion.div
        initial={{ x: "-20%", y: "10%", rotate: -12, opacity: 0 }}
        animate={{
          x: ["-20%", "110%"],
          y: ["10%", "60%"],
          rotate: [-12, 12],
          opacity: [0, 0.05, 0.09, 0.05, 0],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -top-10 w-96 h-96 sm:w-[460px] sm:h-[460px]"
      >
        <img
          src="/projects/noobie/logo.png"
          alt=""
          className="w-full h-full object-contain filter drop-shadow-[0_0_60px_rgba(255,91,0,0.3)]"
        />
      </motion.div>
    </div>
  );
}

export function NoobieCardWatermark({ onOpenDetails }) {
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden select-none z-0"
      >
        <motion.div
          initial={{ x: "-15%", y: "70%", rotate: -15, opacity: 0 }}
          animate={{
            x: ["-10%", "105%"],
            y: ["65%", "-25%"],
            rotate: [-15, 15],
            opacity: [0, 0.08, 0.15, 0.08, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute w-60 h-60 sm:w-80 sm:h-80"
        >
          <img
            src="/projects/noobie/logo.png"
            alt=""
            className="w-full h-full object-contain filter drop-shadow-[0_0_40px_rgba(255,91,0,0.35)]"
          />
        </motion.div>

        <motion.div
          initial={{ x: "105%", y: "-15%", rotate: 20, opacity: 0 }}
          animate={{
            x: ["105%", "-15%"],
            y: ["-15%", "65%"],
            rotate: [20, -10],
            opacity: [0, 0.06, 0.12, 0.06, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
            delay: 6,
          }}
          className="absolute w-44 h-44 sm:w-60 sm:h-60"
        >
          <img
            src="/projects/noobie/logo.png"
            alt=""
            className="w-full h-full object-contain filter drop-shadow-[0_0_35px_rgba(255,91,0,0.25)]"
          />
        </motion.div>
      </div>

      <div className="absolute top-5 right-5 sm:top-7 sm:right-7 z-20">
        <div
          className="relative group/noobie-corner cursor-pointer"
          onClick={onOpenDetails}
        >
          <div className="absolute -inset-1 rounded-2xl bg-[#FF5B00]/30 blur-sm opacity-60 transition-all group-hover/noobie-corner:opacity-100 group-hover/noobie-corner:scale-110" />
          <img
            src="/projects/noobie/logo.png"
            alt="Noobie App Icon"
            className="relative h-11 w-11 sm:h-14 sm:w-14 rounded-2xl border border-[#FF5B00]/40 shadow-lg object-contain bg-black transition-transform group-hover/noobie-corner:scale-105"
          />
        </div>
      </div>
    </>
  );
}

