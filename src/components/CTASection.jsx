function CTASection({ texts }) {
  return (
    <section className="px-4 pb-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[36px] bg-gradient-to-r from-slate-900 via-slate-800 to-slate-950 p-8 shadow-glow sm:p-12">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_0.7fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#ffbb00]/90">{texts.cta.title}</p>
            <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">{texts.cta.title}</h2>
            <p className="mt-4 text-slate-300">{texts.cta.description}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
            <a href="https://elitbahrain.rmz.gg" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-[#ffbb00] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#e0a900]">
              {texts.cta.buy}
            </a>
            <a href="https://wg.playmetod.store" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-[#ffbb00]/15 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:bg-white/10">
              {texts.cta.redeem}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
