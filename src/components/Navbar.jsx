import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import LanguageSwitcher from './LanguageSwitcher'

const BUY_LINK = 'https://elitbahrain.rmz.gg'
const REDEEM_LINK = 'https://wg.playmetod.store'

function Navbar({ texts, lang, onChangeLang }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navItems = [
    { label: texts.nav.home, path: '/' },
    { label: texts.nav.howItWorks, path: '/how-it-works' },
    { label: texts.nav.setup, path: '/setup' },
    { label: texts.nav.faq, path: '/faq' },
    { label: texts.nav.blog, path: '/blog' },
  ]

  return (
    <header className="relative z-40 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <NavLink to="/" className="text-2xl font-black tracking-tight text-transparent bg-gradient-to-r from-[#cc9a00] to-[#cc9a00] bg-clip-text">
          PlayMe
        </NavLink>
        <nav className={`flex flex-1 flex-wrap items-center justify-center gap-3 text-sm sm:gap-6 ${isMobileMenuOpen ? 'flex-col absolute top-full left-0 right-0 bg-slate-950/95 p-4' : 'hidden sm:flex'}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 transition ${isActive ? 'bg-white/10 text-white' : 'text-slate-300 hover:bg-white/5 hover:text-white'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href={BUY_LINK} target="_blank" rel="noreferrer" className="rounded-full bg-[#cc9a00] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#b38f00]">
            {texts.nav.buyNow}
          </a>
          <a href={REDEEM_LINK} target="_blank" rel="noreferrer" className="rounded-full border border-[#cc9a00]/15 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:bg-white/10">
            {texts.nav.redeem}
          </a>
          <LanguageSwitcher lang={lang} onChangeLang={onChangeLang} texts={texts} />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="sm:hidden flex flex-col gap-1 p-2"
          >
            <span className="w-5 h-0.5 bg-white"></span>
            <span className="w-5 h-0.5 bg-white"></span>
            <span className="w-5 h-0.5 bg-white"></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
