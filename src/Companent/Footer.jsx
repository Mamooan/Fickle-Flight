import React from 'react'

export default function Footer() {
  return (
   <>
   <div className=''>
   <div className='  pt-12 pb-14  bg-blue-700 grid lg:grid-cols-2 grid-cols-1 sm:px-20 px-10 gap-8' style={{
      background: 'linear-gradient(99deg, #0B5BA8 7%, #0B5BA8 30%, #299BD8 100%)',
   }}>
    <div className='  space-y-4'>
        <img src="/Image/Logo.svg" alt="" />
        <p className=' text-white text-base font-normal' >Fickle Flight is your one-stop travel portal. We offer hassle free flight and hotel bookings. We also have all your flight needs in you online shop.</p>
        <div className=' flex gap-3'>
            <img src="/Image/Facebook Icon.svg" alt="" />
            <img src="/Image/Instagram Icon.svg" alt="" />
            <img src="/Image/Twitter Icon.svg" alt="" />


        </div>
    </div>
    <div className='  grid sm:grid-cols-3 grid-cols-1'>
        <div className='  space-y-2'>
            <h2 className=' text-xl font-medium leading-7 text-white'>Company</h2>
            <p className=' text-white text-base font-normal'>About Us</p>
            <p className=' text-white text-base font-normal'>News</p>
            <p className=' text-white text-base font-normal'>Careers</p>
            <p className=' text-white text-base font-normal'>How we work</p>
        </div>
        <div className='  space-y-2'>
        <h2 className=' text-xl font-medium leading-7 text-white'>Support</h2>
            <p className=' text-white text-base font-normal'>Account</p>
            <p className=' text-white text-base font-normal'>Support Center</p>
            <p className=' text-white text-base font-normal'>FAQ</p>
            <p className=' text-white text-base font-normal'>Accessibility</p>
        </div>
        <div className='  space-y-2'>
        <h2 className=' text-xl font-medium leading-7 text-white'>More</h2>
            <p className=' text-white text-base font-normal'>Covid Advisory</p>
            <p className=' text-white text-base font-normal'>Airline Fees</p>
            <p className=' text-white text-base font-normal'>Tips</p>
            <p className=' text-white text-base font-normal'>Quarantine Rules</p>
        </div>


    </div>

   </div>
   </div>
</>
)
}