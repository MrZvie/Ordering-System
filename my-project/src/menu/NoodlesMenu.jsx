import React, { useState } from 'react'
import menu8 from '../img/menu8.png'
import noodles1 from '../img/noodles/noodles1.png'
import noodles2 from '../img/noodles/noodles2.png'
import noodles3 from '../img/noodles/noodles3.png'
import noodles4 from '../img/noodles/noodles4.png'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Exit from '../img/icons/Exit';
const NoodlesMenu = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleNoodles = () => setShow(true);
  return (
    <>
      <button onClick={handleNoodles} className='m-3 phone:w-36 sm:w-44 md:w-32 lg:w-56 bg-gray-300 p-4 rounded-lg text-center hover:text-white hover:bg-primary transition-all hover:shadow-md hover:shadow-black/50 flex  flex-col justify-center items-center border'>
        <img src={menu8} className='max-h-24 rounded-xl block mx-auto' alt="" />
        <p className=' text-sm'>Noodles</p>
      </button>
      <Modal className=' bg-slate-200 inset-0 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[900px] h-[500px] text-black p-2 rounded-2xl' show={show} onHide={handleClose}>
        <Modal.Header className='w-full h-11 mb-3 flex justify-end items-center'>
          <Button className='mdl w-11 h-11 hover:bg-primary border-primary flex flex-col justify-end items-center' onClick={handleClose}><Exit /></Button>
        </Modal.Header>
        <Modal.Body className=' text-xl text-center my-5'>Choose what type of noodles you want to buy.</Modal.Body>
        <Modal.Footer className='grid phone:grid-cols-2 justify-items-center h-auto justify-self-center sm:grid-cols-2 md:grid-cols-4 border rounded-2xl border-primary gap-4'>

          <div className='m-3 phone:w-36 sm:w-44 md:w-32 lg:w-32 bg-gray-300 p-4 rounded-lg text-center hover:text-white hover:bg-primary transition-all hover:shadow-md hover:shadow-black/50 flex  flex-col justify-center items-center border'>
            <img src={noodles1} className=' max-h-20 w-24 h-20 rounded-xl block mx-auto' alt="" />
            <p className=' text-sm'>noodles</p>
          </div>
          <div className='m-3 phone:w-36 sm:w-44 md:w-32 lg:w-32 bg-gray-300 p-4 rounded-lg text-center hover:text-white hover:bg-primary transition-all hover:shadow-md hover:shadow-black/50 flex  flex-col justify-center items-center border'>
            <img src={noodles2} className='max-h-20 w-24 h-20 rounded-xl block mx-auto' alt="" />
            <p className=' text-sm'>noodles</p>
          </div>
          <div className='m-3 phone:w-36 sm:w-44 md:w-32 lg:w-32 bg-gray-300 p-4 rounded-lg text-center hover:text-white hover:bg-primary transition-all hover:shadow-md hover:shadow-black/50 flex  flex-col justify-center items-center border'>
            <img src={noodles3} className='max-h-20 w-24 h-20 rounded-xl block mx-auto' alt="" />
            <p className=' text-sm'>noodles</p>
          </div>
          <div className='m-3 phone:w-36 sm:w-44 md:w-32 lg:w-32 bg-gray-300 p-4 rounded-lg text-center hover:text-white hover:bg-primary transition-all hover:shadow-md hover:shadow-black/50 flex  flex-col justify-center items-center border'>
            <img src={noodles4} className='max-h-20 w-24 h-20 rounded-xl block mx-auto' alt="" />
            <p className=' text-sm'>noodles</p>
          </div>


        </Modal.Footer>
      </Modal>
    </>
  )
}

export default NoodlesMenu