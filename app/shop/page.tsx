import { Relax } from '@/components/icons'
import React from 'react'

const page = () => {
  return (
    <>
          <div className="bg-about-img bg-cover h-full p-40 w-full">
          <p className="h-3/4 text-primary space-y-4  ">{"We're here to help you" }
          <span className="scale-50 md:scale-100">

            <Relax className="hidden md:block"/>
            <span className="text-primary font-extrabold text-lg md:hidden ">Relax & Rest</span>
          </span>
          </p>
          {/* <span className="text-5xl font-extrabold block">Relax & Rest</span></p> */}
    </div>
    </>
  )
}

export default page