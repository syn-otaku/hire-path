"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden">
      {/* Full-width background photo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80&auto=format&fit=crop"
          alt="明るいオフィスで働く採用チーム"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/92 via-white/65 to-white/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="max-w-xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 motion-safe:animate-pulse" />
            採用管理SaaS — ポートフォリオ制作サンプル
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 leading-snug tracking-tight mb-6"
          >
            採用業務を、
            <br />
            もっと速く、
            <br />
            <span className="text-indigo-600">もっと正確に。</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-600 leading-relaxed mb-10"
          >
            求人作成・応募者管理・面接調整・評価共有まで。
            採用チームの業務をひとつにまとめるAI採用管理プラットフォームのランディングページ制作サンプルです。
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors text-base focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 outline-none"
            >
              機能を見る
              <ArrowRight size={18} />
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-semibold px-7 py-3.5 rounded-xl border border-slate-200 transition-colors text-base focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 outline-none"
            >
              <Play size={16} className="text-indigo-600" />
              料金を見る
            </a>
          </motion.div>

          {/* Portfolio note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 text-xs text-slate-400 leading-relaxed"
          >
            ※ 掲載されているデータ・企業名・人物はすべてダミーです。実際のサービスではありません。
          </motion.p>
        </div>
      </div>
    </section>
  );
}
