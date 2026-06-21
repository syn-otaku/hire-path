"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Users,
  CalendarCheck,
  Star,
  Brain,
  TrendingUp,
} from "lucide-react";

const features = [
  {
    icon: FileText,
    color: "bg-indigo-50 text-indigo-600",
    title: "求人管理",
    desc: "求人票の作成・公開・管理をワンストップで。複数の求人サイトへの一括掲載にも対応。",
  },
  {
    icon: Users,
    color: "bg-green-50 text-green-600",
    title: "応募者管理",
    desc: "応募者の情報・選考状況・コミュニケーション履歴をひとつのタイムラインで把握。",
  },
  {
    icon: CalendarCheck,
    color: "bg-amber-50 text-amber-600",
    title: "面接日程調整",
    desc: "候補者と面接官の空き時間を自動で照合。URLを送るだけで日程確定まで完結。",
  },
  {
    icon: Star,
    color: "bg-purple-50 text-purple-600",
    title: "評価共有",
    desc: "面接官ごとの評価をフォーム入力で収集し、一覧比較・集計を自動化。属人化を解消。",
  },
  {
    icon: Brain,
    color: "bg-rose-50 text-rose-600",
    title: "AIマッチング",
    desc: "職務経歴と求人要件をAIが分析し、マッチング度を数値化。優先すべき候補者を即提案。※想定機能",
  },
  {
    icon: TrendingUp,
    color: "bg-sky-50 text-sky-600",
    title: "採用分析",
    desc: "求人ごとの応募数・通過率・時間コストをダッシュボードで可視化。改善ポイントを発見。※サンプルデータ",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-indigo-600 text-sm font-semibold tracking-widest uppercase mb-3 block">
            Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            採用に必要な機能が、すべて揃っている。
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            バラバラのツールを統合し、採用チームの生産性を最大化します。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white rounded-2xl border border-slate-100 p-7 hover:shadow-md transition-shadow"
            >
              <div className={`w-12 h-12 rounded-xl ${f.color} flex items-center justify-center mb-5`}>
                <f.icon size={22} />
              </div>
              <h3 className="font-bold text-slate-800 text-lg mb-2">{f.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
