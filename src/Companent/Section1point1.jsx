import React from 'react'

function Section1point1() {
    return (
        <>
            <div className=' grid grid-cols-1 ' >
                <div className='flex justify-start items-start font-[Roboto] relative bg-blue-600 overflow-hidden'>
                    <img src="/Image/Banner  Background.png" className=' absolute top-1 h-[100%] w-[100%] md:h-[150%]' alt="" />
                    <div className='flex flex-col justify-start items-start px-24 pt-10 pb-10 gap-2'>
                        <h1 className=' text-white text-6xl'>Where are you off too?</h1>
                        <div className='grid grid-cols-1 rounded-md'>
                            <div className=' flex gap-3'>
                                <button className=' bg-white rounded-3xl p-2 px-4 text-blue-500'>Recommended</button>
                                <button className='rounded-3xl p-2 px-4 border text-white border-white'>Price</button>
                                <button className='rounded-3xl p-2 px-4 border text-white border-white'>Rating</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section1point1
