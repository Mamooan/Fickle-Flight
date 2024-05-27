import React from 'react'

export default function Section() {
    return (
        <>
            <div className=' grid grid-cols-1 ' >
                <div className='flex justify-center items-center font-[Roboto] relative bg-blue-500'>
                    <img src="/Image/Banner  Background.png" className=' absolute top-1 h-[100%] w-[100%]' alt="" />
                    <div className='flex flex-col justify-center items-center xl:pt-52 xl:pb-52 md:pt-4- md:pb-40 pt-32 pb-32 '>
                        <h1 className=' text-white text-6xl'>Let’s explore & travel the world</h1>
                        <p className=' text-white'>Find the best destinations and the most popular stays!</p>
                        <div className='bg-white grid grid-cols-1 mt-5 rounded-md'>
                            <div className='  flex justify-between items-center sm:gap-64'>
                                <h2 className='pl-4'>SEARCH FLIGHTS</h2>
                                <div className='p-5 flex gap-5'>
                                    <div className=' flex gap-1'>
                                        <input type='checkbox' />
                                        <label htmlFor="">Return</label>
                                    </div>
                                    <div className=' flex gap-1'>
                                        <input type='checkbox' />
                                        <label htmlFor="">One-way</label>
                                    </div>
                                </div>
                            </div>
                            <div className=' flex p-3 flex-wrap gap-2 relative'>
                                <div className='relative'>
                                    <label htmlFor="" className=' text-xs bg-white p-0 absolute -top-2 left-5 '>Departure</label>
                                    <input type="text" placeholder='Singapore(SIN)' className=' text-xl p-2 px-7 border border-black' />
                                </div>
                                <div className='relative'>
                                    <label htmlFor="" className=' text-xs bg-white p-0 absolute -top-2 left-5 '>Departure</label>
                                    <input type="text" placeholder='Singapore(SIN)' className=' text-xl p-2 px-7 border border-black' />
                                </div>
                                <div className='relative'>
                                    <label htmlFor="" className=' text-xs bg-white p-0 absolute -top-2 left-5 '>Departure</label>
                                    <input type="text" placeholder='Singapore(SIN)' className=' text-xl p-2 px-7 border border-black' />
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
