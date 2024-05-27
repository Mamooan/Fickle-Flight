import React from 'react'

export default function Section2() {
    return (
        <>
            <section className=' p-16'>
                <div className=' grid grid-cols-1 gap-5 font-[Roboto]'>
                    <div className=''>
                        <h2 className=' py-3'>RECENT SEARCHES</h2>
                        <div className=' grid grid-cols-1 sm:grid-cols-2 gap-9 '>
                            <div className=' border grid grid-cols-1 p-4 gap-4 rounded-md'>
                                <div className=' flex justify-between items-center'>
                                    <h2 className=' text-xl text-[#1262AF]'>Sin</h2>
                                    <div className='flex justify-between gap-8 items-center relative'>
                                        <img src="/Image/Ellipse 18.svg" alt="" />
                                        <img src="/Image/ion_airplane.svg" alt="" />
                                        <img src="/Image/Ellipse 18.svg" alt="" />
                                        <div className=' absolute min-w-24 top-[45%] left-2 border-2 border-dotted border-black'></div>
                                    </div>
                                    <h2 className='text-[#1262AF] text-xl'>Lax</h2>
                                </div>
                                <div className='flex items-center justify-center text-xl'>Depart On: 7 Sep 2021</div>
                            </div>

                            <div className=' border grid grid-cols-1 p-4 gap-4 rounded-md'>
                                <div className=' flex justify-between items-center'>
                                    <h2 className='text-[#1262AF] text-xl'>My</h2>
                                    <div className='flex justify-between gap-8 items-center relative'>
                                        <img src="/Image/Ellipse 18.svg" alt="" />
                                        <img src="/Image/ion_airplane.svg" alt="" />
                                        <img src="/Image/Ellipse 18.svg" alt="" />
                                        <div className=' absolute min-w-24 top-[45%] left-2 border-2 border-dotted border-black'></div>
                                    </div>
                                    <h2 className='text-[#1262AF] text-xl'>Dub</h2>
                                </div>
                                <div className='flex items-center justify-center text-xl'>Depart On: 9 Sep 2021</div>
                            </div>
                        </div>
                    </div>

                    <div className=' flex flex-col justify-center'>
                        <h2 className='py-3 text-xl text-slate-400'>PREPARE FOR YOUR TRIP</h2>
                        <div className='flex justify-between flex-wrap items-center'>
                            <div className='flex flex-col justify-center items-center gap-2'>
                                <img src="/Image/Movies icon.svg" alt="" />
                                <h3>You Tube</h3>
                            </div>

                            <div className='flex flex-col justify-center items-center gap-2'>
                                <img src="/Image/Taxi Icon.svg" alt="" />
                                <h3>Hotel</h3>
                            </div>

                            <div className='flex flex-col justify-center items-center gap-2'>
                                <img src="/Image/Hotel Icon.svg" alt="" />
                                <h3>Hotel</h3>
                            </div>

                            <div className='flex flex-col justify-center items-center gap-2'>
                                <img src="/Image/Commute icon.svg" alt="" />
                                <h3>Hotel</h3>
                            </div>

                            <div className='flex flex-col justify-center items-center gap-2'>
                                <img src="/Image/Attractions Icon.svg" alt="" />
                                <h3>Hotel</h3>
                            </div>

                            <div className='flex flex-col justify-center items-center gap-2'>
                                <img src="/Image/Eats icon.svg" alt="" />
                                <h3>Hotel</h3>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}
