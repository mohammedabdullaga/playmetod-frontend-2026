function HowItWorksPage({ texts }) {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="rounded-[32px] border border-[#ffbb00]/15 bg-slate-950/80 p-8 shadow-glow sm:p-10">
          <p className="text-sm uppercase tracking-[0.3em] text-[#ffbb00]/90">{texts.howItWorks.title}</p>
          <h1 className="mt-3 text-4xl font-extrabold text-white sm:text-5xl">{texts.howItWorks.title}</h1>
          <p className="mt-4 text-slate-300">{texts.howItWorks.steps[0].description}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {texts.howItWorks.steps.map((step, index) => (
            <div key={step.title} className="rounded-[28px] border border-[#ffbb00]/15 bg-slate-900/80 p-6 shadow-lg">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#ffbb00]/15 text-xl font-bold text-[#ffbb00]/90">{index + 1}</div>
              <h2 className="text-xl font-semibold text-white">{step.title}</h2>
              <p className="mt-3 text-slate-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorksPage
