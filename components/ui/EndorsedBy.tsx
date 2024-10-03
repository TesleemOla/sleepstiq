import React from 'react'
import { BloomBerg, Forbes, Google, Influence, SleepReview } from '../icons'


const EndorsedBy = () => {
  return (

     
    <div className="relative sm:static sm:mt-20 w-screen overflow-hidden hover:overflow-auto h-20 sm:w-11/12 py-5">
      <div className=" bg-white shadow-lg absolute sm:right-0 sm:h-40 px-20 mt-1 sm:-mt-40 flex justify-around items-center gap-3 sm:gap-8">
        <Google />
        <Forbes />
        <BloomBerg />
        <SleepReview />
        <Influence />
        
    </div>
    </div>
      

  )
}

export default EndorsedBy

