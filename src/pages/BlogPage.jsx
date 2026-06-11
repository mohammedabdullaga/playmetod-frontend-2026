function BlogPage({ texts }) {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-[32px] border border-[#cc9a00]/15 bg-slate-950/80 p-10 text-slate-200 shadow-glow">
        <p className="text-sm uppercase tracking-[0.3em] text-[#cc9a00]/90">{texts.blog.title}</p>
        <h1 className="mt-3 text-4xl font-extrabold text-white sm:text-5xl">{texts.blog.title}</h1>
        <p className="mt-4 max-w-3xl text-slate-400">{texts.blog.description}</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-[28px] border border-[#cc9a00]/15 bg-slate-900/80 p-6">
            <h2 className="text-2xl font-semibold text-white">Coming Soon</h2>
            <p className="mt-3 text-slate-400">مقالات حول البث والتحديثات والأجهزة الجديدة سيتم نشرها قريباً.</p>
          </div>
          <div className="rounded-[28px] border border-[#cc9a00]/15 bg-slate-900/80 p-6">
            <h2 className="text-2xl font-semibold text-white">Latest Updates</h2>
            <p className="mt-3 text-slate-400">Stay tuned for guides and release news on PlayMe services.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogPage
