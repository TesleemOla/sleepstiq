"use client"
import { CheckboxIcon } from '@radix-ui/react-icons'
import { SmilePlus } from 'lucide-react'
import React from 'react'
import { useInView } from 'react-intersection-observer'

const PromoteBox = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5
  })
  
  return (
      <div className={`text-primary font-thin text-xs text-left my-2 transition-[margin] duration-2000 ease-in-out ${inView? "my-2": "-my-96"}`} ref={ref}>
          <p>
              <SmilePlus className="text-yellow-400 inline" />
              Promotes calm and relaxation.
            </p>
              <p>💤  Inhalation allows for a rapid effect.</p>
              <p><CheckboxIcon className="bg-green-600 text-white inline" />
              100% drug-free, plant-based ingredients.</p>
              <p>‍⚕️  3rd-party lab tested.</p>
         
    </div>
  )
}

export default PromoteBox