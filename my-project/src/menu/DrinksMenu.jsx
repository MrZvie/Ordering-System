import React, { useState } from 'react'
import menu3 from '../img/menu3.png'
import drink1 from '../img/fordrinks/Beer.jpg'
import drink2 from '../img/fordrinks/CocaCola.jpg'
import drink3 from '../img/fordrinks/FruitSmoothie.jpg'
import drink4 from '../img/fordrinks/IcedCoffee.jpg'
import drink5 from '../img/fordrinks/Lemonade.jpg'
import drink6 from '../img/fordrinks/LemonIcedTea.jpg'
import drink7 from '../img/fordrinks/Milkshake.jpg'
import drink8 from '../img/fordrinks/RootBearFloat.jpg'
import drink9 from '../img/fordrinks/SparklingWater.jpg'
import drink10 from '../img/fordrinks/StrawberryItalianSoda.jpg'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Exit from '../img/icons/Exit';
const DrinksMenu = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleDrinks = () => setShow(true);

  return (
    <>
      <button onClick={handleDrinks} className='m-3 phone:w-36 sm:w-44 md:w-32 lg:w-56 bg-gray-300 p-4 rounded-lg text-center hover:text-white hover:bg-primary transition-all hover:shadow-md hover:shadow-black/50 flex  flex-col justify-center items-center border'>
        <img src={menu3} className='max-h-24 rounded-xl block mx-auto' alt="" />
        <p className=' text-sm'>Drinks</p>
      </button>
      <Modal className=' bg-slate-200 inset-0 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[900px] h-[500px] text-black p-2 rounded-2xl' show={show} onHide={handleClose}>
        <Modal.Header className='w-full h-11 mb-3 flex justify-end items-center'>
          <Button className='mdl w-11 h-11 hover:bg-primary border-primary flex flex-col justify-end items-center' onClick={handleClose}><Exit /></Button>
        </Modal.Header>
        <Modal.Body className=' text-xl text-center my-5'>Choose what type of drinks you want to buy.</Modal.Body>
        <Modal.Footer className='grid phone:grid-cols-2 justify-items-center h-auto justify-self-center sm:grid-cols-3 md:grid-cols-5 border rounded-2xl border-primary gap-4'>

          <div className='m-3 phone:w-36 sm:w-44 md:w-32 lg:w-32 bg-gray-300 p-4 rounded-lg text-center hover:text-white hover:bg-primary transition-all hover:shadow-md hover:shadow-black/50 flex  flex-col justify-center items-center border'>
            <img src={drink1} className=' max-h-20 w-24 h-20 rounded-xl block mx-auto' alt="" />
            <p className=' text-sm'>Drinks</p>
          </div>
          <div className='m-3 phone:w-36 sm:w-44 md:w-32 lg:w-32 bg-gray-300 p-4 rounded-lg text-center hover:text-white hover:bg-primary transition-all hover:shadow-md hover:shadow-black/50 flex  flex-col justify-center items-center border'>
            <img src={drink2} className='max-h-20 w-24 h-20 rounded-xl block mx-auto' alt="" />
            <p className=' text-sm'>Drinks</p>
          </div>
          <div className='m-3 phone:w-36 sm:w-44 md:w-32 lg:w-32 bg-gray-300 p-4 rounded-lg text-center hover:text-white hover:bg-primary transition-all hover:shadow-md hover:shadow-black/50 flex  flex-col justify-center items-center border'>
            <img src={drink3} className='max-h-20 w-24 h-20 rounded-xl block mx-auto' alt="" />
            <p className=' text-sm'>Drinks</p>
          </div>
          <div className='m-3 phone:w-36 sm:w-44 md:w-32 lg:w-32 bg-gray-300 p-4 rounded-lg text-center hover:text-white hover:bg-primary transition-all hover:shadow-md hover:shadow-black/50 flex  flex-col justify-center items-center border'>
            <img src={drink4} className='max-h-20 w-24 h-20 rounded-xl block mx-auto' alt="" />
            <p className=' text-sm'>Drinks</p>
          </div>
          <div className='m-3 phone:w-36 sm:w-44 md:w-32 lg:w-32 bg-gray-300 p-4 rounded-lg text-center hover:text-white hover:bg-primary transition-all hover:shadow-md hover:shadow-black/50 flex  flex-col justify-center items-center border'>
            <img src={drink5} className='max-h-20 w-24 h-20 rounded-xl block mx-auto' alt="" />
            <p className=' text-sm'>Drinks</p>
          </div>
          <div className='m-3 phone:w-36 sm:w-44 md:w-32 lg:w-32 bg-gray-300 p-4 rounded-lg text-center hover:text-white hover:bg-primary transition-all hover:shadow-md hover:shadow-black/50 flex  flex-col justify-center items-center border'>
            <img src={drink6} className='max-h-20 w-24 h-20 rounded-xl block mx-auto' alt="" />
            <p className=' text-sm'>Drinks</p>
          </div>
          <div className='m-3 phone:w-36 sm:w-44 md:w-32 lg:w-32 bg-gray-300 p-4 rounded-lg text-center hover:text-white hover:bg-primary transition-all hover:shadow-md hover:shadow-black/50 flex  flex-col justify-center items-center border'>
            <img src={drink7} className='max-h-20 w-24 h-20 rounded-xl block mx-auto' alt="" />
            <p className=' text-sm'>Drinks</p>
          </div>
          <div className='m-3 phone:w-36 sm:w-44 md:w-32 lg:w-32 bg-gray-300 p-4 rounded-lg text-center hover:text-white hover:bg-primary transition-all hover:shadow-md hover:shadow-black/50 flex  flex-col justify-center items-center border'>
            <img src={drink8} className='max-h-20 w-24 h-20 rounded-xl block mx-auto' alt="" />
            <p className=' text-sm'>Drinks</p>
          </div>
          <div className='m-3 phone:w-36 sm:w-44 md:w-32 lg:w-32 bg-gray-300 p-4 rounded-lg text-center hover:text-white hover:bg-primary transition-all hover:shadow-md hover:shadow-black/50 flex  flex-col justify-center items-center border'>
            <img src={drink9} className='max-h-20 w-24 h-20 rounded-xl block mx-auto' alt="" />
            <p className=' text-sm'>Drinks</p>
          </div>
          <div className='m-3 phone:w-36 sm:w-44 md:w-32 lg:w-32 bg-gray-300 p-4 rounded-lg text-center hover:text-white hover:bg-primary transition-all hover:shadow-md hover:shadow-black/50 flex  flex-col justify-center items-center border'>
            <img src={drink10} className='max-h-20 w-24 h-20 rounded-xl block mx-auto' alt="" />
            <p className=' text-sm'>Drinks</p>
          </div>

        </Modal.Footer>
      </Modal>
    </>
  )
}

export default DrinksMenu