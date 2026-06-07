"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "面接の日程調整だけで週に3〜4時間使っていましたが、HirePathで完全自動化できました。今はその時間を候補者との質の高い対話に使っています。",
    name: "山本 裕子",
    title: "人事責任者",
    company: "テックスタートアップ A社",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&q=80&auto=format&fit=crop&crop=face",
  },
  {
    quote:
      "応募者ごとに評価がバラバラで困っていました。HirePathの評価フォームを使い始めてから、面接官全員の意見を公平に比較できるようになりました。採用の質が上がったと実感しています。",
    name: "佐々木 剛",
    title: "採用マネージャー",
    company: "製造業 B社（従業員200名）",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=120&q=80&auto=format&fit=crop&crop=face",
  },
  {
    quote:
      "複数クライアントの求人を同時に動かすのが大変でしたが、HirePathで全案件を一元管理できるようになりました。クライアントへの進捗報告も格段に楽になりました。",
    name: "田中 綾香",
    title: "RPOコンサルタント",
    company: "人材紹介会社 C社",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&q=80&auto=format&fit=crop&crop=face",
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
            採用担当者の声
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            HirePathを使い始めた方々から寄せられたフィードバックです。
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
              {/* Stars */}
              <div className="flex gap-0.5 mb-5">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="text-amber-400">★</span>
                ))}
              </div>
              <p className="text-slate-700 text-base leading-relaxed flex-1 mb-8">
                "{t.quote}"
              </p>
              {/* Person */}
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 ring-2 ring-indigo-100">
                  <Image
                    src={t.photo}
                    alt={t.name}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-slate-800">{t.name}</p>
                  <p className="text-sm text-slate-500">{t.title}</p>
                  <p className="text-xs text-slate-400">{t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
