const About = () => {
  return (
    <div className="min-h-screen px-6 py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-light mb-12 text-center">
          Rreth Max Optika
        </h1>

        <div className="space-y-8 text-lg text-gray-300 leading-relaxed">
          <p>
            Max Optika është destinacioni juaj kryesor për syze dhe skelete elegante në Shqipëri.
            Me vite eksperiencë në industrinë e optikës, ne jemi të përkushtuar të ofrojmë produktet
            më të mira nga markat më prestigjioze botërore.
          </p>

          <p>
            Koleksioni ynë përfshin marka ekskluzive si Ray-Ban, Gucci, Versace, Dior, Tom Ford,
            Oakley dhe shumë të tjera. Çdo produkt është origjinal dhe vjen me garanci të plotë.
          </p>

          <div className="py-8">
            <h2 className="text-2xl md:text-3xl font-light mb-6">Pse të zgjidhni Max Optika?</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-white mt-1">•</span>
                <span>Produkte 100% origjinale nga markat më të mira botërore</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white mt-1">•</span>
                <span>Konsulencë profesionale dhe e personalizuar</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white mt-1">•</span>
                <span>Çmime konkurruese dhe oferta speciale</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white mt-1">•</span>
                <span>Ambiente moderne dhe komode për blerje</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white mt-1">•</span>
                <span>Shërbim pas shitjes dhe garanci e zgjeruar</span>
              </li>
            </ul>
          </div>

          <p>
            Ne besojmë se çdo klient meriton vëmendjen më të mirë. Stafi ynë i trajnuar është gjithmonë
            gati t'ju ndihmojë të gjeni syzen perfekte që përshtatet me stilin dhe nevojat tuaja.
          </p>

          <div className="pt-8 text-center">
            <p className="text-xl text-white">
              Vizitoni sallonin tonë dhe zbuloni koleksionin tonë të plotë
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About