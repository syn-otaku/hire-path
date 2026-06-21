"use client";

import { motion } from "framer-motion";

const applicants = [
  { name: "田中 美咲", role: "フロントエンドエンジニア", status: "書類選考", score: 92, avatar: "TM" },
  { name: "鈴木 健太", role: "プロダクトマネージャー", status: "一次面接", score: 87, avatar: "SK" },
  { name: "佐藤 あかり", role: "UXデザイナー", status: "最終面接", score: 95, avatar: "SA" },
  { name: "山田 拓也", role: "バックエンドエンジニア", status: "オファー", score: 89, avatar: "YT" },
];

const statusColors: Record<string, string> = {
  書類選考: "bg-slate-100 text-slate-600",
  一次面接: "bg-indigo-50 text-indigo-700",
  最終面接: "bg-amber-50 text-amber-700",
  オファー: "bg-green-50 text-green-700",
};

const kpis = [
  { label: "今月の応募数", value: "248", delta: "+18%", color: "text-indigo-600" },
  { label: "書類通過率", value: "34%", delta: "+5pt", color: "text-green-600" },
  { label: "内定承諾率", value: "78%", delta: "+12pt", color: "text-amber-600" },
];

export default function ProductPreview() {
  return (
    <section className="py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-indigo-600 text-sm font-semibold tracking-widest uppercase mb-3 block">
            Product Preview
          </span>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            採用管理の全体像を、ひと目で把握。
          </h2>
          <p className="text-slate-400 text-sm">
            ※ 以下はUIデモ画面です。サンプルデータを使用しています。
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden"
        >
          {/* Fake browser bar */}
          <div className="bg-slate-100 px-5 py-3 flex items-center gap-2 border-b border-slate-200">
            <div className="w-3 h-3 rounded-full bg-red-300" />
            <div className="w-3 h-3 rounded-full bg-amber-300" />
            <div className="w-3 h-3 rounded-full bg-green-300" />
            <div className="ml-4 bg-white rounded-md px-4 py-1 text-xs text-slate-400 flex-1 max-w-xs">
              app.hirepath.jp/dashboard
            </div>
          </div>

          <div className="p-8">
            {/* KPI cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {kpis.map((kpi, i) => (
                <div key={i} className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
                  <p className="text-xs text-slate-400 mb-2">{kpi.label}</p>
                  <p className={`text-3xl font-bold ${kpi.color} mb-1`}>{kpi.value}</p>
                  <p className="text-xs text-green-500 font-medium">{kpi.delta} 先月比</p>
                </div>
              ))}
            </div>

            {/* Applicant table */}
            <div className="rounded-2xl border border-slate-100 overflow-hidden overflow-x-auto">
              <div className="bg-slate-50 px-5 py-3 border-b border-slate-100 flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-700">応募者一覧</span>
                <span className="text-xs text-slate-400">全 48 件</span>
              </div>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-100">
                    <th className="text-left px-5 py-3 text-xs text-slate-400 font-medium">氏名</th>
                    <th className="text-left px-5 py-3 text-xs text-slate-400 font-medium">応募職種</th>
                    <th className="text-left px-5 py-3 text-xs text-slate-400 font-medium">選考状況</th>
                    <th className="text-left px-5 py-3 text-xs text-slate-400 font-medium">AIスコア</th>
                  </tr>
                </thead>
                <tbody>
                  {applicants.map((a, i) => (
                    <tr key={i} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-xs font-bold text-indigo-600">
                            {a.avatar}
                          </div>
                          <span className="font-medium text-slate-800">{a.name}</span>
                        </div>
                      </td>
                      <td className="px-5 py-4 text-slate-500">{a.role}</td>
                      <td className="px-5 py-4">
                        <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${statusColors[a.status]}`}>
                          {a.status}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-2">
                          <div className="w-16 h-1.5 rounded-full bg-slate-100 overflow-hidden">
                            <div
                              className="h-full bg-indigo-500 rounded-full"
                              style={{ width: `${a.score}%` }}
                            />
                          </div>
                          <span className="text-slate-700 font-semibold text-xs">{a.score}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
