import { useState } from 'react'
import Glasses from '../components/Glasses'

const glassesData = [
  {
    img: 'https://assets-maxoptika.b-cdn.net/images/8053672402087-2.png',
    name: 'Ray-Ban',
    code: 'RB123',
    price: 150,
    no_of_colors: '3'
  },
  {
    img: 'https://assets-maxoptika.b-cdn.net/images/8056597429696-2.png',
    name: 'Oakley',
    code: 'OK456',
    price: 180,
    no_of_colors: '4'
  },
  {
    img: 'https://assets-maxoptika.b-cdn.net/images/SO19128.png',
    name: 'Gucci',
    code: 'GC789',
    price: 250,
    no_of_colors: '2'
  },
  {
    img: 'https://assets-maxoptika.b-cdn.net/images/SO24389.png',
    name: 'Versace',
    code: 'VS321',
    price: 230,
    no_of_colors: '3'
  },
  {
    img: 'https://assets-maxoptika.b-cdn.net/images/SO24388.png',
    name: 'Dior',
    code: 'DR987',
    price: 290,
    no_of_colors: '2'
  },
  {
    img: 'https://assets-maxoptika.b-cdn.net/images/SO20288.png',
    name: 'Burberry',
    code: 'BB753',
    price: 210,
    no_of_colors: '4'
  },
  {
    img: 'https://assets-maxoptika.b-cdn.net/images/SO20289.png',
    name: 'Tom Ford',
    code: 'TF852',
    price: 240,
    no_of_colors: '2'
  },
]

const Products = () => {
  const [data, setData] = useState(glassesData);

  return (
    <div>
      <div className='mt-10 flex items-center justify-center text-4xl'>
        Produktet tona
      </div>

      <div className="mt-10 flex flex-col items-center gap-6 px-4 mb-16">
        <div className="flex flex-col sm:flex-row gap-4 items-end w-full max-w-4xl">
          <label className="w-full sm:flex-1">
            <span className="block mb-2 font-medium text-sm">Kërko sipas markës</span>
            <input
              type="text"
              placeholder="Shkruaj emrin e markës..."
              className="w-full border border-gray-700 bg-gray-900 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-white transition"
              onChange={(e) => {
                const userInput = e.target.value.toLowerCase();
                const filteredData = glassesData.filter(item =>
                  item.name.toLowerCase().includes(userInput)
                );
                setData(filteredData);
              }}
            />
          </label>

          <label className="w-full sm:flex-1">
            <span className="block mb-2 font-medium text-sm">Çmimi minimal (€)</span>
            <input
              type="number"
              placeholder="P.sh. 100"
              className="w-full border border-gray-700 bg-gray-900 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-white transition"
              onChange={(e) => {
                const userPrice = e.target.value;
                const filteredData = glassesData.filter(item => item.price > userPrice);
                setData(filteredData);
              }}
            />
          </label>

          <label className="w-full sm:flex-1">
            <span className="block mb-2 font-medium text-sm">Çmimi maksimal (€)</span>
            <input
              type="number"
              placeholder="P.sh. 250"
              className="w-full border border-gray-700 bg-gray-900 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-white transition"
              onChange={(e) => {
                const userPrice = e.target.value;
                const filteredData = glassesData.filter(item => item.price < userPrice);
                setData(filteredData);
              }}
            />
          </label>

          <button
            type="button"
            onClick={() => {
              setData(glassesData)
            }}
            className="border border-gray-600 px-6 py-3 rounded-lg hover:bg-gray-800 transition font-medium"
          >
            Pastro filtrat
          </button>
        </div>
      </div>

      <div className='w-full mt-10 flex justify-center px-4 pb-16'>
        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 max-w-7xl'>
          {
            data.map((glassItem, index) => {
              return (
                <Glasses
                  key={index}
                  img={glassItem.img}
                  name={glassItem.name}
                  code={glassItem.code}
                  price={glassItem.price}
                  no_of_colors={glassItem.no_of_colors}
                />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Products