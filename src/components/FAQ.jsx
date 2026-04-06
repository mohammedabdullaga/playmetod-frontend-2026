function FAQ({ texts }) {
  return (
    <section className="px-4 pb-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-[32px] border border-[#ffbb00]/15 bg-slate-950/80 p-8 shadow-glow sm:p-10">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.28em] text-[#ffbb00]/90">{texts.faq.title}</p>
          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">{texts.faq.title}</h2>
        </div>
        <div className="space-y-4">
          {texts.faq.items.map((item) => (
            <details key={item.question} className="rounded-[24px] border border-[#ffbb00]/15 bg-slate-900/80 p-5 transition hover:border-[#ffbb00]/30">
              <summary className="cursor-pointer text-lg font-semibold text-white">{item.question}</summary>
              <p className="mt-3 text-slate-300">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
