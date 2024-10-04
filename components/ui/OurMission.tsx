import Image from 'next/image'
import React from 'react'
import { CheckBox } from '../icons'

const OurMission = () => {
  return (
    <section className="text-primary flex flex-wrap justify-between items-center pl-5 sm:pl-40">
        <div className="w-2/3 sm:w-1/3">
        <h2 className="text-3xl font-extrabold">Our Mission</h2>
        <p className="font-thin text-sm sm:text-xs my-2">
            We started Sleepstiq with 1 simple goal: to be your best friend at bedtime.
            We, just like you, deal with stress, unease, and trouble sleeping from a number of silly things like school,
            work, screens, numbers, and people.
            {"That's"} why we created products that aim to - 
        </p>
        <ul className="font-thin text-sm sm:text-xs">
              <li className="flex gap-5"><CheckBox />Promote Calm</li>
              <li className="flex gap-5"><CheckBox />Support Sleep</li>
              <li className="flex gap-5"><CheckBox />Reduce Stress</li>
              <li className="flex gap-5"><CheckBox />Aid Relaxation</li>

        </ul>
        </div>
        <Image src="/images/woman.jpg" width={600} height={700} alt="satisfied customer" 
        className="w-2/3 sm:w-1/2 self-end"/>
        </section>
  )
}

export default OurMission