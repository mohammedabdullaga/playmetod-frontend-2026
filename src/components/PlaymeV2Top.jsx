function PlaymeV2Top({ texts }) {
  return (
    <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[36px] border border-[#cc9a00]/20 bg-slate-900/90 p-6 shadow-[0_0_40px_rgba(204,154,0,0.18)] sm:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-4 lg:max-w-3xl">
            <p className="text-sm uppercase tracking-[0.28em] text-[#cc9a00]/90">{texts.playmeV2.label}</p>
            <h1 className="text-3xl font-extrabold text-white sm:text-4xl">{texts.playmeV2.title}</h1>
            <p className="max-w-2xl text-slate-300">{texts.playmeV2.description}</p>
          </div>
          <div className="flex flex-col gap-4 rounded-[32px] border border-[#cc9a00]/15 bg-slate-950/95 p-5 text-slate-100 shadow-lg sm:w-[420px]">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-[#cc9a00]/90">{texts.playmeV2.codeLabel}</p>
              <div className="mt-3 rounded-[24px] bg-[#0b1222] px-4 py-4 text-4xl font-black tracking-[0.24em] text-white sm:text-5xl">
                {texts.playmeV2.code}
              </div>
            </div>

            <div className="rounded-[24px] border border-[#ffffff]/10 bg-[#111827] p-4">
              <p className="text-sm uppercase tracking-[0.28em] text-[#cc9a00]/90">{texts.playmeV2.mobileLinkLabel}</p>
              <a href={texts.playmeV2.mobileLink} target="_blank" rel="noreferrer" className="mt-2 inline-block text-base font-semibold text-white underline decoration-[#cc9a00]/70">
                {texts.playmeV2.mobileLink}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PlaymeV2Top
