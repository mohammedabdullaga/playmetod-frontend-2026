import { NavLink } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function MainLayout({ children, texts, lang, onChangeLang }) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,var(--tw-gradient-stops))] from-[#161b34] via-[#0d1327] to-[#090e1d] text-slate-100">
      <div className="fixed inset-x-0 top-0 z-50 border-b border-[#cc9a00]/20 bg-[#cc9a00]/10 text-[#f8e1a0]">
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
      <Navbar texts={texts} lang={lang} onChangeLang={onChangeLang} />
      <main className="pt-12">{children}</main>
      <Footer texts={texts} />
    </div>
  )
}

export default MainLayout
