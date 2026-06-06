"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "無料トライアルはありますか？",
    a: "はい。Starterプランは14日間無料でお試しいただけます。クレジットカード登録不要でご利用いただけます。",
  },
  {
    q: "既存の採用ツールから移行できますか？",
    a: "はい。主要ATS（採用管理システム）からのデータインポートに対応しています。移行サポートも無償でご利用いただけます。",
  },
  {
    q: "AIマッチング機能はどのように動作しますか？",
    a: "応募者の職務経歴・スキルセットと求人要件をAIが分析し、マッチング度を100点満点でスコアリングします。※想定機能のUIデモとして表示しています。",
  },
  {
    q: "セキュリティ・個人情報保護の対応はどうなっていますか？",
    a: "ISO 27001準拠のセキュリティ体制で運用しています。個人情報は暗号化して保管し、アクセス権限管理も細かく設定可能です。",
  },
  {
    q: "導入にどのくらいの期間がかかりますか？",
    a: "アカウント作成後、最短即日でご利用いただけます。Enterpriseプランの場合はオンボーディングサポートをご用意しています（通常1〜2週間）。",
  },
  {
    q: "中途解約はできますか？",
    a: "はい。月次契約の場合はいつでも解約可能です。年次契約の場合はプラン変更・解約ポリシーをご確認ください。",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-slate-100">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-medium text-slate-800 text-base">{q}</span>
        <ChevronDown
          size={20}
          className={`text-slate-400 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="text-slate-500 text-sm leading-relaxed pb-5">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-28 bg-slate-50">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-indigo-600 text-sm font-semibold tracking-widest uppercase mb-3 block">
            FAQ
          </span>
          <h2 className="text-4xl font-bold text-slate-900">よくある質問</h2>
        </motion.div>

        <div className="bg-white rounded-3xl px-8 py-2 border border-slate-100 shadow-sm">
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
