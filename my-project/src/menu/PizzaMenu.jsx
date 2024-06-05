import menu1 from '../img/menu1.png'
import React, { useState } from 'react'

import piiza1 from '../img/pizza/BqqChickenPizza.jpg'
import piiza2 from '../img/pizza/CheesePizza.jpg'
import piiza3 from '../img/pizza/HawainPizza.jpg'
import piiza4 from '../img/pizza/MargheritaPizza.jpg'
import piiza5 from '../img/pizza/MushroomPizza.jpg'
import piiza6 from '../img/pizza/NeapolitanPizza.jpg'
import piiza7 from '../img/pizza/PepperoniPizza.jpg'
import piiza8 from '../img/pizza/PestoPizza.jpg'
import piiza9 from '../img/pizza/SupremePizza.jpg'
import piiza10 from '../img/pizza/VeggieDelightPizza.jpg'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Exit from '../img/icons/Exit';

const PizzaMenu = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handlePizza = () => setShow(true);

    return (
        <>
            <button onClick={handlePizza} className='m-3 phone:w-36 sm:w-44 md:w-32 lg:w-56 bg-gray-300 p-4 rounded-lg text-center hover:text-white hover:bg-primary transition-all hover:shadow-md hover:shadow-black/50 flex  flex-col justify-center items-center border'>
                <img src={menu1} className='max-h-24 rounded-xl block mx-auto' alt="" />
                <p className=' text-sm'>Pizza</p>
            </button>
            <Modal className=' bg-slate-200 inset-0 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[900px] h-[500px] text-black p-2 rounded-2xl' show={show} onHide={handleClose}>
                <Modal.Header className='w-full h-11 mb-3 flex justify-end items-center'>
                    <Button className='mdl w-11 h-11 hover:bg-primary border-primary flex flex-col justify-end items-center' onClick={handleClose}><Exit /></Button>
                </Modal.Header>
                <Modal.Body className=' text-xl text-center my-5'>Choose what type of pizza you want to buy.</Modal.Body>
                <Modal.Footer className='grid phone:grid-cols-2 justify-items-center h-auto justify-self-center sm:grid-cols-3 md:grid-cols-5 rounded-2xl border border-primary gap-4'>

                    <div className='m-3 phone:w-36 sm:w-44 md:w-32 lg:w-32 bg-gray-300 p-4 rounded-lg text-center hover:text-white hover:bg-primary transition-all hover:shadow-md hover:shadow-black/50 flex  flex-col justify-center items-center border'>
                        <img src={piiza1} className=' max-h-20 w-24 h-20 rounded-xl block mx-auto' alt="" />
                        <p className=' text-sm'>Pizza</p>
                    </div>
                    <div className='m-3 phone:w-36 sm:w-44 md:w-32 lg:w-32 bg-gray-300 p-4 rounded-lg text-center hover:text-white hover:bg-primary transition-all hover:shadow-md hover:shadow-black/50 flex  flex-col justify-center items-center border'>
                        <img src={piiza2} className='max-h-20 w-24 h-20 rounded-xl block mx-auto' alt="" />
                        <p className=' text-sm'>Pizza</p>
                    </div>
                    <div className='m-3 phone:w-36 sm:w-44 md:w-32 lg:w-32 bg-gray-300 p-4 rounded-lg text-center hover:text-white hover:bg-primary transition-all hover:shadow-md hover:shadow-black/50 flex  flex-col justify-center items-center border'>
                        <img src={piiza3} className='max-h-20 w-24 h-20 rounded-xl block mx-auto' alt="" />
                        <p className=' text-sm'>Pizza</p>
                    </div>
                    <div className='m-3 phone:w-36 sm:w-44 md:w-32 lg:w-32 bg-gray-300 p-4 rounded-lg text-center hover:text-white hover:bg-primary transition-all hover:shadow-md hover:shadow-black/50 flex  flex-col justify-center items-center border'>
                        <img src={piiza4} className='max-h-20 w-24 h-20 rounded-xl block mx-auto' alt="" />
                        <p className=' text-sm'>Pizza</p>
                    </div>
                    <div className='m-3 phone:w-36 sm:w-44 md:w-32 lg:w-32 bg-gray-300 p-4 rounded-lg text-center hover:text-white hover:bg-primary transition-all hover:shadow-md hover:shadow-black/50 flex  flex-col justify-center items-center border'>
                        <img src={piiza5} className='max-h-20 w-24 h-20 rounded-xl block mx-auto' alt="" />
                        <p className=' text-sm'>Pizza</p>
                    </div>
                    <div className='m-3 phone:w-36 sm:w-44 md:w-32 lg:w-32 bg-gray-300 p-4 rounded-lg text-center hover:text-white hover:bg-primary transition-all hover:shadow-md hover:shadow-black/50 flex  flex-col justify-center items-center border'>
                        <img src={piiza6} className='max-h-20 w-24 h-20 rounded-xl block mx-auto' alt="" />
                        <p className=' text-sm'>Pizza</p>
                    </div>
                    <div className='m-3 phone:w-36 sm:w-44 md:w-32 lg:w-32 bg-gray-300 p-4 rounded-lg text-center hover:text-white hover:bg-primary transition-all hover:shadow-md hover:shadow-black/50 flex  flex-col justify-center items-center border'>
                        <img src={piiza7} className='max-h-20 w-24 h-20 rounded-xl block mx-auto' alt="" />
                        <p className=' text-sm'>Pizza</p>
                    </div>
                    <div className='m-3 phone:w-36 sm:w-44 md:w-32 lg:w-32 bg-gray-300 p-4 rounded-lg text-center hover:text-white hover:bg-primary transition-all hover:shadow-md hover:shadow-black/50 flex  flex-col justify-center items-center border'>
                        <img src={piiza8} className='max-h-20 w-24 h-20 rounded-xl block mx-auto' alt="" />
                        <p className=' text-sm'>Pizza</p>
                    </div>
                    <div className='m-3 phone:w-36 sm:w-44 md:w-32 lg:w-32 bg-gray-300 p-4 rounded-lg text-center hover:text-white hover:bg-primary transition-all hover:shadow-md hover:shadow-black/50 flex  flex-col justify-center items-center border'>
                        <img src={piiza9} className='max-h-20 w-24 h-20 rounded-xl block mx-auto' alt="" />
                        <p className=' text-sm'>Pizza</p>
                    </div>
                    <div className='m-3 phone:w-36 sm:w-44 md:w-32 lg:w-32 bg-gray-300 p-4 rounded-lg text-center hover:text-white hover:bg-primary transition-all hover:shadow-md hover:shadow-black/50 flex  flex-col justify-center items-center border'>
                        <img src={piiza10} className='max-h-20 w-24 h-20 rounded-xl block mx-auto' alt="" />
                        <p className=' text-sm'>Pizza</p>
                    </div>

                </Modal.Footer>
            </Modal>
        </>
    )
}

export default PizzaMenu