import React, { useState } from 'react'
import menu4 from '../img/menu4.png'
import sandwich1 from '../img/sandwich/sandwich1.png'
import sandwich2 from '../img/sandwich/sandwich2.png'
import sandwich3 from '../img/sandwich/sandwich3.png'
import sandwich4 from '../img/sandwich/sandwich4.png'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Exit from '../img/icons/Exit';
const SandwichMenu = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleSandwich = () => setShow(true);
  return (
    <>
      <button onClick={handleSandwich} className='m-3 phone:w-36 sm:w-44 md:w-32 lg:w-56 bg-gray-300 p-4 rounded-lg text-center hover:text-white hover:bg-primary transition-all hover:shadow-md hover:shadow-black/50 flex  flex-col justify-center items-center border'>
        <img src={menu4} className='max-h-24 rounded-xl block mx-auto' alt="" />
        <p className=' text-sm'>Sandwich</p>
      </button>
      <Modal className=' bg-slate-200 inset-0 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[900px] h-[500px] text-black p-2 rounded-2xl' show={show} onHide={handleClose}>
        <Modal.Header className='w-full h-11 mb-3 flex justify-end items-center'>
          <Button className='mdl w-11 h-11 hover:bg-primary border-primary flex flex-col justify-end items-center' onClick={handleClose}><Exit /></Button>
        </Modal.Header>
        <Modal.Body className=' text-xl text-center my-5'>Choose what type of sandwich you want to buy.</Modal.Body>
        <Modal.Footer className='grid phone:grid-cols-2 justify-items-center h-auto justify-self-center sm:grid-cols-2 md:grid-cols-4 border rounded-2xl border-primary gap-4'>

          <div className='m-3 phone:w-36 sm:w-44 md:w-32 lg:w-32 bg-gray-300 p-4 rounded-lg text-center hover:text-white hover:bg-primary transition-all hover:shadow-md hover:shadow-black/50 flex  flex-col justify-center items-center border'>
            <img src={sandwich1} className=' max-h-20 w-24 h-20 rounded-xl block mx-auto' alt="" />
            <p className=' text-sm'>Sandwich</p>
          </div>
          <div className='m-3 phone:w-36 sm:w-44 md:w-32 lg:w-32 bg-gray-300 p-4 rounded-lg text-center hover:text-white hover:bg-primary transition-all hover:shadow-md hover:shadow-black/50 flex  flex-col justify-center items-center border'>
            <img src={sandwich2} className='max-h-20 w-24 h-20 rounded-xl block mx-auto' alt="" />
            <p className=' text-sm'>Sandwich</p>
          </div>
          <div className='m-3 phone:w-36 sm:w-44 md:w-32 lg:w-32 bg-gray-300 p-4 rounded-lg text-center hover:text-white hover:bg-primary transition-all hover:shadow-md hover:shadow-black/50 flex  flex-col justify-center items-center border'>
            <img src={sandwich3} className='max-h-20 w-24 h-20 rounded-xl block mx-auto' alt="" />
            <p className=' text-sm'>Sandwich</p>
          </div>
          <div className='m-3 phone:w-36 sm:w-44 md:w-32 lg:w-32 bg-gray-300 p-4 rounded-lg text-center hover:text-white hover:bg-primary transition-all hover:shadow-md hover:shadow-black/50 flex  flex-col justify-center items-center border'>
            <img src={sandwich4} className='max-h-20 w-24 h-20 rounded-xl block mx-auto' alt="" />
            <p className=' text-sm'>Sandwich</p>
          </div>


        </Modal.Footer>
      </Modal>
    </>
  )
}

export default SandwichMenu