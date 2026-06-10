import { NavLink } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function MainLayout({ children, texts, lang, onChangeLang }) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,var(--tw-gradient-stops))] from-[#161b34] via-[#0d1327] to-[#090e1d] text-slate-100">
      <Navbar texts={texts} lang={lang} onChangeLang={onChangeLang} />
      <div className="bg-[#ffbb00]/10 border-b border-[#ffbb00]/20 text-[#f8e1a0]">
        <div className="mx-auto flex h-12 max-w-7xl items-center overflow-hidden px-4 sm:px-6">
          <p
            role="status"
            aria-live="polite"
            className="animate-marquee whitespace-nowrap text-sm font-semibold"
            style={{ animationDirection: lang === 'ar' ? 'reverse' : 'normal' }}
          >
            {texts.alert.banner}
          </p>
        </div>
      </div>
      <main>{children}</main>
      <Footer texts={texts} />
    </div>
  )
}

export default MainLayout
