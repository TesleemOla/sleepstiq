"use client"
import { useInView } from "react-intersection-observer"

const ButtonRed = ({data, className}:{data:string, className?: string}) => {
 
  const { ref, inView} = useInView({
    triggerOnce: true,
    threshold: 0.5
  })

  return (
      <button className={`min-w-2/5 block md:w-1/6 bg-button text-white rounded-xl px-3 py-2 my-3 transition-opacity
      duration-2000 ease-in-out ${inView? "opacity-100": "opacity-0"}
      ${className}`} ref={ref}>
          {data}
      </button>

  )
}

export default ButtonRed


