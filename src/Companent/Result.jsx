import React from 'react'

export default function Result() {
    return (
        <>
            <div className=' xl:px-24 lg:px-16 px-14 pb-24 pt-24'>
                <div className=' grid lg:grid-cols-4  grid-cols-1'>
                    <div className='  space-y-5'>
                        <div className=' pb-4'>
                            <h2>10 out of 177 Results</h2>
                        </div>

                        <h2>Stops</h2>
                        <div className=' flex gap-3'>
                            <input type="checkbox" />
                            <p>1 Stop</p>
                        </div>
                        <div className=' flex gap-3'>
                            <input type="checkbox" />
                            <p>1 Stop</p>
                        </div>
                        <h2>Booking Options</h2>
                        <div className=' flex gap-3'>
                            <input type="checkbox" />
                            <p>Book on Fickleflight</p>
                        </div>
                        <div className=' flex gap-3'>
                            <input type="checkbox" />
                            <p>Official Airline Websites</p>
                        </div>
                        <h2>Flight Experience</h2>
                        <div className=' flex gap-3'>
                            <input type="checkbox" />
                            <p>No overnight flights</p>
                        </div>
                        <div className=' flex gap-3'>
                            <input type="checkbox" />
                            <p>No long stop-overs</p>
                        </div>
                        <h2>Airlines</h2>
                        <div className=' flex gap-3'>
                            <input type="checkbox" />
                            <p>Singapore Airlines</p>
                        </div>
                        <div className=' flex gap-3'>
                            <input type="checkbox" />
                            <p>Qatar Airways</p>
                        </div>
                    </div>
                    <div className='  col-span-2  space-y-3'>
                        <div className=' pb-4'>
                            <h2 className=' text-gray-400'>10 out of 177 Results</h2>
                        </div>
                        <div className=' border p-2 lg:flex  items-center  gap-7'>
                            <div className='  flex items-center justify-center lg:justify-start gap-2'>
                                <img src="/Image/japan.svg" alt="" />
                                <p className=' text-base font-normal leading-4 text-gray-400'>Turkish Airlines</p>
                            </div>
                            <div className=' px-4 '>
                                <div className=' flex justify-between gap-7 items-center pb-5'>
                                    <p className='  font-medium text-lg leading-6 text-blue-600  '>11:35 PM</p>
                                    <div className=' hidden  sm:flex items-center '>
                                        <img src="/Image/FlightIcon.svg" alt="" />

                                    </div>
                                    <p className='  font-medium text-lg leading-6 text-blue-600  '>4:45 PM</p>

                                </div>
                                <div className=' flex  items-center justify-between'>
                                    <p className=' text-base font-normal text-gray-400'> Sin</p>
                                    <p className='  font-normal   text-base text-gray-400'>33H 10M, 1-stop</p>
                                    <p className=' text-base font-normal text-gray-400'>Lax</p>
                                </div>

                            </div>
                            <div className=' flex items-center justify-center lg:justify-start'>
                                <h2 className=' text-yellow-300 font-bold  text-2xl'>S$ 723</h2>
                            </div>
                        </div>
                        <div className=' border p-2 lg:flex items-center  gap-7'>
                            <div className='  flex items-center justify-center lg:justify-start gap-2'>
                                <img src="/Image/turkish.svg" alt="" />
                                <p className=' text-base font-normal leading-4 text-gray-400'>Turkish Airlines</p>
                            </div>
                            <div className='  px-4 '>
                                <div className=' flex justify-between gap-7 items-center pb-5'>
                                    <p className='  font-medium text-lg leading-6 text-blue-600  '>11:35 PM</p>
                                    <div className=' hidden  sm:flex items-center '>
                                        <img src="/Image/FlightIcon.svg" alt="" />

                                    </div>
                                    <p className='  font-medium text-lg leading-6 text-blue-600  '>4:45 PM</p>

                                </div>
                                <div className=' flex  items-center justify-between'>
                                    <p className=' text-base font-normal text-gray-400'> Sin</p>
                                    <p className='  font-normal   text-base text-gray-400'>33H 10M, 1-stop</p>
                                    <p className=' text-base font-normal text-gray-400'>Lax</p>
                                </div>

                            </div>
                            <div className=' flex items-center justify-center lg:justify-start' >
                                <h2 className=' text-yellow-300 font-bold  text-2xl'>S$ 723</h2>
                            </div>
                        </div>
                        <div className='border p-2 lg:flex items-center  gap-7'>
                            <div className='  flex items-center justify-center lg:justify-start gap-2'>
                                <img src="/Image/american-airlines.svg" alt="" />
                                <p className=' text-base font-normal leading-4 text-gray-400'>Turkish Airlines</p>
                            </div>
                            <div className='  px-4 '>
                                <div className=' flex justify-between gap-7 items-center pb-5'>
                                    <p className='  font-medium text-lg leading-6 text-blue-600  '>11:35 PM</p>
                                    <div className=' hidden  sm:flex items-center '>
                                        <img src="/Image/FlightIcon.svg" alt="" />

                                    </div>
                                    <p className='  font-medium text-lg leading-6 text-blue-600  '>4:45 PM</p>

                                </div>
                                <div className=' flex  items-center justify-between'>
                                    <p className=' text-base font-normal text-gray-400'> Sin</p>
                                    <p className='  font-normal   text-base text-gray-400'>33H 10M, 1-stop</p>
                                    <p className=' text-base font-normal text-gray-400'>Lax</p>
                                </div>

                            </div>
                            <div className=' flex items-center justify-center lg:justify-start'>
                                <h2 className=' text-yellow-300 font-bold  text-2xl'>S$ 723</h2>
                            </div>
                        </div>
                        <div className='border p-2 lg:flex items-center  gap-7'>
                            <div className='  flex items-center justify-center lg:justify-start gap-2'>
                                <img src="/Image/ANA.svg" alt="" />
                                <p className=' text-base font-normal leading-4 text-gray-400'>Turkish Airlines</p>
                            </div>
                            <div className='  px-4 '>
                                <div className=' flex justify-between gap-7 items-center pb-5'>
                                    <p className='  font-medium text-lg leading-6 text-blue-600  '>11:35 PM</p>
                                    <div className=' hidden  sm:flex items-center '>
                                        <img src="/Image/FlightIcon.svg" alt="" />

                                    </div>
                                    <p className='  font-medium text-lg leading-6 text-blue-600  '>4:45 PM</p>

                                </div>
                                <div className=' flex  items-center justify-between'>
                                    <p className=' text-base font-normal text-gray-400'> Sin</p>
                                    <p className='  font-normal   text-base text-gray-400'>33H 10M, 1-stop</p>
                                    <p className=' text-base font-normal text-gray-400'>Lax</p>
                                </div>

                            </div>
                            <div className=' flex items-center justify-center lg:justify-start'>
                                <h2 className=' text-yellow-300 font-bold  text-2xl'>S$ 723</h2>
                            </div>
                        </div>
                        <div className='border p-2 lg:flex items-center  gap-7'>
                            <div className='  flex items-center justify-center lg:justify-start gap-2'>
                                <img src="/Image/japan.svg" alt="" />
                                <p className=' text-base font-normal leading-4 text-gray-400'>Turkish Airlines</p>
                            </div>
                            <div className=' px-4 '>
                                <div className=' flex justify-between gap-7 items-center pb-5'>
                                    <p className='  font-medium text-lg leading-6 text-blue-600  '>11:35 PM</p>
                                    <div className=' hidden  sm:flex items-center '>
                                        <img src="/Image/FlightIcon.svg" alt="" />

                                    </div>
                                    <p className='  font-medium text-lg leading-6 text-blue-600  '>4:45 PM</p>

                                </div>
                                <div className=' flex  items-center justify-between'>
                                    <p className=' text-base font-normal text-gray-400'> Sin</p>
                                    <p className='  font-normal   text-base text-gray-400'>33H 10M, 1-stop</p>
                                    <p className=' text-base font-normal text-gray-400'>Lax</p>
                                </div>

                            </div>
                            <div className=' flex items-center justify-center lg:justify-start'>
                                <h2 className=' text-yellow-300 font-bold  text-2xl'>S$ 723</h2>
                            </div>
                        </div>
                        <div className='border p-2 lg:flex items-center  gap-7'>
                            <div className='  flex items-center justify-center lg:justify-start gap-2'>
                                <img src="/Image/SIA.svg" alt="" />
                                <p className=' text-base font-normal leading-4 text-gray-400'>Turkish Airlines</p>
                            </div>
                            <div className=' px-4 '>
                                <div className=' flex justify-between gap-7 items-center pb-5'>
                                    <p className='  font-medium text-lg leading-6 text-blue-600  '>11:35 PM</p>
                                    <div className=' hidden  sm:flex items-center '>
                                        <img src="/Image/FlightIcon.svg" alt="" />

                                    </div>
                                    <p className='  font-medium text-lg leading-6 text-blue-600  '>4:45 PM</p>

                                </div>
                                <div className=' flex  items-center justify-between'>
                                    <p className=' text-base font-normal text-gray-400'> Sin</p>
                                    <p className='  font-normal   text-base text-gray-400'>33H 10M, 1-stop</p>
                                    <p className=' text-base font-normal text-gray-400'>Lax</p>
                                </div>

                            </div>
                            <div className=' flex items-center justify-center lg:justify-start'>
                                <h2 className=' text-yellow-300 font-bold  text-2xl'>S$ 723</h2>
                            </div>
                        </div>
                        <div className='border p-2 lg:flex items-center  gap-7'>
                            <div className='  flex items-center justify-center lg:justify-start gap-2'>
                                <img src="/Image/turkish (1).svg" alt="" />
                                <p className=' text-base font-normal leading-4 text-gray-400'>Turkish Airlines</p>
                            </div>
                            <div className=' px-4 '>
                                <div className=' flex justify-between gap-7 items-center pb-5'>
                                    <p className='  font-medium text-lg leading-6 text-blue-600  '>11:35 PM</p>
                                    <div className=' hidden  sm:flex items-center '>
                                        <img src="/Image/FlightIcon.svg" alt="" />

                                    </div>
                                    <p className='  font-medium text-lg leading-6 text-blue-600  '>4:45 PM</p>

                                </div>
                                <div className=' flex  items-center justify-between'>
                                    <p className=' text-base font-normal text-gray-400'> Sin</p>
                                    <p className='  font-normal   text-base text-gray-400'>33H 10M, 1-stop</p>
                                    <p className=' text-base font-normal text-gray-400'>Lax</p>
                                </div>

                            </div>
                            <div className=' flex items-center justify-center lg:justify-start'>
                                <h2 className=' text-yellow-300 font-bold  text-2xl'>S$ 723</h2>
                            </div>
                        </div>
                    </div>

                    <div className=' space-y-2 ml-2'>
                        <div className=' pb-4'>
                            <h2>RECENTLY BOOKED</h2>
                        </div>

                        <div className='border px-2 space-y-3'>
                            <div className=' flex justify-between'>
                                <div className=' flex items-center gap-2'>
                                    <img src="/Image/turkish.svg" alt="" />
                                    <p className=' text-[12px] font-normal  text-gray-400'>Singapore Airlines</p>
                                </div>
                                <div>
                                    <h2 className=' font-semibold text-base text-black'>$1128</h2>
                                </div>
                            </div>
                            <div className=' bg-blue-100 pt-1 pb-1 px-4 '>
                                <div className=' flex justify-between items-center pb-2'>
                                    <p className='  font-bold text-blue-600  leading-7'>Sin</p>
                                    <div className=' hidden  sm:flex items-center '>
                                    <img src="/Image/FlightIcon.svg" alt="" />

                                    </div>
                                    <p className='  font-bold text-blue-600  leading-7'>Lax</p>

                                </div>
                                <div className=' flex  items-center justify-between'>
                                    <p className=' text-[12px] text-gray-400 font-normal   leading-6'>Singapore</p>
                                    <p className=' text-[12px] font-normal  text-gray-400  leading-6'>Los Angeles</p>

                                </div>

                            </div>
                            <div className=' flex justify-between'>
                                <div className=' flex gap-2'>
                                    <img src="/Image/lucide_users.svg" alt="" />
                                    <p className=' text-[12px] font-normal  text-gray-400'>Economy</p>
                                </div>
                                <div className=' flex gap-2'>
                                    <img src="/Image/Class icon.svg" alt="" />
                                    <p className=' text-[12px] font-normal  text-gray-400'>2 Adults</p>
                                </div>
                            </div>
                            <div className=' flex justify-between'>
                                <p className=' text-[12px] font-normal  text-gray-400'>Booked on Expedia</p>
                                <h2 className=' text-[12px]   text-yellow-400 font-bold'>1s ago!</h2>
                            </div>

                        </div>

                        <div className=' border px-2 space-y-3'>
                            <div className=' flex justify-between'>
                                <div className=' flex items-center gap-2'>
                                    <img src="/Image/turkish.svg" alt="" />
                                    <p className=' text-[12px] font-normal  text-gray-400'>Singapore Airlines</p>
                                </div>
                                <div>
                                    <h2 className=' font-semibold text-base text-black'>$1128</h2>
                                </div>
                            </div>
                            <div className=' bg-blue-100 pt-1 pb-1 px-4 '>
                                <div className=' flex justify-between items-center pb-2'>
                                    <p className='  font-bold text-blue-600  leading-7'>Sin</p>
                                    <div className=' hidden  sm:flex items-center '>
                                    <img src="/Image/FlightIcon.svg" alt="" />

                                    </div>
                                    <p className='  font-bold text-blue-600  leading-7'>Lax</p>

                                </div>
                                <div className=' flex  items-center justify-between'>
                                    <p className=' text-[12px] text-gray-400 font-normal   leading-6'>Singapore</p>
                                    <p className=' text-[12px] font-normal  text-gray-400  leading-6'>Los Angeles</p>

                                </div>

                            </div>
                            <div className=' flex justify-between'>
                                <div className=' flex gap-2'>
                                <img src="/Image/lucide_users.svg" alt="" />
                                    <p className=' text-[12px] font-normal  text-gray-400'>Economy</p>
                                </div>
                                <div className=' flex gap-2'>
                                <img src="/Image/Class icon.svg" alt="" />
                                    <p className=' text-[12px] font-normal  text-gray-400'>2 Adults</p>
                                </div>
                            </div>
                            <div className=' flex justify-between'>
                                <p className=' text-[12px] font-normal  text-gray-400'>Booked on Expedia</p>
                                <h2 className=' text-[12px]   text-yellow-400 font-bold'>1s ago!</h2>
                            </div>

                        </div>

                        <div className=' border px-2 space-y-3'>
                            <div className=' flex justify-between'>
                                <div className=' flex items-center gap-2'>
                                    <img src="/Image/turkish.svg" alt="" />
                                    <p className=' text-[12px] font-normal  text-gray-400'>Singapore Airlines</p>
                                </div>
                                <div>
                                    <h2 className=' font-semibold text-base text-black'>$1128</h2>
                                </div>
                            </div>
                            <div className=' bg-blue-100 pt-1 pb-1 px-4 '>
                                <div className=' flex justify-between items-center pb-2'>
                                    <p className='  font-bold text-blue-600  leading-7'>Sin</p>
                                    <div className=' hidden  sm:flex items-center '>
                                    <img src="/Image/FlightIcon.svg" alt="" />

                                    </div>
                                    <p className='  font-bold text-blue-600  leading-7'>Lax</p>

                                </div>
                                <div className=' flex  items-center justify-between'>
                                    <p className=' text-[12px] text-gray-400 font-normal   leading-6'>Singapore</p>
                                    <p className=' text-[12px] font-normal  text-gray-400  leading-6'>Los Angeles</p>

                                </div>

                            </div>
                            <div className=' flex justify-between'>
                                <div className=' flex gap-2'>
                                <img src="/Image/lucide_users.svg" alt="" />
                                    <p className=' text-[12px] font-normal  text-gray-400'>Economy</p>
                                </div>
                                <div className=' flex gap-2'>
                                <img src="/Image/Class icon.svg" alt="" />
                                    <p className=' text-[12px] font-normal  text-gray-400'>2 Adults</p>
                                </div>
                            </div>
                            <div className=' flex justify-between'>
                                <p className=' text-[12px] font-normal  text-gray-400'>Booked on Expedia</p>
                                <h2 className=' text-[12px]   text-yellow-400 font-bold'>1s ago!</h2>
                            </div>

                        </div>

                    </div>



                </div>
            </div>
        </>
    )
}