import { useState } from 'react'
import Glasses from '../components/Glasses'

export const glassesData = [
  {
    id: 1,
    img: 'https://assets-maxoptika.b-cdn.net/images/8053672402087-2.png',
    name: 'Ray-Ban',
    code: 'RB123',
    price: 150,
    no_of_colors: '3',
    description: 'Syze dielli klasike Ray-Ban me dizajn ikonik dhe mbrojtje UV të plotë.'
  },
  {
    id: 2,
    img: 'https://assets-maxoptika.b-cdn.net/images/8056597429696-2.png',
    name: 'Oakley',
    code: 'OK456',
    price: 180,
    no_of_colors: '4',
    description: 'Syze sportive Oakley me teknologji të avancuar për performancë maksimale.'
  },
  {
    id: 3,
    img: 'https://assets-maxoptika.b-cdn.net/images/SO19128.png',
    name: 'Gucci',
    code: 'GC789',
    price: 250,
    no_of_colors: '2',
    description: 'Syze elegante Gucci që kombinojnë luksin me stilin bashkëkohor italian.'
  },
  {
    id: 4,
    img: 'https://assets-maxoptika.b-cdn.net/images/SO24389.png',
    name: 'Versace',
    code: 'VS321',
    price: 230,
    no_of_colors: '3',
    description: 'Dizajn i guximshëm Versace me detaje të sofistikuara dhe cilësi superiore.'
  },
  {
    id: 5,
    img: 'https://assets-maxoptika.b-cdn.net/images/SO24388.png',
    name: 'Dior',
    code: 'DR987',
    price: 290,
    no_of_colors: '2',
    description: 'Elegancë franceze nga Dior me vëmendje të veçantë ndaj detajeve.'
  },
  {
    id: 6,
    img: 'https://assets-maxoptika.b-cdn.net/images/SO20288.png',
    name: 'Burberry',
    code: 'BB753',
    price: 210,
    no_of_colors: '4',
    description: 'Stil britanik klasik nga Burberry me materiale premium.'
  },
  {
    id: 7,
    img: 'https://assets-maxoptika.b-cdn.net/images/SO20289.png',
    name: 'Tom Ford',
    code: 'TF852',
    price: 240,
    no_of_colors: '2',
    description: 'Syze luksoze Tom Ford që mishërojnë sofistikimin modern.'
  },
  {
    id: 8,
    img: 'https://assets-maxoptika.b-cdn.net/images/8053672402087-2.png',
    name: 'Prada',
    code: 'PR456',
    price: 270,
    no_of_colors: '3',
    description: 'Dizajn minimaliste dhe elegant nga shtëpia e modës Prada.'
  },
  {
    id: 9,
    img: 'https://assets-maxoptika.b-cdn.net/images/8056597429696-2.png',
    name: 'Armani',
    code: 'AR789',
    price: 220,
    no_of_colors: '2',
    description: 'Syze të sofistikuara Giorgio Armani për look profesional.'
  },
  {
    id: 10,
    img: 'https://assets-maxoptika.b-cdn.net/images/SO19128.png',
    name: 'Dolce & Gabbana',
    code: 'DG123',
    price: 260,
    no_of_colors: '4',
    description: 'Stil italian me personalizëm të fortë dhe detaje unike.'
  },
  {
    id: 11,
    img: 'https://assets-maxoptika.b-cdn.net/images/SO24389.png',
    name: 'Michael Kors',
    code: 'MK654',
    price: 190,
    no_of_colors: '3',
    description: 'Dizajn amerikan modern me elegancë të përditshme.'
  },
  {
    id: 12,
    img: 'https://assets-maxoptika.b-cdn.net/images/SO24388.png',
    name: 'Chanel',
    code: 'CH901',
    price: 310,
    no_of_colors: '2',
    description: 'Luksi parisien nga Chanel me dizajn ikonik dhe të përjetshëm.'
  },
  {
    id: 13,
    img: 'https://assets-maxoptika.b-cdn.net/images/SO20288.png',
    name: 'Fendi',
    code: 'FD234',
    price: 280,
    no_of_colors: '3',
    description: 'Syze të stiluara Fendi me detaje të veçanta dhe cilësi të lartë.'
  },
  {
    id: 14,
    img: 'https://assets-maxoptika.b-cdn.net/images/SO20289.png',
    name: 'Valentino',
    code: 'VL567',
    price: 255,
    no_of_colors: '2',
    description: 'Romantizëm italian nga Valentino me dizajn të rafinuar.'
  },
  {
    id: 15,
    img: 'https://assets-maxoptika.b-cdn.net/images/8053672402087-2.png',
    name: 'Cartier',
    code: 'CT890',
    price: 350,
    no_of_colors: '2',
    description: 'Syze ekskluzive Cartier që mishërojnë luksit në nivel më të lartë.'
  },
  {
    id: 16,
    img: 'https://assets-maxoptika.b-cdn.net/images/8056597429696-2.png',
    name: 'Persol',
    code: 'PS321',
    price: 200,
    no_of_colors: '4',
    description: 'Trashëgimi italiane me cilësi të jashtëzakonshme dhe stil klasik.'
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
            data.map((glassItem) => {
              return (
                <Glasses
                  key={glassItem.id}
                  id={glassItem.id}
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