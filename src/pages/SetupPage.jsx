import { Link } from 'react-router-dom'

function SetupPage({ texts }) {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="rounded-[32px] border border-[#cc9a00]/15 bg-slate-950/80 p-8 shadow-glow sm:p-10">
          <p className="text-sm uppercase tracking-[0.3em] text-[#cc9a00]/90">{texts.setup.title}</p>
          <h1 className="mt-3 text-4xl font-extrabold text-white sm:text-5xl">{texts.setup.intro}</h1>
          <p className="mt-4 text-slate-300">{texts.setup.intro}</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {texts.setup.cards.map((card) => (
            <Link key={card.title} to={card.path} className="rounded-[28px] border border-[#cc9a00]/15 bg-slate-900/80 p-6 text-left transition hover:-translate-y-1 hover:border-[#cc9a00]/30 hover:bg-slate-800/80">
              <p className="text-sm uppercase tracking-[0.2em] text-[#cc9a00]/90">{card.title}</p>
              <h2 className="mt-4 text-2xl font-semibold text-white">{card.title}</h2>
              <p className="mt-3 text-slate-400">{card.title} {texts.setup.title.toLowerCase()}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SetupPage
