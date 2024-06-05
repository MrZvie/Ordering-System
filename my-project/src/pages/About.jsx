import React from 'react'
import SectionHeaders from './SectionHeaders'

const About = () => {
    return (
        <section className='text-center my-16'>
            <SectionHeaders
                subHeader={'Our Story'}
                mainHeader={'About us'}
            />
            <div className='text-gray-500 max-w-md mx-auto mt-4 grid grid-rows-2 gap-4'>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat modi assumenda fuga et, harum mollitia sequi temporibus veritatis. Repudiandae, expedita. Molestias odio provident non autem accusamus unde voluptatem vel quam.
                </p>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit ut excepturi corrupti dicta a animi impedit tempora, minus molestiae sequi blanditiis quis ipsam rem magni! Architecto explicabo molestiae totam voluptatem?
                </p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.Doloribus placeat ipsam dignissimos explicabo odit autem vel.
                </p>
            </div>
        </section>
    )
}

export default About