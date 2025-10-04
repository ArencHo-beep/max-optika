import { useParams, Link, useNavigate } from 'react-router-dom'
import { glassesData } from './Products'

const ProductDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = glassesData.find(item => item.id === parseInt(id))

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-4xl font-light mb-4">Produkti nuk u gjet</h1>
          <Link to="/products" className="text-white hover:text-gray-300 transition underline">
            Kthehu tek produktet
          </Link>
        </div>
      </div>
    )
  }

  const relatedProducts = glassesData
    .filter(item => item.id !== product.id)
    .slice(0, 4)

  return (
    <div className="min-h-screen px-6 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition mb-8"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Kthehu mbrapa
        </button>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-gray-900 rounded-2xl p-12 flex items-center justify-center">
            <img
              src={product.img}
              alt={`${product.name} - ${product.code}`}
              className="w-full max-w-lg object-contain"
            />
          </div>

          <div className="flex flex-col justify-center">
            <div className="mb-6">
              <h1 className="text-4xl md:text-5xl font-light mb-3">{product.name}</h1>
              <p className="text-xl text-gray-400">{product.code}</p>
            </div>

            <div className="mb-8">
              <p className="text-5xl font-semibold mb-2">{product.price}€</p>
              <p className="text-gray-400">{product.no_of_colors} ngjyra të disponueshme</p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-medium mb-3">Përshkrimi</h2>
              <p className="text-gray-400 leading-relaxed">{product.description}</p>
            </div>

            <div className="mb-8 p-6 bg-gray-900 rounded-lg">
              <h3 className="font-medium mb-3">Karakteristikat</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">•</span>
                  <span>100% origjinal nga prodhuesi zyrtar</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">•</span>
                  <span>Garanci e plotë 2 vjeçare</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">•</span>
                  <span>Materiale premium me cilësi të lartë</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">•</span>
                  <span>Mbrojtje UV për syze dielli</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">•</span>
                  <span>Kutia origjinale dhe certifikata e autenticitetit</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/visit"
                className="flex-1 bg-white text-black py-4 rounded-full font-medium hover:bg-gray-100 transition text-center"
              >
                Rezervo për Provë
              </Link>
              <Link
                to="/contact"
                className="flex-1 border border-gray-600 py-4 rounded-full font-medium hover:bg-gray-900 transition text-center"
              >
                Kontakto për Informacion
              </Link>
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="border-t border-gray-800 pt-16">
            <h2 className="text-3xl font-light mb-8">Produkte të Ngjashme</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {relatedProducts.map((item) => (
                <Link
                  key={item.id}
                  to={`/product/${item.id}`}
                  className="block bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-gray-600 transition group"
                >
                  <div className="flex justify-center items-center mb-4 overflow-hidden rounded-lg bg-gray-800 h-48">
                    <img
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                      src={item.img}
                      alt={`${item.name} - ${item.code}`}
                    />
                  </div>
                  <h3 className="text-lg font-medium text-center mb-2">{item.name}</h3>
                  <p className="text-sm text-gray-400 text-center mb-3">{item.code}</p>
                  <p className="text-2xl font-semibold text-center">{item.price}€</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductDetail
