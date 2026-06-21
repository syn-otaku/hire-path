"use client";

import { motion } from "framer-motion";
import { FilePlus, UserCheck, CalendarDays, ClipboardList, Trophy } from "lucide-react";

const steps = [
  {
    icon: FilePlus,
    step: "01",
    title: "求人作成",
    desc: "テンプレートから求人票を作成し、複数の媒体に一括掲載。",
  },
  {
    icon: UserCheck,
    step: "02",
    title: "応募者管理",
    desc: "すべての応募者情報を自動集約。AIスコアでスクリーニングを効率化。",
  },
  {
    icon: CalendarDays,
    step: "03",
    title: "面接調整",
    desc: "URLを送るだけで候補者が日程を選択。リマインドも自動送信。",
  },
  {
    icon: ClipboardList,
    step: "04",
    title: "評価入力・共有",
    desc: "面接後に評価フォームを送信。全員の評価をダッシュボードで一覧確認。",
  },
  {
    icon: Trophy,
    step: "05",
    title: "内定・オファー",
    desc: "内定通知・条件提示・承諾確認まで、システム内で完結。",
  },
];

export default function Workflow() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-indigo-600 text-sm font-semibold tracking-widest uppercase mb-3 block">
            Workflow
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            採用の流れを、シンプルに。
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            HirePathが採用プロセスのすべてのステップをガイドします。
          </p>
        </motion.div>

        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-px bg-slate-200 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 rounded-2xl bg-indigo-600 flex items-center justify-center mb-5 shadow-md shadow-indigo-100">
                  <s.icon size={28} className="text-white" />
                </div>
                <span className="text-xs font-bold text-indigo-400 tracking-widest mb-1">
                  STEP {s.step}
                </span>
                <h3 className="font-bold text-slate-800 text-base mb-2">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
