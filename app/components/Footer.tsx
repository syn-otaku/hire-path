const links = {
  製品: ["機能一覧", "料金", "セキュリティ", "アップデート情報"],
  会社: ["会社概要", "採用情報", "プレスキット", "お問い合わせ"],
  サポート: ["ヘルプセンター", "よくある質問", "移行サポート", "ステータス"],
  法的情報: ["利用規約", "プライバシーポリシー", "特定商取引法", "Cookie設定"],
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect width="32" height="32" rx="8" fill="url(#footer-logo-grad)" />
                <path d="M9 8v16M9 16h14M23 8v16" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="23" cy="8" r="2.5" fill="#34D399" />
                <defs>
                  <linearGradient id="footer-logo-grad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#6366F1" />
                    <stop offset="1" stopColor="#4F46E5" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="text-white font-bold text-lg tracking-tight">HirePath</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-500">
              採用業務を、もっと速く、
              <br />
              もっと正確に。
            </p>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <p className="text-white font-semibold text-sm mb-4">{category}</p>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">
            © 2025 HirePath, Inc. All rights reserved.
          </p>
          <p className="text-xs text-slate-600">
            本サービスはポートフォリオ制作目的のUIデモです。実際のサービスではありません。
          </p>
        </div>
      </div>
    </footer>
  );
}
