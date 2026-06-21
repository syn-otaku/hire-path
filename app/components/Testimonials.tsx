"use client";

import { motion } from "framer-motion";
import { Clock, LayoutGrid, BarChart2 } from "lucide-react";

const useCaseCards = [
  {
    icon: Clock,
    color: "bg-indigo-50 text-indigo-600",
    persona: "スタートアップ 人事責任者",
    problem: "面接の日程調整だけで週3〜4時間を消費している",
    solution: "候補者へのURL送付だけで日程確定まで完結。調整工数をゼロに近づける。",
  },
  {
    icon: LayoutGrid,
    color: "bg-green-50 text-green-600",
    persona: "中小企業 採用マネージャー",
    problem: "面接官ごとに評価フォーマットが違い、集計のたびに手間がかかる",
    solution: "標準化された評価フォームで全員の意見を同じ基準で比較・集計できる。",
  },
  {
    icon: BarChart2,
    color: "bg-amber-50 text-amber-600",
    persona: "RPOコンサルタント",
    problem: "複数クライアントの案件が並行し、進捗の把握・報告に時間がかかる",
    solution: "一元管理ダッシュボードでリアルタイムの進捗をクライアントと即座に共有。",
  },
];

export default function Testimonials() {
  return (
    <section className="py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-indigo-600 text-sm font-semibold tracking-widest uppercase mb-3 block">
            Use Case
          </span>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            こんな課題、ありませんか？
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            採用担当者が日々感じる課題を、HirePathはひとつの画面で解決します。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCaseCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col gap-5"
            >
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${card.color}`}>
                <card.icon size={22} />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium mb-2">{card.persona}</p>
                <p className="text-slate-800 font-semibold text-base leading-snug mb-4">
                  &ldquo;{card.problem}&rdquo;
                </p>
                <p className="text-slate-500 text-sm leading-relaxed border-t border-slate-100 pt-4">
                  → {card.solution}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
