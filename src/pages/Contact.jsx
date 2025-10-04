const Contact = () => {
  return (
    <div className="min-h-screen px-6 py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-light mb-12 text-center">
          Na Kontaktoni
        </h1>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-light mb-4">Informacion Kontakti</h2>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h3 className="text-white font-medium mb-1">Adresa</h3>
                  <p>Rruga Pjetër Bogdani, Tiranë, Shqipëri</p>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Telefon</h3>
                  <p>+355 69 123 4567</p>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Email</h3>
                  <p>info@maxoptika.al</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-light mb-4">Orari i Punës</h2>
              <div className="space-y-2 text-gray-300">
                <div className="flex justify-between">
                  <span>E Hënë - E Premte</span>
                  <span className="text-white">09:00 - 20:00</span>
                </div>
                <div className="flex justify-between">
                  <span>E Shtunë</span>
                  <span className="text-white">10:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>E Diel</span>
                  <span className="text-white">Mbyllur</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-light mb-6">Dërgo një Mesazh</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm">Emri</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-white transition"
                  placeholder="Emri juaj"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-white transition"
                  placeholder="email@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block mb-2 text-sm">Telefon</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-white transition"
                  placeholder="+355 69 123 4567"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-sm">Mesazhi</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-white transition"
                  placeholder="Si mund t'ju ndihmojmë?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-white text-black py-3 rounded-full font-medium hover:bg-gray-100 transition"
              >
                Dërgo Mesazhin
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact