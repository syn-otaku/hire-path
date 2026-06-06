"use client";

import { motion } from "framer-motion";

const companies = [
  "SmartHR株式会社",
  "Sansan株式会社",
  "freee株式会社",
  "ChatWork株式会社",
  "HENNGE株式会社",
  "Repro株式会社",
  "ログラス株式会社",
  "UPSIDER株式会社",
];

export default function TrustedBy() {
  return (
    <section className="py-14 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm text-slate-400 font-medium mb-8 tracking-wide uppercase">
          全国 1,200 社以上の採用チームに選ばれています
        </p>
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-12 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          >
            {[...companies, ...companies].map((name, i) => (
              <span
                key={i}
                className="text-slate-400 font-semibold text-base whitespace-nowrap shrink-0"
              >
                {name}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
