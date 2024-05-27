import React from 'react'
import Card from '../Data'

function HotelSection() {
    return (
        <>
            <section className='px-16 py-12'>
                <div className='grid grid-cols-1 gap-5 font-[Roboto]'>
                    <div className='flex justify-between'>
                        <div>
                            <h2 className='text-lg'>200+ RESULTS</h2>
                        </div>
                        <div className='flex items-center gap-2'>
                            <h3 className='text-[#303030]'>Filters</h3>
                            <img src="/Image/filters.svg" alt="" />
                        </div>
                    </div>
                    <div className=' grid grid-cols-1 xl:grid-cols-2 gap-2'>
                        <div className='flex flex-col items-center gap-3'>
                            {Card.Hotel.map((ele, index) => (
                                <>
                                    <div className=' flex rounded-xl'>
                                        <img src={ele.img} className=' max-w-64' alt="" />
                                        <div className=' rounded-r-xl border bg-[#1263af2a] p-4'>
                                            <div className='flex justify-between items-start gap-1'>
                                                <h3 className=' text-slate-400'>{ele.h4}</h3>
                                                <img src={ele.video} alt="" />
                                            </div>
                                            <h2 className='text-2xl'>{ele.h2}</h2>
                                            <div className=' flex gap-1'>
                                                <img src={ele.img1} alt="" />
                                                <h4>{ele.h3}</h4>
                                            </div>
                                            <h2 className='mt-6'>{ele.he2}</h2>
                                            <div className='sm:min-w-[300px] w-[150px] flex justify-start'>
                                            <button className=' py-2 px-6 rounded-lg bg-[#1262AF] text-white border'>View Details</button>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ))}
                        </div>
                        <div className=' flex flex-col items-center'>
                            <img src="/Image/Image@1x.png" className=' w-[89%]' alt="" />
                            <div className=' flex justify-center items-center max-w-16 gap-2'>
                            <img src="/Image/Image@1x.png" className='w-10 border-2 rounded-xl border-blue-500' alt="" />
                            <img src="/Image/Results Image.png" className=' rounded-lg' alt="" />
                            <img src="/Image/Results Image (1).png" className=' rounded-lg' alt="" />
                            <img src="/Image/Results Image (2).png" className=' rounded-lg' alt="" />
                            <img src="/Image/Results Image (3).png" className=' rounded-lg' alt="" />

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}



export default HotelSection

