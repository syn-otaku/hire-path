"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "無料トライアルはありますか？",
    a: "想定仕様: Starterプランは14日間無料でお試しいただけます。クレジットカード登録不要でご利用いただける設計です。",
  },
  {
    q: "既存の採用ツールから移行できますか？",
    a: "想定仕様: 主要ATS（採用管理システム）からのデータインポートに対応する予定です。移行サポートも無償提供を想定しています。",
  },
  {
    q: "AIマッチング機能はどのように動作しますか？",
    a: "想定仕様: 応募者の職務経歴・スキルセットと求人要件をAIが分析し、マッチング度をスコアリングします。このページではUIデモとして表示しています。",
  },
  {
    q: "セキュリティ・個人情報保護の対応はどうなっていますか？",
    a: "想定仕様: 採用情報・個人情報の暗号化保管、権限管理、監査ログ出力などを実装する設計です。実際のサービスではありません。",
  },
  {
    q: "導入にどのくらいの期間がかかりますか？",
    a: "想定仕様: アカウント作成後、最短即日で利用開始できる設計です。Enterpriseプランにはオンボーディングサポートを想定しています。",
  },
  {
    q: "途中解約はできますか？",
    a: "想定仕様: 月次契約はいつでも解約可能な設計です。年次契約にはプラン変更・解約ポリシーを設ける想定です。",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-slate-100">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-medium text-slate-800 text-base">{q}</span>
        <ChevronDown
          size={20}
          aria-hidden="true"
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
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">よくある質問</h2>
          <p className="text-xs text-slate-400">※ 以下はポートフォリオサンプルとして想定した回答です。実際のサービスではありません。</p>
        </motion.div>

        <div className="bg-white rounded-3xl px-10 py-6 border border-slate-100 shadow-sm">
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
