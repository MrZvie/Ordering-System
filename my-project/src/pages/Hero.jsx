import React from 'react'
import { MdOutlineArrowCircleRight } from "react-icons/md";
import pizza from '../img/pizza.png'

const Hero = () => {
  return (
    <section className='grid grid-cols-2 mt-4 gap-10'>
            <div className='py-12'>
                <h1 className='text-4xl font-semibold'>
                    Life is better <br /> 
                    with a slice of <br /> 
                    <span className="text-primary">
                        Pizza
                    </span>
                </h1>
                <p className='my-6 text-gray-500 text-sm'>
                Pizza, a timeless classic that transcends generations, evoking memories of shared laughter and joyous gatherings. Its irresistible allure lies in its simplicity, yet its ability to comfort and delight knows no bounds.
                </p>
                <div className='flex gap-4 text-sm'>
                    <button className='btn bg-primary text-white uppercase items-center flex gap-2 px-4 py-2 rounded-full'>
                        Order Now
                        <MdOutlineArrowCircleRight className='icon w-8 h-7' />
                    </button>
                    <button className='flex gap-2 py-2 items-center text-gray-600 font-semibold'>
                        Learn More
                        <MdOutlineArrowCircleRight className='w-8 h-7' />
                    </button>
                </div>
            </div>
            <div className='relative mx-auto'>
                <img objectfit="contain" layout={'fill'} src={pizza} alt="pizza" />
            </div>
        </section>
  )
}

export default Hero