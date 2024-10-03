import Image from 'next/image'
import React from 'react'

const OurMission = () => {
  return (
    <div>
        <h2>Our Mission</h2>
        <p>
            We started Sleepstiq with 1 simple goal: to be your best friend at bedtime.
            We, just like you, deal with stress, unease, and trouble sleeping from a number of silly things like school,
            work, screens, numbers, and people.
            {"That's"} why we created products that aim to - 
        </p>
        <ul>
              <li>Promote Calm</li>
              <li>Support Sleep</li>
              <li>Reduce Stress</li>
              <li>Aid Relaxation</li>

        </ul>
        <Image src="/images/woman.jpg" width={600} height={700} alt="satisfied customer" />
        </div>
  )
}

export default OurMission