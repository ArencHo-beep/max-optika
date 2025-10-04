import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="min-h-screen">
      <section className="flex flex-col items-center justify-center px-6 py-20 md:py-32">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-center mb-6 max-w-4xl">
          Syze elegante për çdo stil
        </h1>
        <p className="text-lg md:text-xl text-gray-400 text-center mb-12 max-w-2xl">
          Zbuloni koleksionin tonë ekskluziv të syzeve dhe skeleteve nga markat më prestigjioze
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/products"
            className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition text-center"
          >
            Shiko produktet
          </Link>
          <Link
            to="/visit"
            className="border border-gray-600 px-8 py-3 rounded-full font-medium hover:bg-gray-900 transition text-center"
          >
            Rezervo vizitë
          </Link>
        </div>
      </section>

      <section className="px-6 py-16 md:py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="text-center p-8">
            <div className="text-5xl mb-4">👓</div>
            <h3 className="text-xl font-medium mb-3">Marka Ekskluzive</h3>
            <p className="text-gray-400">
              Ray-Ban, Gucci, Versace, Dior dhe shumë marka të tjera prestigjioze
            </p>
          </div>
          <div className="text-center p-8">
            <div className="text-5xl mb-4">✨</div>
            <h3 className="text-xl font-medium mb-3">Cilësi e Lartë</h3>
            <p className="text-gray-400">
              Produkte origjinale me garanci dhe cilësi të garantuar
            </p>
          </div>
          <div className="text-center p-8">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-xl font-medium mb-3">Konsulencë Profesionale</h3>
            <p className="text-gray-400">
              Stafi ynë ju ndihmon të zgjidhni syzen perfekte për ju
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-16">
            Markat më prestigjioze në një vend
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-60">
            {['Ray-Ban', 'Gucci', 'Versace', 'Dior', 'Prada', 'Chanel', 'Armani', 'Oakley', 'Tom Ford', 'Cartier', 'Fendi', 'Burberry'].map((brand) => (
              <div key={brand} className="text-xl font-light text-gray-400 hover:text-white transition">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:py-24 bg-gradient-to-b from-transparent to-gray-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-light mb-6">
            Më shumë se një dyqan syzesh
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Max Optika ofron një përvoje unike blerjeje me konsulencë të personalizuar dhe koleksion të gjerë produktesh
          </p>
          <Link
            to="/about"
            className="text-white hover:text-gray-300 transition underline"
          >
            Mëso më shumë rreth nesh
          </Link>
        </div>
      </section>

      <section className="px-6 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-6">
                Cilësi dhe Origjinalitet të Garantuar
              </h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Çdo produkt në Max Optika është 100% origjinal dhe vjen direkt nga prodhuesit zyrtarë.
                Ne ofrojmë garanci të plotë dhe certifikata autenticiteti për të gjitha syzetë tona.
              </p>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Stafi ynë profesional është i trajnuar për t'ju ndihmuar të zgjidhni syzen perfekte
                që përshtatet me formën e fytyrës, stilin personal dhe nevojat tuaja specifike.
              </p>
              <Link
                to="/products"
                className="inline-block bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition"
              >
                Eksploro Koleksionin
              </Link>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-12 text-center">
              <div className="text-6xl mb-4">🏆</div>
              <h3 className="text-2xl font-medium mb-4">Besimi i Klientëve</h3>
              <p className="text-gray-400">
                Mbi 10,000 klientë të kënaqur kanë zgjedhur Max Optika për syzetë e tyre
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:py-24 bg-gray-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Gati për të gjetur syzen perfekte?
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Vizitoni sallonin tonë ose rezervoni një takim të personalizuar me ekspertët tanë
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/visit"
              className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition"
            >
              Rezervo një vizitë
            </Link>
            <Link
              to="/contact"
              className="border border-gray-600 px-8 py-3 rounded-full font-medium hover:bg-gray-900 transition"
            >
              Na kontaktoni
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home