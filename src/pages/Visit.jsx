import { useState } from 'react'

const Visit = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    notes: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Kërkesa për vizitë u dërgua me sukses! Do të kontaktoheni së shpejti.')
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen px-6 py-16 md:py-24">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-light mb-6 text-center">
          Rezervo një Vizitë
        </h1>
        <p className="text-lg text-gray-400 text-center mb-12">
          Plotësoni formularin më poshtë dhe ne do t'ju kontaktojmë për të konfirmuar rezervimin tuaj
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm">
                Emri dhe Mbiemri *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-white transition"
                placeholder="Emri juaj i plotë"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-white transition"
                placeholder="email@example.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="block mb-2 text-sm">
              Numri i Telefonit *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-white transition"
              placeholder="+355 69 123 4567"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="date" className="block mb-2 text-sm">
                Data e Preferuar *
              </label>
              <input
                type="date"
                id="date"
                name="date"
                required
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-white transition"
              />
            </div>
            <div>
              <label htmlFor="time" className="block mb-2 text-sm">
                Ora e Preferuar *
              </label>
              <select
                id="time"
                name="time"
                required
                value={formData.time}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-white transition"
              >
                <option value="">Zgjidhni orën</option>
                <option value="09:00">09:00</option>
                <option value="10:00">10:00</option>
                <option value="11:00">11:00</option>
                <option value="12:00">12:00</option>
                <option value="14:00">14:00</option>
                <option value="15:00">15:00</option>
                <option value="16:00">16:00</option>
                <option value="17:00">17:00</option>
                <option value="18:00">18:00</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="notes" className="block mb-2 text-sm">
              Shënime Shtesë
            </label>
            <textarea
              id="notes"
              name="notes"
              rows="4"
              value={formData.notes}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-white transition"
              placeholder="A keni ndonjë kërkesë të veçantë?"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-white text-black py-4 rounded-full font-medium hover:bg-gray-100 transition text-lg"
          >
            Rezervo Vizitën
          </button>

          <p className="text-sm text-gray-400 text-center">
            * Fushat e shënuara janë të detyrueshme
          </p>
        </form>

        <div className="mt-12 p-6 bg-gray-900/50 rounded-lg border border-gray-800">
          <h2 className="text-xl font-light mb-3">Informacione të Rëndësishme</h2>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>• Do të merrni një email konfirmimi brenda 24 orëve</li>
            <li>• Vizita zgjat rreth 30-45 minuta</li>
            <li>• Mund të anuloni ose ndryshoni rezervimin duke na kontaktuar</li>
            <li>• Konsulenca dhe kontrolli i parë janë falas</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Visit