import React from 'react'
import client1 from '../assets/client1.png'

const Clients = () => {
  return (
    <div className='py-30'>
      <div>
        <h1 className='text-white text-center text-5xl font-semibold'>Our Clients</h1>
        <p className='text-white text-center text-xl pt-5 font-light'>Hear firsthand how our solutions have <br /> boosted online success for users like you.</p>   

      </div>
      <div className='flex grid grid-cols-[280px_280px] items-center justify-center mt-20'>
          <div>
            <img src={client1} alt="meow" className='shadow-[0_0_70px_rgba(168,85,247,0.4)] rounded-2xl'/>
          </div>
          <div className='text-white'>
            <h3 className='py-1 text-[18px]'>”This product has completely transformed how I manage my projects and deadlines”</h3>
            <h2 className='py-1 mt-3 text-md'>Taila Taylor</h2>
            <p className='text-gray-600 text-md'>Digital Marketing Director @ Quantum</p>
          </div>
      </div>
    </div>
  )
}

export default Clients