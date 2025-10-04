const Glasses = ({ img, name, code, price, no_of_colors }) => {
    return (
        <div className='w-full bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-gray-600 transition-all duration-300 group'>
            <div className='flex justify-center items-center mb-4 overflow-hidden rounded-lg bg-gray-800 h-48'>
                <img
                    className='w-full h-full object-contain group-hover:scale-110 transition-transform duration-300'
                    src={img}
                    alt={`${name} - ${code}`}
                />
            </div>
            <div className='space-y-2'>
                <h3 className='text-lg font-medium text-white text-center'>
                    {name}
                </h3>
                <p className='text-sm text-gray-400 text-center'>
                    {code}
                </p>
                <div className='pt-3 pb-2 flex items-center justify-center'>
                    <span className='text-2xl font-semibold text-white'>
                        {price}€
                    </span>
                </div>
                <div className='flex items-center justify-center text-xs text-gray-500'>
                    {no_of_colors} ngjyra të disponueshme
                </div>
            </div>
        </div>
    )
}

export default Glasses