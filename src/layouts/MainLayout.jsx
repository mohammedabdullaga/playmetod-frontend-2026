import { NavLink } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function MainLayout({ children, texts, lang, onChangeLang }) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,var(--tw-gradient-stops))] from-[#161b34] via-[#0d1327] to-[#090e1d] text-slate-100">
      <Navbar texts={texts} lang={lang} onChangeLang={onChangeLang} />
      <main>{children}</main>
      <Footer texts={texts} />
    </div>
  )
}

export default MainLayout
