function HowItWorks({ texts }) {
  return (
    <section className="px-4 pb-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-[32px] border border-[#cc9a00]/15 bg-slate-950/80 p-8 shadow-glow sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-[#cc9a00]/90">{texts.howItWorks.title}</p>
            <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">{texts.howItWorks.title}</h2>
            <p className="mt-4 max-w-xl text-slate-400">{texts.howItWorks.steps[0].description}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {texts.howItWorks.steps.map((step, index) => (
              <div key={step.title} className="rounded-[28px] border border-[#cc9a00]/15 bg-slate-900/80 p-6 text-center shadow-lg transition hover:-translate-y-1">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#cc9a00]/15 text-xl font-semibold text-[#cc9a00]/90">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm text-slate-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
