"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const points = [
  "求人作成から内定承諾まで、全工程を一画面で管理",
  "AIが候補者と求人をマッチングし、最適な人材を提案",
  "面接日程調整を自動化し、メールのやり取りをゼロに",
  "評価シートの共有・集計を標準化し、公平な採用判断",
  "採用KPIをリアルタイムで可視化し、改善サイクルを加速",
];

export default function Solution() {
  return (
    <section id="solution" className="py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3]"
          >
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80&auto=format&fit=crop"
              alt="チームで採用業務を進める様子"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            {/* Floating stat card */}
            <div className="absolute bottom-6 left-6 bg-white rounded-2xl shadow-lg px-5 py-4">
              <p className="text-xs text-slate-500 mb-1">採用リードタイム</p>
              <p className="text-2xl font-bold text-indigo-600">
                −42<span className="text-base font-semibold">%</span>
              </p>
              <p className="text-xs text-slate-400 mt-0.5">導入後平均（サンプルデータ）</p>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-indigo-600 text-sm font-semibold tracking-widest uppercase mb-3 block">
              Solution
            </span>
            <h2 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              応募から内定まで、
              <br />
              ひとつの画面で完結。
            </h2>
            <p className="text-slate-500 text-lg mb-8 leading-relaxed">
              HirePathは採用プロセス全体を一元管理するプラットフォームです。
              ツールを切り替える手間を排除し、採用チームが「採用」に集中できる環境を提供します。
            </p>

            <ul className="space-y-4">
              {points.map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 size={20} className="text-green-500 mt-0.5 shrink-0" />
                  <span className="text-slate-700 text-base">{point}</span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-10">
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors"
              >
                無料デモを見る
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
