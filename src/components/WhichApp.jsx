function WhichApp({ texts }) {
  return (
    <section className="px-4 pb-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-[32px] border border-[#ffbb00]/15 bg-slate-950/80 p-8 shadow-glow sm:p-10">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.28em] text-[#ffbb00]/90">{texts.whichApp.title}</p>
          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">{texts.whichApp.title}</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[28px] border border-[#ffbb00]/15 bg-slate-900/80 p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-white">{texts.whichApp.androidTitle}</h3>
            <p className="mt-4 text-slate-300">{texts.whichApp.androidDescription}</p>
            <a href={texts.hero.androidLink} target="_blank" rel="noreferrer" className="mt-6 inline-flex rounded-full bg-[#ffbb00] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#e0a900]">
              {texts.whichApp.androidButton}
            </a>
          </div>
          <div className="rounded-[28px] border border-[#ffbb00]/15 bg-slate-900/80 p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-white">{texts.whichApp.appleTitle}</h3>
            <p className="mt-4 text-slate-300">{texts.whichApp.appleDescription}</p>
            <a href={texts.hero.wireguardLink} target="_blank" rel="noreferrer" className="mt-6 inline-flex rounded-full border border-[#ffbb00]/15 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:bg-white/10">
              {texts.whichApp.wireguardButton}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhichApp
