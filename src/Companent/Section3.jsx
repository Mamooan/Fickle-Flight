import React from 'react'
import Card from '../Data'


export default function Section3() {
  return (
    <>

      <section className='px-16 py-12'>
        <div className='grid grid-cols-1 gap-5 font-[Roboto]'>
          <div className='flex justify-between flex-wrap'>
            <div>
              <h3 className='text-[#1262AE]'>PLAN YOUR NEXT TRIP</h3>
              <h2 className='text-2xl'>Most Popular Destinations</h2>
            </div>
            <div className='flex items-center gap-2'>
              <h3 className='text-[#1262AE]'>View all destinations</h3>
              <img src="/Image/arrow-right.svg" alt="" />
            </div>
          </div>
          <div className=' grid grid-cols-1 lg:grid-cols-4 gap-10'>
            {Card.Data.map((ele, index) => (
              <div
                key={index}
                className='text-white flex justify-between p-2 pb-28 rounded-xl'
                style={{
                  backgroundImage: `url(${ele.img})`,
                  backgroundSize: 'cover', // Adjust as needed
                }}
              >
                <h3>{ele.h3}</h3>
                <div className='flex flex-col justify-center items-end'>
                  <h4>{ele.h4}</h4>
                  <h2 className='text-3xl'>{ele.h2}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className='px-16 py-12'>
        <div className='grid grid-cols-1 gap-5 font-[Roboto]'>
          <div className='flex justify-between flex-wrap'>
            <div>
              <h2 className='text-2xl'>Recommended Holidays</h2>
            </div>
            <div className='flex items-center gap-2'>
              <h3 className='text-[#1262AE]'>View all Holidays</h3>
              <img src="/Image/arrow-right.svg" alt="" />
            </div>
          </div>
          <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'>
            {Card.Data1.map((ele, index) => (
              <>
                <div className=' flex flex-col'>
                  <img src={ele.img} className='rounded-t-xl' alt="" />
                  <div className=' border flex justify-between p-3 rounded-b-xl'>
                    <div className='flex flex-col items-start'>
                      <h3>{ele.h3}</h3>
                      <h4 className=' text-slate-400'>{ele.h4}</h4>
                    </div>
                    <h2 className='text-3xl'>{ele.h2}</h2>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>

      <section className='px-16 py-12'>
        <div className='grid grid-cols-1 gap-5 font-[Roboto]'>
          <div className='flex justify-between flex-wrap'>
            <div>
              <h2 className='text-2xl'>Popular Stays</h2>
            </div>
            <div className='flex items-center gap-2'>
              <h3 className='text-[#1262AE]'>View all Stays</h3>
              <img src="/Image/arrow-right.svg" alt="" />
            </div>
          </div>
          <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'>
            {Card.Data2.map((ele, index) => (
              <>
                <div className=' flex flex-col gap-5 p-3 border rounded-xl'>
                  <img src={ele.img} alt="" />
                  <div className=' rounded-b-xl'>
                    <div className='flex justify-between items-start'>
                      <h3 className=' text-slate-400'>{ele.h4}</h3>
                      <img src={ele.video} alt="" />
                    </div>
                    <h2 className='text-2xl'>{ele.h2}</h2>
                    <h4>{ele.h3}</h4>
                    <div className=' flex gap-1 my-2'>
                      <img src={ele.img1} alt="" />
                      <h2>{ele.he2}</h2>
                    </div>
                    <button className=' py-2 px-[88px] uppercase border'>more detail</button>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}