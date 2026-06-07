import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "HirePath — 採用業務を、もっと速く、もっと正確に。",
  description:
    "求人作成、応募者管理、面接調整、評価共有まで。HirePathは採用チームの業務をひとつにまとめるAI採用管理プラットフォームです。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={inter.variable}>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-indigo-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-semibold"
        >
          メインコンテンツへスキップ
        </a>
        {children}
      </body>
    </html>
  );
}
