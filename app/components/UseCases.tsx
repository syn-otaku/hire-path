"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const cases = [
  {
    label: "スタートアップ",
    title: "少人数チームで採用を加速",
    desc: "専任の人事がいなくても、HirePathがプロセスをガイド。創業期の採用スピードを最大化します。",
    photo: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=85&auto=format&fit=crop",
    alt: "スタートアップチームの様子",
    badge: "Startup",
    badgeColor: "bg-indigo-100 text-indigo-700",
  },
  {
    label: "中小企業",
    title: "採用担当者の負担を大幅削減",
    desc: "兼任担当者が多い中小企業に最適。日程調整・評価集計の自動化で、本業との両立をサポート。",
    photo: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=85&auto=format&fit=crop",
    alt: "中小企業のオフィス環境",
    badge: "SMB",
    badgeColor: "bg-green-100 text-green-700",
  },
  {
    label: "人材紹介会社",
    title: "複数クライアントの求人を一元管理",
    desc: "複数企業の求人・候補者・面接情報をひとつのプラットフォームで管理。業務効率を劇的に向上。",
    photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=85&auto=format&fit=crop",
    alt: "人材紹介会社の担当者",
    badge: "Agency",
    badgeColor: "bg-amber-100 text-amber-700",
  },
  {
    label: "採用代行会社",
    title: "クライアント報告をリアルタイムで",
    desc: "採用進捗・KPI・面接評価をクライアントと即座に共有。信頼性の高いサービス提供を実現。",
    photo: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=85&auto=format&fit=crop",
    alt: "採用代行会社のミーティング",
    badge: "RPO",
    badgeColor: "bg-purple-100 text-purple-700",
  },
];

export default function UseCases() {
  return (
    <section id="usecases" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-indigo-600 text-sm font-semibold tracking-widest uppercase mb-3 block">
            Use Cases
          </span>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            あらゆる採用チームに、フィットする。
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            規模・業種・採用スタイルを問わず、HirePathは柔軟に対応します。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-shadow"
            >
              {/* Photo */}
              <div className="relative h-56 w-full">
                <Image
                  src={c.photo}
                  alt={c.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span className={`absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full ${c.badgeColor}`}>
                  {c.badge}
                </span>
              </div>
              {/* Text */}
              <div className="p-7 bg-white">
                <p className="text-xs text-slate-400 font-medium mb-2">{c.label}</p>
                <h3 className="font-bold text-slate-800 text-xl mb-3">{c.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
