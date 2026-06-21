"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "¥9,800",
    unit: "/ 月",
    desc: "小規模採用・スタートアップ向け",
    features: [
      "求人掲載 5件まで",
      "応募者管理 無制限",
      "面接日程調整",
      "評価フォーム",
      "メールサポート",
    ],
    cta: "無料で始める",
    highlight: false,
  },
  {
    name: "Growth",
    price: "¥29,800",
    unit: "/ 月",
    desc: "成長期の採用チーム向け",
    features: [
      "求人掲載 無制限",
      "AIマッチング機能",
      "採用分析ダッシュボード",
      "チームメンバー 10名",
      "優先サポート",
      "API連携（基本）",
    ],
    cta: "デモを見る",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "お問い合わせ",
    unit: "",
    desc: "大規模採用・複数拠点向け",
    features: [
      "Growth機能すべて",
      "チームメンバー 無制限",
      "専任カスタマーサクセス",
      "SLA保証",
      "SSO / SAML対応",
      "カスタムAPI連携",
    ],
    cta: "営業に相談する",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-indigo-600 text-sm font-semibold tracking-widest uppercase mb-3 block">
            Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            シンプルな料金体系
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            規模に合わせて選べる3プラン。いつでもアップグレード・解約可能。
          </p>
          <p className="text-xs text-slate-400 mt-3">※ 料金・プランはポートフォリオサンプルです。実際のサービスではありません。</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`rounded-3xl p-8 border ${
                plan.highlight
                  ? "bg-indigo-600 border-indigo-600 shadow-xl shadow-indigo-100"
                  : "bg-white border-slate-200"
              }`}
            >
              <p className={`text-sm font-semibold mb-1 ${plan.highlight ? "text-indigo-200" : "text-slate-500"}`}>
                {plan.name}
              </p>
              <div className="flex items-end gap-1 mb-2">
                <span className={`text-4xl font-bold ${plan.highlight ? "text-white" : "text-slate-900"}`}>
                  {plan.price}
                </span>
                <span className={`text-sm mb-1 ${plan.highlight ? "text-indigo-200" : "text-slate-500"}`}>
                  {plan.unit}
                </span>
              </div>
              <p className={`text-sm mb-8 ${plan.highlight ? "text-indigo-200" : "text-slate-500"}`}>
                {plan.desc}
              </p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3">
                    <CheckCircle2
                      size={17}
                      className={plan.highlight ? "text-green-300" : "text-green-500"}
                    />
                    <span className={`text-sm ${plan.highlight ? "text-indigo-100" : "text-slate-600"}`}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`block text-center font-semibold py-3 rounded-xl transition-colors outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                  plan.highlight
                    ? "bg-white text-indigo-600 hover:bg-indigo-50 focus-visible:ring-indigo-300"
                    : "bg-indigo-600 text-white hover:bg-indigo-700 focus-visible:ring-indigo-400"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
