function SetupAppleTV({ texts }) {
  const page = texts.setupPages.appleTv
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl space-y-10">
        <div className="rounded-[32px] border border-[#ffbb00]/15 bg-slate-950/80 p-8 shadow-glow sm:p-10">
          <p className="text-sm uppercase tracking-[0.3em] text-[#ffbb00]/90">{page.title}</p>
          <h1 className="mt-3 text-4xl font-extrabold text-white sm:text-5xl">{page.title}</h1>
          <p className="mt-4 text-slate-300">{page.description}</p>
          <a href={page.download} target="_blank" rel="noreferrer" className="mt-8 inline-flex rounded-full bg-[#ffbb00] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#e0a900]">
            {page.button}
          </a>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[28px] border border-[#ffbb00]/15 bg-slate-900/80 p-6 shadow-lg">
            <h2 className="text-2xl font-semibold text-white">خطوات الإعداد</h2>
            <ol className="mt-6 space-y-4 text-slate-300 list-decimal list-inside">
              {page.steps.map((step) => (
                <li key={step} className="rounded-3xl bg-slate-950/80 p-4">{step}</li>
              ))}
            </ol>
          </div>
          <div className="rounded-[28px] border border-[#ffbb00]/15 bg-slate-900/80 p-6 shadow-lg">
            <h2 className="text-2xl font-semibold text-white">حل المشاكل</h2>
            <ul className="mt-6 space-y-4 text-slate-300">
              {page.troubleshooting.map((issue) => (
                <li key={issue} className="rounded-3xl bg-slate-950/80 p-4">{issue}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SetupAppleTV
