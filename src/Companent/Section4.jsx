import React from 'react'
import img from '../Assets/cloud.png'

export default function Section4() {
  return (
    <>
      <div className=' py-20 flex flex-col justify-center items-center text-[RobotoRoman] bg-cover' style={{
        backgroundImage: `linear-gradient(rgba(238, 244, 250, 0.7), rgba(238, 244, 250, 0.7)), url(${img})`,
      }} >
        <h3 className=' text-[#1262AE]'>SUBSCRIBE TO OUR NEWSLETTER</h3>
        <h2 className='text-[#434343] text-2xl pb-3'>Get weekly updates</h2>
        <div className=' flex flex-col bg-white p-5 gap-3'>
            <p className=' text-start text-[#576074]'>Fill in your details to join the party!</p>
            <input type="text" placeholder='Your name' className='border border-black p-2 md:w-96' />
            <input type="text" placeholder='Email Address' className='border border-black p-2 md:w-96'/>
            <div>
            <button className='bg-[#F99A0E] p-3 px-9 text-white'>SUBMIT</button>
            </div>
            </div>
      </div>
    </>
  )
}
