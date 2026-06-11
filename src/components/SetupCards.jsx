import { Link } from 'react-router-dom'

function SetupCards({ texts }) {
  return (
    <section className="px-4 pb-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 space-y-4">
          <p className="text-sm uppercase tracking-[0.28em] text-[#cc9a00]/90">{texts.setup.title}</p>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">{texts.setup.intro}</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {texts.setup.cards.map((card) => (
            <Link
              key={card.title}
              to={card.path}
              className="rounded-[28px] border border-[#cc9a00]/15 bg-slate-950/80 p-6 text-left transition hover:-translate-y-1 hover:border-[#cc9a00]/30 hover:bg-slate-900/90"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-[#cc9a00]/90">{card.title}</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">{card.title}</h3>
              <p className="mt-3 text-slate-400">{card.title} {texts.setup.title.toLowerCase()}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SetupCards
