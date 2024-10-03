import { Relax } from '@/components/icons'
import { Reviews } from '@/components/ui'
import ShopNow from '@/components/ui/shopNow'
import React from 'react'

const page = () => {
  return (
    <>
          <div className="bg-about-img bg-cover h-full p-5 md:p-40 w-full my-2">
          <p className="h-3/4 text-primary space-y-4  ">{"We're here to help you" }
          <span className="scale-50 md:scale-100">

            <Relax className="hidden md:block"/>
            <span className="text-primary font-extrabold text-lg block md:hidden ">Relax & Rest</span>
          </span>
          </p>
          
          </div>
          <ShopNow/>
          <Reviews />
    </>
  )
}

export default page