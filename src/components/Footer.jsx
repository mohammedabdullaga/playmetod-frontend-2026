function Footer({ texts }) {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80 py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 text-sm text-slate-400 sm:px-6 sm:flex-row sm:items-center sm:justify-between">
        <p>{texts.footer.copyright}</p>
        <p>PlayMe | marketing website</p>
      </div>
    </footer>
  )
}

export default Footer
