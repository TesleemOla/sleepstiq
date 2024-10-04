"use client"
import React, { PropsWithChildren } from 'react'
import { useInView } from 'react-intersection-observer';

interface cardProps{
    className: string;
}
const CardWrapper = ({className, children}: PropsWithChildren<cardProps>) => {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5
  })

  return (
    <div className={`bg-card flex flex-col justify-between  shadow-2xl shadow-card-foreground 
       ${inView ? `opacity-100` : `opacity-0`} rounded-xl mx-auto mt-2 transition-opacity duration-2000 ease-in
    ${className}`} ref={ref}>
        {children}
    </div>
  )
}

export default CardWrapper