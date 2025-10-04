import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="border-t border-gray-800 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="4.706" cy="16" r="4.706" fill="#D9D9D9" />
                <circle cx="16.001" cy="4.706" r="4.706" fill="#D9D9D9" />
                <circle cx="16.001" cy="27.294" r="4.706" fill="#D9D9D9" />
                <circle cx="27.294" cy="16" r="4.706" fill="#D9D9D9" />
              </svg>
              <span className="text-xl font-semibold">Max Optika</span>
            </div>
            <p className="text-gray-400 text-sm">
              Syze elegante dhe skelete nga markat më prestigjioze botërore për çdo stil dhe nevojë.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Navigim</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition">
                  Ballina
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition">
                  Produkte
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition">
                  Rreth Nesh
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Rruga Pjetër Bogdani</li>
              <li>Tiranë, Shqipëri</li>
              <li className="pt-2">
                <a href="tel:+355691234567" className="hover:text-white transition">
                  +355 69 123 4567
                </a>
              </li>
              <li>
                <a href="mailto:info@maxoptika.al" className="hover:text-white transition">
                  info@maxoptika.al
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Orari i Punës</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex justify-between">
                <span>E Hënë - E Premte</span>
                <span className="text-white">09:00 - 20:00</span>
              </li>
              <li className="flex justify-between">
                <span>E Shtunë</span>
                <span className="text-white">10:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>E Diel</span>
                <span className="text-white">Mbyllur</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Max Optika. Të gjitha të drejtat e rezervuara.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <Link to="/visit" className="hover:text-white transition">
              Rezervo Vizitë
            </Link>
            <span>|</span>
            <a href="#" className="hover:text-white transition">
              Politika e Privatësisë
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
