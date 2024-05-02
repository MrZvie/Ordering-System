import React from 'react'
import neapolitan from '../img/neapolitan-pizza.png'

const MenuItem = () => {
  return (
    <div className='bg-gray-200 p-4 rounded-lg text-center hover:bg-white transition-all hover:shadow-md hover:shadow-black/50'>
            <div className='text-center'>
                <img className='max-h-auto max-h-24 block mx-auto' src={neapolitan} alt="popular pizza" />
            </div>
            <h4 className='font-semibold text-xl my-3 '>Neapolitan Pizza</h4>
            <p className='text-gray-500 text-sm'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint commodi sit natus, unde rem laboriosam quisquam dolore delectus nulla, consectetur provident ipsam aliquid ea nam architecto tempore corrupti, ipsum minus?
            </p>
            <button className='bg-primary text-white mt-4 rounded-full px-8 py-2'>
                Add to cart 50php
            </button>
        </div>
  )
}

export default MenuItem