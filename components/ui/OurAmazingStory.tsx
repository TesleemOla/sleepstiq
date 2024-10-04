
import React from 'react'
import CardWrapper from './CardWrapper'
import Image from 'next/image'
import { Arrowright } from '../icons'

const OurAmazingStory = () => {
  return (
    <div className="mt-10 sm:pl-40 flex flex-wrap-reverse mx-2 sm:mx-auto justify-center gap-5">
        <div className="py-4 sm:w-1/3">
            <p className='font-thin text-sm sm:text-xs'>Our Amazing story</p>
            <h3 className="text-4xl lg:text-6xl font-bold mt-5 mb-10"> 10k+ Happy Customers</h3>
            <p className="font-thin text-sm sm:text-xs">There’s no secret sauce, no wizard behind the curtain. 
                What makes Aerolab tick is an interdisciplinary team with a framework that fosters candid collaboration.</p>
              <span><Arrowright/>More About Us</span>
        </div>
        <CardWrapper className=" w-2/3 h-2/3 sm:w-1/3 sm:h-1/4">
            <p className="italic text-lg text-gray-700 p-4">
                  I’m a very anxious person but use this and feel so relaxed and sleep way better now with the aid of sleepstiq. 
            </p>
            <div className="flex gap-20 pb-10">
                <Image src="/images/avatar.jpg" width={50} height={50} alt="avatar" />
          <span className='flex flex-col'>
                  <span className="text-lg text-gray-700 font-extrabold">James Miller</span>
                    <span className="font-thin"> CEO, TechBias</span>
                </span>
            </div>
        </CardWrapper>
    </div>
  )
}

export default OurAmazingStory