const logos = [
  { width: "w-24" },
  { width: "w-32" },
  { width: "w-20" },
  { width: "w-28" },
  { width: "w-24" },
  { width: "w-20" },
  { width: "w-32" },
  { width: "w-24" },
];

export default function TrustedBy() {
  return (
    <section className="py-14 bg-slate-50 border-y border-slate-100">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-center text-xs text-slate-400 font-medium mb-10 tracking-widest uppercase">
          スタートアップから上場企業まで、採用チームに導入されています
        </p>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-6 items-center justify-items-center">
          {logos.map((logo, i) => (
            <div
              key={i}
              className={`h-7 ${logo.width} rounded-full bg-slate-200`}
              aria-hidden="true"
            />
          ))}
        </div>
        <p className="text-center text-xs text-slate-400 mt-8">
          ※ 導入企業のロゴは掲載許諾取得後に順次公開予定です
        </p>
      </div>
    </section>
  );
}
