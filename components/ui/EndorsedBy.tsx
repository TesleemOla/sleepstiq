import React from 'react'
import { BloomBerg, Forbes, Google, Influence, SleepReview } from '../icons'


const EndorsedBy = () => {
  return (
    <div className="h-40 md:w-5/6 bg-white shadow-lg relative right-0 bottom-10 flex justify-center items-center gap-30 overflow-x-visible">
          <Google />
          <Forbes />
        <BloomBerg />
        <SleepReview />
        <Influence />
        
    </div>
  )
}

export default EndorsedBy

// style = "mix-blend-mode:multiply"