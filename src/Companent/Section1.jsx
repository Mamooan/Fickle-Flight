import React from 'react'

function Section1() {
    return (
        <>
            <div className=' grid grid-cols-1 ' >
                <div className='flex justify-center items-center font-[Roboto] relative bg-blue-600 overflow-hidden'>
                    <img src="/Image/Banner  Background.png" className=' absolute top-1 h-[100%] w-[100%] ' alt="" />
                    <div className='flex flex-col justify-start items-start pt-5 pb-5 md:pt-10 md:pb-10 xl:pt-20 xl:pb-20'>
                        <h1 className=' text-white text-6xl'>Where are you off too?</h1>
                        <div className='bg-white grid grid-cols-1 mt-5 rounded-md p-3'>
                            <div className=' flex p-3 gap-2 flex-wrap relative'>
                                <div className='relative'>
                                    <label htmlFor="" className=' text-xs bg-white p-0 absolute -top-2 left-5 '>Departure</label>
                                    <input type="text" placeholder='Singapore(SIN)' className=' text-xl p-2 px-16 border border-black' />
                                </div>
                                <div className='relative'>
                                    <label htmlFor="" className=' text-xs bg-white p-0 absolute -top-2 left-5 '>Departure</label>
                                    <input type="text" placeholder='Singapore(SIN)' className=' text-xl p-2 px-16 border border-black' />
                                </div>
                                <div className='relative'>
                                    <label htmlFor="" className=' text-xs bg-white p-0 absolute -top-2 left-5 '>Departure</label>
                                    <input type="text" placeholder='Singapore(SIN)' className=' text-xl p-2 px-16 border border-black' />
                                </div>
                                <button className=' p-2 bg-[#F99A0E] flex justify-center items-center text-white'>SEARCH FLIGHTS</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section1
