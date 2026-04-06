function DeviceCards({ texts }) {
  return (
    <section className="px-4 pb-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#ffbb00]/90">{texts.devices.title}</p>
            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">{texts.devices.title}</h2>
          </div>
          <p className="max-w-xl text-slate-400">{texts.hero.description}</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {texts.devices.items.map((device) => (
            <div key={device.title} className="rounded-[28px] border border-[#ffbb00]/15 bg-slate-950/80 p-6 shadow-xl transition hover:-translate-y-1 hover:border-[#ffbb00]/30 hover:bg-slate-900/90">
              <h3 className="text-xl font-semibold text-white">{device.title}</h3>
              <p className="mt-3 text-slate-400">{device.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DeviceCards
