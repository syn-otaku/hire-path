"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-indigo-600 text-sm font-semibold tracking-widest uppercase mb-3 block">
              About this Sample
            </span>
            <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-snug">
              採用を、チームの
              <br />
              強みにするために。
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              このページは、採用管理SaaSのランディングページを想定して制作したポートフォリオサンプルです。
              実際のサービスではありません。
            </p>
            <p className="text-slate-600 text-base leading-relaxed mb-8">
              採用担当者が抱える「情報の分散」「調整コスト」「評価の属人化」といった課題を解決するプロダクトを想定し、
              情報設計・UIデザイン・コーディングまで一貫して制作しました。
            </p>
            <div className="flex flex-wrap gap-8">
              <div>
                <p className="text-3xl font-bold text-indigo-600">15<span className="text-lg">セクション</span></p>
                <p className="text-sm text-slate-500 mt-1">LP構成</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-green-500">Next.js</p>
                <p className="text-sm text-slate-500 mt-1">+ Tailwind CSS</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-amber-500">100<span className="text-lg">%</span></p>
                <p className="text-sm text-slate-500 mt-1">スクラッチ制作</p>
              </div>
            </div>
          </motion.div>

          {/* Office photo */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]"
          >
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&auto=format&fit=crop"
              alt="明るいモダンオフィス"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
