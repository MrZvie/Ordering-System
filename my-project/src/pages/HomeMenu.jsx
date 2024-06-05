import React, { useState } from 'react'
import MenuItem from '../menu/MenuItem'
import SectionHeaders from './SectionHeaders'
// import { menu_list } from '../assets/assets/assets'
import PizzaMenu from '../menu/PizzaMenu'
import ChickenWingsMenu from '../menu/ChickenWingsMenu'
import DrinksMenu from '../menu/DrinksMenu'
import SandwichMenu from '../menu/SandwichMenu'
import CakeMenu from '../menu/CakeMenu'
import PureVegMenu from '../menu/PureVegMenu'
import PastaMenu from '../menu/PastaMenu'
import NoodlesMenu from '../menu/NoodlesMenu'


const HomeMenu = () => {

  return (
    <section className='my-10'>
      <div className='text-center mb-4'>
        <SectionHeaders
          // subHeader={'check out'} 
          mainHeader={'Menu'} />
        <h4 className=' mx-auto'>Choose from a diverse menu featuring a dialect array of dishes. Our mission is to satisfy your cravings and elevate your dining experience , one delicious meal at a time.</h4>
      </div>
      <div className='grid phone:grid-cols-2 justify-items-center justify-self-center sm:grid-cols-3 md:grid-cols-4 border-[2px] gap-4'>

        <PizzaMenu/>
        <ChickenWingsMenu/>
        <DrinksMenu/>
        <SandwichMenu/>
        <CakeMenu/>
        <PureVegMenu/>
        <PastaMenu/>
        <NoodlesMenu/>

      </div>
    </section>
  )
}

export default HomeMenu