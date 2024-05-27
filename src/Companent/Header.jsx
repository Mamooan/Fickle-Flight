import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoNotificationsOutline } from "react-icons/io5";
import { IoReorderThreeOutline } from "react-icons/io5";

function Header(Props) {
  const [show, setshow] = useState(false)
  return (
    <>
      <div className=' grid grid-cols-1'>
        <div className='flex justify-between py-5 px-20 font-[Roboto]'>
          <img src="/Image/Fickleflight Logo.svg" alt="" />
          <div className='flex gap-10 items-center'>
            <ul className=' hidden xl:flex gap-10'>
              <li>
                <Link to='/' className={`text-[${Props.Data}]`}>Home</Link>
              </li>

              <li>
                <Link to='/Search' className={`text-[${Props.Color}]`}>Search</Link>
              </li>

              <li>
                <Link to='/Hotel' className={`text-[${Props.Color1}]`}>Hotel</Link>
              </li>
              <li>
                Offers
              </li>
            </ul>
            <IoReorderThreeOutline onClick={() => setshow(true)} className='text-3xl relative xl:hidden' />

            <div className='flex gap-5 items-center'>
              <IoNotificationsOutline className=' text-3xl' />
              <img src="/Image/profile picture@1x.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      {
        show === true && (
          <div className=' inset-0 h-screen fixed flex justify-center items-center duration-1000 bg-white/80 z-10 border'>
            <ul className='flex flex-col gap-20'>
              <li>
                <Link to='/' className={`text-[${Props.Data}]`}>Home</Link>
              </li>

              <li>
                <Link to='/Search' className={`text-[${Props.Color}]`}>Search</Link>
              </li>

              <li>
                <Link to='/Hotel' className={`text-[${Props.Color1}]`}>Hotel</Link>
              </li>
              <li>
                Offers
              </li>
              <li className=' p-2 bg-red-500 text-white rounded-md' onClick={() => setshow(false)}>
                Close
              </li>
            </ul>
          </div>
        )
      }
    </>
  )
}

export default Header
