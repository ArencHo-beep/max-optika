import React from 'react'

const Glasses = ({ img, name, code, price, no_of_colors }) => {
    return (
        <div className='w-[85%] h-[95%] flex justify-center flex-col bg-[#cac7c7] rounded-2xl p-4 m-2'>
            <div className='flex justify-center items-center'>
                <img
                    className='rounded-2xl mix-blend-color-burn hover:scale-125 transition'
                    src={img}
                    alt="Syze"
                    width='80%'
                />
            </div>
            <div className='mt-2 flex items-center justify-center text-xl text-black'>
                {name}
            </div>
            <div className='mt-2 flex items-center justify-center text-sm text-black'>
                {code}
            </div>
            <div className='mt-8 flex items-center justify-center text-2xl font-bold text-black'>
                {price}€
            </div>
            <div className='mt-14 flex items-center justify-start text-sm text-black'>
                {no_of_colors} ngjyra
            </div>
        </div>
    )
}

export default Glasses