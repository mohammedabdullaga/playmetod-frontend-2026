import { useEffect, useMemo, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import HowItWorksPage from './pages/HowItWorksPage'
import SetupPage from './pages/SetupPage'
import SetupAndroid from './pages/SetupAndroid'
import SetupAndroidTV from './pages/SetupAndroidTV'
import SetupIOS from './pages/SetupIOS'
import SetupAppleTV from './pages/SetupAppleTV'
import FAQPage from './pages/FAQPage'
import BlogPage from './pages/BlogPage'
import ar from './i18n/ar'
import en from './i18n/en'

const STORAGE_KEY = 'playme-language'

function App() {
  const [lang, setLang] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored === 'en' ? 'en' : 'ar'
  })
  const texts = useMemo(() => (lang === 'en' ? en : ar), [lang])
  const location = useLocation()

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    document.body.dir = lang === 'ar' ? 'rtl' : 'ltr'
    localStorage.setItem(STORAGE_KEY, lang)
  }, [lang])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  return (
    <MainLayout texts={texts} lang={lang} onChangeLang={setLang}>
      <Routes>
        <Route path="/" element={<HomePage texts={texts} lang={lang} />} />
        <Route path="/how-it-works" element={<HowItWorksPage texts={texts} />} />
        <Route path="/setup" element={<SetupPage texts={texts} />} />
        <Route path="/setup/android" element={<SetupAndroid texts={texts} />} />
        <Route path="/setup/android-tv" element={<SetupAndroidTV texts={texts} />} />
        <Route path="/setup/ios" element={<SetupIOS texts={texts} />} />
        <Route path="/setup/apple-tv" element={<SetupAppleTV texts={texts} />} />
        <Route path="/faq" element={<FAQPage texts={texts} />} />
        <Route path="/blog" element={<BlogPage texts={texts} />} />
      </Routes>
    </MainLayout>
  )
}

export default App
