"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden min-h-[420px] flex items-center">
          {/* Background photo */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80&auto=format&fit=crop"
              alt="成功した採用チーム"
              fill
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-indigo-900/75" />
          </div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative z-10 max-w-2xl mx-auto text-center px-8 py-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-snug">
              採用チームの
              <br />
              はたらき方を変えよう。
            </h2>
            <p className="text-indigo-200 text-base mb-3 leading-relaxed">
              このCTAセクションは、ユーザーに行動を促す最終訴求エリアのデザインサンプルです。
            </p>
            <p className="text-indigo-300 text-sm mb-10">
              ※ ボタンリンク・フォームは実装されていません
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 bg-white text-indigo-700 font-semibold px-8 py-4 rounded-xl hover:bg-indigo-50 transition-colors text-base focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-indigo-900 outline-none"
              >
                無料デモを見る（サンプル）
                <ArrowRight size={18} />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 border border-white/40 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors text-base focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-indigo-900 outline-none"
              >
                資料を請求する（サンプル）
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
