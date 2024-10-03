
import React from 'react'
import CardWrapper from './CardWrapper'
import Image from 'next/image'
import { Arrowright } from '../icons'

const OurAmazingStory = () => {
  return (
    <div className="mt-10">
        <div>
            <p>Our Amazing story</p>
            <h3> 10k+ Happy Customers</h3>
            <p>There’s no secret sauce, no wizard behind the curtain. 
                What makes Aerolab tick is an interdisciplinary team with a framework that fosters candid collaboration.</p>
              <span><Arrowright/>More About Us</span>
        </div>
        <CardWrapper className="">
            <p>
                  I’m a very anxious person but use this and feel so relaxed and sleep way better now with the aid of sleepstiq. 
            </p>
            <div>
                <Image src="/images/avatar.jpg" width={50} height={50} alt="avatar" />
                <span>
                    <span>James Miller</span>
                    <span> CEO, TechBias</span>
                </span>
            </div>
        </CardWrapper>
    </div>
  )
}

export default OurAmazingStory