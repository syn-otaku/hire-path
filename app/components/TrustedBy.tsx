const categories = [
  "スタートアップ",
  "中小企業",
  "人材紹介会社",
  "採用代行（RPO）",
  "メガベンチャー",
  "事業会社HR",
];

export default function TrustedBy() {
  return (
    <section className="py-12 bg-slate-50 border-y border-slate-100">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-center text-xs text-slate-400 font-medium mb-8 tracking-widest uppercase">
          想定する導入対象
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat, i) => (
            <span
              key={i}
              className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-500 text-sm font-medium"
            >
              {cat}
            </span>
          ))}
        </div>
        <p className="text-center text-xs text-slate-400 mt-8">
          ※ このセクションはポートフォリオサンプルです。実在する導入実績ではありません。
        </p>
      </div>
    </section>
  );
}
