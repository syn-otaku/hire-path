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
              About HirePath
            </span>
            <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
              採用を、チームの
              <br />
              強みにするために。
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              HirePathは、採用担当者・人事責任者・経営者のすべてが「採用の全体像」を
              把握できるよう設計されています。
            </p>
            <p className="text-slate-600 text-base leading-relaxed mb-8">
              バラバラのツール、メールでのやり取り、スプレッドシート管理。
              そういった非効率を一掃し、採用チームが本来すべきことに集中できる
              環境を提供します。
            </p>
            <div className="flex gap-10">
              <div>
                <p className="text-3xl font-bold text-indigo-600">1,200<span className="text-lg">社+</span></p>
                <p className="text-sm text-slate-500 mt-1">導入企業数</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-green-500">42<span className="text-lg">%</span></p>
                <p className="text-sm text-slate-500 mt-1">採用工数削減（平均）</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-amber-500">4.8<span className="text-lg">/5</span></p>
                <p className="text-sm text-slate-500 mt-1">顧客満足度</p>
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
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=85&auto=format&fit=crop"
              alt="明るいモダンオフィス"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
