function Hero({ texts }) {
  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 rounded-[32px] border border-[#cc9a00]/15 bg-slate-950/80 p-8 shadow-glow sm:p-12">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex rounded-full bg-[#cc9a00]/15 px-4 py-2 text-sm font-semibold text-[#cc9a00]/90">
              PlayMe • TOD TV KSA
            </span>
            <div className="space-y-4">
              <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-white sm:text-5xl">
                {texts.hero.title}
              </h1>
              <p className="max-w-2xl text-lg text-slate-300 sm:text-xl">
                {texts.hero.description}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href={texts.hero.androidLink} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-[#cc9a00] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#b38f00]">
                {texts.hero.download}
              </a>
              <a href={texts.hero.wireguardLink} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-[#cc9a00]/15 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:bg-white/10">
                {texts.hero.wireguard}
              </a>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[28px] border border-[#cc9a00]/15 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 p-6 shadow-lg">
            <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-[#cc9a00] via-[#cc9a00] to-[#cc9a00] opacity-70" />
            <div className="relative rounded-[24px] bg-[#090d1e] p-6 shadow-[0_25px_90px_-30px_rgba(204,154,0,0.35)]">
              <div className="mb-6 flex items-center justify-between text-sm font-semibold text-slate-300">
                <span>PlayMe</span>
                <span className="rounded-full bg-white/10 px-3 py-1">TOD TV</span>
              </div>
              <div className="space-y-5 text-slate-300">
                <div className="rounded-3xl bg-slate-950/80 p-5 shadow-inner shadow-black/30">
                  <h3 className="text-base font-semibold text-white">TOD TV in KSA</h3>
                  <p className="mt-2 text-sm text-slate-400">Unlock the service for Saudi Arabia only.</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-slate-950/80 p-5">
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Android</p>
                    <p className="mt-3 text-lg font-semibold text-white">PlayMe</p>
                  </div>
                  <div className="rounded-3xl bg-slate-950/80 p-5">
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Apple</p>
                    <p className="mt-3 text-lg font-semibold text-white">WireGuard</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
