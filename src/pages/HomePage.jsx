import Hero from '../components/Hero'
import DeviceCards from '../components/DeviceCards'
import WhichApp from '../components/WhichApp'
import DownloaderSection from '../components/DownloaderSection'
import PlaymeV2Top from '../components/PlaymeV2Top'
import ProductSection from '../components/ProductSection'
import HowItWorks from '../components/HowItWorks'
import SetupCards from '../components/SetupCards'
import FAQ from '../components/FAQ'
import CTASection from '../components/CTASection'

function HomePage({ texts, lang }) {
  return (
    <div>
      <PlaymeV2Top texts={texts} />
      <Hero texts={texts} lang={lang} />
      <DeviceCards texts={texts} />
      <DownloaderSection texts={texts} />
      <ProductSection texts={texts} />
      <WhichApp texts={texts} />
      <HowItWorks texts={texts} />
      <SetupCards texts={texts} />
      <FAQ texts={texts} />
      <CTASection texts={texts} />
    </div>
  )
}

export default HomePage
