import React, { useState } from 'react'
import menu2 from '../img/menu2.png'

import chicken1 from '../img/forchickenwings/BqqWings.jpg'
import chicken2 from '../img/forchickenwings/BuffaloWings.jpg'
import chicken3 from '../img/forchickenwings/CajunWings.jpg'
import chicken4 from '../img/forchickenwings/GarlicWings.jpg'
import chicken5 from '../img/forchickenwings/HoneyMustardWIngs.jpg'
import chicken6 from '../img/forchickenwings/LemonPepperWings.jpg'
import chicken7 from '../img/forchickenwings/MangoHabaneroWings.jpg'
import chicken8 from '../img/forchickenwings/SrirachaWings.jpg'
import chicken9 from '../img/forchickenwings/TeriyakiWings.jpg'
import chicken10 from '../img/forchickenwings/ThaiChiliWings.jpg'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Exit from '../img/icons/Exit';
const ChickenWingsMenu = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleChicken = () => setShow(true);

  return (
    <>
      <button onClick={handleChicken} className='m-3 phone:w-36 sm:w-44 md:w-32 lg:w-56 bg-gray-300 p-4 rounded-lg text-center hover:text-white hover:bg-primary transition-all hover:shadow-md hover:shadow-black/50 flex  flex-col justify-center items-center border'>
        <img src={menu2} className='max-h-24 rounded-xl block mx-auto' alt="" />
        <p className=' text-sm'>Chicken Wings</p>
      </button>
      <Modal className=' bg-slate-200 inset-0 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[900px] h-[500px] text-black p-2 rounded-2xl' show={show} onHide={handleClose}>
        <Modal.Header className='w-full h-11 mb-3 flex justify-end items-center'>
          <Button className='mdl w-11 h-11 hover:bg-primary border-primary flex flex-col justify-end items-center' onClick={handleClose}><Exit /></Button>
        </Modal.Header>
        <Modal.Body className=' text-xl text-center my-5'>Choose what type of chicken wings you want to buy.</Modal.Body>
        <Modal.Footer className='grid phone:grid-cols-2 justify-items-center h-auto justify-self-center sm:grid-cols-3 md:grid-cols-5 border rounded-2xl border-primary gap-4'>

          <div className='m-3 phone:w-36 sm:w-44 md:w-32 lg:w-32 bg-gray-300 p-4 rounded-lg text-center hover:text-white hover:bg-primary transition-all hover:shadow-md hover:shadow-black/50 flex  flex-col justify-center items-center border'>
            <img src={chicken1} className='max-h-20 w-24 h-20 rounded-xl block mx-auto' alt="" />
            <p className=' text-sm'>Chicken Wings</p>
          </div>
          <div className='m-3 phone:w-36 sm:w-44 md:w-32 lg:w-32 bg-gray-300 p-4 rounded-lg text-center hover:text-white hover:bg-primary transition-all hover:shadow-md hover:shadow-black/50 flex  flex-col justify-center items-center border'>
            <img src={chicken2} className='max-h-20 w-24 h-20 rounded-xl block mx-auto' alt="" />
            <p className=' text-sm'>Chicken Wings</p>
          </div>
          <div className='m-3 phone:w-36 sm:w-44 md:w-32 lg:w-32 bg-gray-300 p-4 rounded-lg text-center hover:text-white hover:bg-primary transition-all hover:shadow-md hover:shadow-black/50 flex  flex-col justify-center items-center border'>
            <img src={chicken3} className='max-h-20 w-24 h-20 rounded-xl block mx-auto' alt="" />
            <p className=' text-sm'>Chicken Wings</p>
          </div>
          <div className='m-3 phone:w-36 sm:w-44 md:w-32 lg:w-32 bg-gray-300 p-4 rounded-lg text-center hover:text-white hover:bg-primary transition-all hover:shadow-md hover:shadow-black/50 flex  flex-col justify-center items-center border'>
            <img src={chicken4} className='max-h-20 w-24 h-20 rounded-xl block mx-auto' alt="" />
            <p className=' text-sm'>Chicken Wings</p>
          </div>
          <div className='m-3 phone:w-36 sm:w-44 md:w-32 lg:w-32 bg-gray-300 p-4 rounded-lg text-center hover:text-white hover:bg-primary transition-all hover:shadow-md hover:shadow-black/50 flex  flex-col justify-center items-center border'>
            <img src={chicken5} className='max-h-20 w-24 h-20 rounded-xl block mx-auto' alt="" />
            <p className=' text-sm'>Chicken Wings</p>
          </div>
          <div className='m-3 phone:w-36 sm:w-44 md:w-32 lg:w-32 bg-gray-300 p-4 rounded-lg text-center hover:text-white hover:bg-primary transition-all hover:shadow-md hover:shadow-black/50 flex  flex-col justify-center items-center border'>
            <img src={chicken6} className='max-h-20 w-24 h-20 rounded-xl block mx-auto' alt="" />
            <p className=' text-sm'>Chicken Wings</p>
          </div>
          <div className='m-3 phone:w-36 sm:w-44 md:w-32 lg:w-32 bg-gray-300 p-4 rounded-lg text-center hover:text-white hover:bg-primary transition-all hover:shadow-md hover:shadow-black/50 flex  flex-col justify-center items-center border'>
            <img src={chicken7} className='max-h-20 w-24 h-20 rounded-xl block mx-auto' alt="" />
            <p className=' text-sm'>Chicken Wings</p>
          </div>
          <div className='m-3 phone:w-36 sm:w-44 md:w-32 lg:w-32 bg-gray-300 p-4 rounded-lg text-center hover:text-white hover:bg-primary transition-all hover:shadow-md hover:shadow-black/50 flex  flex-col justify-center items-center border'>
            <img src={chicken8} className='max-h-20 w-24 h-20 rounded-xl block mx-auto' alt="" />
            <p className=' text-sm'>Chicken Wings</p>
          </div>
          <div className='m-3 phone:w-36 sm:w-44 md:w-32 lg:w-32 bg-gray-300 p-4 rounded-lg text-center hover:text-white hover:bg-primary transition-all hover:shadow-md hover:shadow-black/50 flex  flex-col justify-center items-center border'>
            <img src={chicken9} className='max-h-20 w-24 h-20 rounded-xl block mx-auto' alt="" />
            <p className=' text-sm'>Chicken Wings</p>
          </div>
          <div className='m-3 phone:w-36 sm:w-44 md:w-32 lg:w-32 bg-gray-300 p-4 rounded-lg text-center hover:text-white hover:bg-primary transition-all hover:shadow-md hover:shadow-black/50 flex  flex-col justify-center items-center border'>
            <img src={chicken10} className='max-h-20 w-24 h-20 rounded-xl block mx-auto' alt="" />
            <p className=' text-sm'>Chicken Wings</p>
          </div>

        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ChickenWingsMenu