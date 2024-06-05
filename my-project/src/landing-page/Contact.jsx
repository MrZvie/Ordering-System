import React from 'react'
import SectionHeaders from '../pages/SectionHeaders'

const Contact = () => {
    return (
        <section className='text-center my-8 '>
            <SectionHeaders
                subHeader={'Don\'t hesitate'}
                mainHeader={'Contact Us'}
            />
            <div className='mx-auto mt-5 flex w-3/4'>
                <div className='bg-sky-400 rounded-xl flex flex-col gap-5 w-[40%]'>
                    <div className='m-5 flex flex-col gap-10 text-white'>
                        <h2 className='mt-5'>Contact Information</h2>
                        <div className='flex items-center text-sm gap-2'>
                            <span className='bg-white/30 rounded-full h-9 w-9 flex items-center justify-center font-bold text-2xl'>
                                <ion-icon name="location-outline"></ion-icon>
                            </span>
                            <p><span className='font-bold'>Address</span>: My Address Chuchu</p>
                        </div>
                        <div className='flex items-center text-sm gap-2'>
                            <span className='bg-white/30 rounded-full h-9 w-9 flex items-center justify-center font-bold text-2xl'>
                                <ion-icon name="call-outline"></ion-icon>
                            </span>
                            <p><span className='font-bold'>Phone:</span> 09123456789</p>
                        </div>
                        <div className='flex items-center text-sm gap-2'>
                            <span className='bg-white/30 rounded-full h-9 w-9 flex items-center justify-center font-bold text-2xl'>
                                <ion-icon name="mail-outline"></ion-icon>
                            </span>
                            <p><span className='font-bold'>Email:</span> Slice&Chugs@gmail.com</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-evenly gap-2'>
                        <span className='text-2xl text-blue-900'><ion-icon name="logo-facebook"></ion-icon></span>
                        <span className='text-2xl text-red-700'><ion-icon name="logo-instagram"></ion-icon></span>
                        <span className='text-2xl text-black'><ion-icon name="logo-github"></ion-icon></span>
                        <span className='text-2xl text-primary'><ion-icon name="logo-youtube"></ion-icon></span>
                    </div>
                </div>
                <form className='block m-10 w-[60%] shadow-lg shadow-slate-900/50 mx-auto rounded-xl '>
                    <div className='m-5'>
                        <h3 className='font-bold text-start text-gray-500'>Send us a message</h3>
                        <div className='flex gap-2'>
                            <input type="text" className='pl-2' placeholder='Enter Name' />
                            <input type="email" className='pl-2' placeholder='Enter Email' />
                        </div>
                        <input type="text" className='pl-2' placeholder='Subject' />
                        <textarea class="border-2 rounded w-full py-2 px-3 text-gray-700 resize-none" rows="4" placeholder="Write a message..."></textarea>
                        <button className='w-40 mx-auto bg-sky-400 text-white hover:bg-sky-300'>Send</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact