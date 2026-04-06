function LanguageSwitcher({ lang, onChangeLang, texts }) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-[#ffbb00]/15 bg-white/5 p-1 text-xs text-slate-200 shadow-[0_12px_38px_-10px_rgba(255,255,255,0.12)]">
      <button
        onClick={() => onChangeLang('ar')}
        className={`rounded-full px-3 py-1 transition ${lang === 'ar' ? 'bg-white/15 text-white' : 'text-slate-300 hover:bg-white/10'}`}
      >
        العربية
      </button>
      <span className="h-4 w-px bg-white/20" />
      <button
        onClick={() => onChangeLang('en')}
        className={`rounded-full px-3 py-1 transition ${lang === 'en' ? 'bg-white/15 text-white' : 'text-slate-300 hover:bg-white/10'}`}
      >
        English
      </button>
    </div>
  )
}

export default LanguageSwitcher
