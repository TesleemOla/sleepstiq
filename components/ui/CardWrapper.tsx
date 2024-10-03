import React, { PropsWithChildren } from 'react'

interface cardProps{
    className: string;
}
const CardWrapper = ({className, children}: PropsWithChildren<cardProps>) => {
  return (
    <div className={`bg-card flex flex-col justify-between  shadow-2xl shadow-card-foreground rounded-xl mx-auto mt-2
    ${className}`}>
        {children}
    </div>
  )
}

export default CardWrapper