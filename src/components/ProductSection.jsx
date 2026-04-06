import { useState } from 'react'

const products = [
  {
    id: 'android-1m',
    category: 'playmetod',
    nameKey: 'androidOneMonth',
    price: '15 SAR',
    image: '/assets/playmetod-product.jpg',
    link: 'https://elitbahrain.rmz.gg/product/playmetod',
    badge: '',
    descriptionKey: 'androidOneMonthDesc',
  },
  {
    id: 'android-1y',
    category: 'playmetod',
    nameKey: 'androidOneYear',
    price: '150 SAR',
    image: '/assets/playmetod-product.jpg',
    link: 'https://elitbahrain.rmz.gg/product/playmetod-1-year',
    badge: 'bestValue',
    descriptionKey: 'androidOneYearDesc',
  },
  {
    id: 'apple-1m',
    category: 'wireguard',
    nameKey: 'appleOneMonth',
    price: '20 SAR',
    image: '/assets/wireguard-product.webp',
    link: 'https://elitbahrain.rmz.gg/product/ttbyk-abl-wireguard-shhry-7',
    badge: '',
    descriptionKey: 'appleOneMonthDesc',
  },
  {
    id: 'apple-3m',
    category: 'wireguard',
    nameKey: 'appleThreeMonth',
    price: '50 SAR',
    image: '/assets/wireguard-product.webp',
    link: 'https://elitbahrain.rmz.gg/product/ttbyk-abl-wireguard-shhry-copy-3udaxa',
    badge: '',
    descriptionKey: 'appleThreeMonthDesc',
  },
  {
    id: 'apple-1y',
    category: 'wireguard',
    nameKey: 'appleOneYear',
    price: '150 SAR',
    image: '/assets/wireguard-product.webp',
    link: 'https://elitbahrain.rmz.gg/product/ttbyk-abl-wireguard-md-3-ashhr-copy-mAm14m',
    badge: 'bestValue',
    descriptionKey: 'appleOneYearDesc',
  },
]

const productGroups = [
  {
    category: 'playmetod',
    titleKey: 'androidGroupTitle',
    descriptionKey: 'androidGroupText',
  },
  {
    category: 'wireguard',
    titleKey: 'appleGroupTitle',
    descriptionKey: 'appleGroupText',
  },
]

function ProductSection({ texts }) {
  const [selectedProduct, setSelectedProduct] = useState(null)

  const openProduct = (product) => {
    setSelectedProduct(product)
  }

  const closeModal = () => {
    setSelectedProduct(null)
  }

  const continueToProduct = () => {
    if (selectedProduct) {
      window.open(selectedProduct.link, '_blank', 'noopener')
      setSelectedProduct(null)
    }
  }

  return (
    <section className="px-4 pb-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.28em] text-[#ffbb00]/90">{texts.products.title}</p>
          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">{texts.products.title}</h2>
          <p className="max-w-2xl text-slate-400">{texts.products.subtitle}</p>
        </div>

        <div className="space-y-14">
          {productGroups.map((group) => {
            const groupProducts = products.filter((product) => product.category === group.category)
            return (
              <div key={group.category}>
                <div className="mb-6">
                  <p className="text-sm uppercase tracking-[0.28em] text-[#ffbb00]/90">{texts.products[group.titleKey]}</p>
                  <h3 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">{texts.products[group.titleKey]}</h3>
                  <p className="max-w-2xl text-slate-400">{texts.products[group.descriptionKey]}</p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                  {groupProducts.map((product) => (
                    <div key={product.id} className="group overflow-hidden rounded-[28px] border border-[#ffbb00]/15 bg-slate-950/80 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#ffbb00]/30 hover:bg-slate-900/90">
                      <div className="relative overflow-hidden rounded-3xl border border-[#ffbb00]/15 bg-slate-900/90 h-56">
                        <img src={product.image} alt={texts.products[product.nameKey]} className="h-full w-full object-contain transition duration-300 group-hover:scale-105" />
                        {product.badge && (
                          <span className="absolute left-4 top-4 rounded-full bg-[#ffbb00] px-3 py-1 text-xs font-semibold uppercase tracking-[0.26em] text-slate-950 shadow-lg">
                            {texts.products[product.badge]}
                          </span>
                        )}
                      </div>
                      <div className="mt-6">
                        <p className="text-sm uppercase tracking-[0.24em] text-[#ffbb00]/90">{texts.products[product.nameKey]}</p>
                        <h4 className="mt-3 text-2xl font-semibold text-white">{product.price}</h4>
                        <p className="mt-4 text-slate-400">{texts.products[product.descriptionKey]}</p>
                      </div>
                      <button onClick={() => openProduct(product)} className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#ffbb00] px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-[#e0a900]">
                        {texts.products.buyButton}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="w-full max-w-xl rounded-[32px] border border-[#ffbb00]/15 bg-slate-950/95 p-6 shadow-[0_0_80px_rgba(255,187,0,0.22)]">
            <h3 className="text-xl font-semibold text-white">{texts.products.modalTitle}</h3>
            <p className="mt-4 text-slate-300">{texts.products.modalMessage}</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
              <button onClick={continueToProduct} className="rounded-full bg-[#ffbb00] px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-[#e0a900]">
                {texts.products.modalContinue}
              </button>
              <button onClick={closeModal} className="rounded-full border border-[#ffbb00]/15 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:bg-white/10">
                {texts.products.modalCancel}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default ProductSection
