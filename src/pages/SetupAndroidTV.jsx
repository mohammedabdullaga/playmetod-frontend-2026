import { useState } from 'react'

function SetupAndroidTV({ texts }) {
  const [copied, setCopied] = useState(false)
  const page = texts.setupPages.androidTv
  const code = texts.downloader.code

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch (error) {
      console.error('Copy failed', error)
    }
  }

  return (
    <section className="px-4 pb-16 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 rounded-[36px] border border-[#cc9a00]/20 bg-gradient-to-br from-slate-900 via-slate-950 to-[#060814] p-6 shadow-[0_0_40px_rgba(204,154,0,0.12)] sm:p-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-5 lg:max-w-xl">
          <p className="text-sm uppercase tracking-[0.28em] text-[#cc9a00]/90">{page.title}</p>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">{page.title}</h2>
          <p className="max-w-2xl text-slate-300">{page.description}</p>
          <div className="rounded-[28px] border border-[#cc9a00]/15 bg-slate-950/90 p-6 shadow-lg">
            <p className="text-sm uppercase tracking-[0.28em] text-[#cc9a00]/90">{texts.downloader.enterCode}</p>
            <div className="mt-4 flex flex-wrap items-center gap-3 rounded-[24px] border border-[#cc9a00]/20 bg-[#111827] px-5 py-5 text-center text-4xl font-black text-white shadow-[0_0_28px_rgba(204,154,0,0.10)] sm:text-5xl">
              <span className="tracking-[0.24em]">{code}</span>
              <button onClick={handleCopy} className="rounded-full bg-[#cc9a00] px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-[#b38f00]">
                {copied ? texts.downloader.copied : texts.downloader.copyButton}
              </button>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {page.steps.map((step, index) => (
              <div key={step} className="rounded-3xl bg-slate-900/90 p-4 text-slate-300 shadow-inner shadow-black/20">
                <span className="block text-lg font-semibold text-white">{index + 1}. {step}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center lg:w-[420px]">
          <img src="/assets/Downloader-v1.4.1-Search-Bar.webp" alt="Downloader search bar" className="max-h-[360px] w-full max-w-[420px] rounded-[32px] border border-[#cc9a00]/15 object-contain shadow-lg" />
        </div>
      </div>
    </section>
  )
}

export default SetupAndroidTV
