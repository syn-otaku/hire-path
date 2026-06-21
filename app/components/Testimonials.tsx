"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "面接の日程調整だけで週に3〜4時間使っていました。HirePathで自動化してからは、その時間をそのまま候補者との対話に充てられています。",
    name: "山本 裕子",
    title: "人事責任者",
    company: "テック系スタートアップ",
    initial: "山",
    color: "bg-indigo-100 text-indigo-700",
  },
  {
    quote:
      "面接官ごとに評価のフォーマットがバラバラで、集計が毎回大変でした。HirePathの評価フォームを導入してから、全員の意見を同じ基準で比較できるようになりました。",
    name: "佐々木 剛",
    title: "採用マネージャー",
    company: "製造業（従業員200名）",
    initial: "佐",
    color: "bg-green-100 text-green-700",
  },
  {
    quote:
      "複数クライアントの案件を並行して動かすのが難しかったのですが、一元管理できるようになって進捗共有の手間が激減しました。",
    name: "田中 綾香",
    title: "RPOコンサルタント",
    company: "人材紹介会社",
    initial: "田",
    color: "bg-amber-100 text-amber-700",
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
            Testimonials
          </span>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            導入された方の声
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            実際に使い始めた採用担当者からのフィードバックです。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col"
            >
              <p className="text-slate-700 text-base leading-relaxed flex-1 mb-8">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${t.color}`}>
                  {t.initial}
                </div>
                <div>
                  <p className="font-semibold text-slate-800 text-sm">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.title} · {t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
