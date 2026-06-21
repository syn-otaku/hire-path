"use client";

import { motion } from "framer-motion";
import { Inbox, Clock, Users, BarChart2, TrendingUp } from "lucide-react";

const problems = [
  {
    icon: Inbox,
    title: "応募者情報が散らばる",
    desc: "メール・スプレッドシート・Slackと情報が分散し、最新状況の把握に時間がかかる。",
  },
  {
    icon: Clock,
    title: "面接調整に時間がかかる",
    desc: "担当者の空き確認、候補者への連絡、日程変更対応で1件あたり数十分を消費する。",
  },
  {
    icon: Users,
    title: "評価共有が属人化する",
    desc: "面接官ごとにフォーマットが異なり、評価が担当者の頭の中にしか存在しない。",
  },
  {
    icon: BarChart2,
    title: "採用状況が見えにくい",
    desc: "どの求人に何人が応募中か、内定承諾率はどのくらいかを即座に確認できない。",
  },
  {
    icon: TrendingUp,
    title: "採用コストが上がる",
    desc: "非効率な業務フローと管理ツールの乱立により、採用1名あたりのコストが膨らむ。",
  },
];

export default function Problem() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-600 text-sm font-semibold tracking-widest uppercase mb-3 block">
            Problem
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            採用担当者が毎日感じる、5つの課題
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            優秀な人材を見つけることより、採用業務の管理に追われていませんか？
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-slate-50 rounded-2xl p-8 border border-slate-100"
            >
              <div className="w-11 h-11 rounded-xl bg-red-50 flex items-center justify-center mb-6">
                <item.icon size={22} className="text-red-400" />
              </div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}

          {/* Last card: bridge to solution */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="bg-indigo-600 rounded-2xl p-7 flex flex-col justify-between"
          >
            <p className="text-indigo-100 text-lg font-medium leading-relaxed">
              これらすべての課題を、HirePathはひとつのプラットフォームで解決します。
            </p>
            <a
              href="#solution"
              className="mt-6 inline-flex items-center text-white font-semibold text-sm underline underline-offset-4"
            >
              解決策を見る →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
