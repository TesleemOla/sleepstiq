import { StarFilledIcon } from '@radix-ui/react-icons'
import React from 'react'
import CardWrapper from './CardWrapper'
interface cardProps {
    review: string,
    name: string
}
const Card = ({ review, name}:cardProps) => {
  return (
      <CardWrapper className="h-40 sm:h-48 lg:h-48 w-60 sm:w-2/5 lg:w-1/5 sm:mt-4 p-4">
          <p className="font-thin italic text-sm">
              {review}
          </p>
          <p className="text-lg font-bold">
              {name}
          </p>
          <span className="inline-flex">
            <StarFilledIcon className="text-green-400"/>
              <StarFilledIcon className="text-green-400"/>
              <StarFilledIcon className="text-green-400"/>
              <StarFilledIcon className="text-green-400"/>
              <StarFilledIcon className="text-green-400"/>

          </span>
      </CardWrapper>
  )
}

export default Card