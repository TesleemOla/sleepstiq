import React from 'react'
import CardWrapper from './CardWrapper'
import Image from 'next/image'
import { StarFilledIcon } from '@radix-ui/react-icons'

const ProductReviews = () => {
    const products = [
        {
            image: "/images/product1.jpg",
            review: "Works great. No problem. Just use it and then relax. I fall asleep everytime I use it.",
            reviewer: "Rachael Dill"
        },
        {
            image: "/images/product2.jpg",
            review: "It really helps me fall right to sleep compared to melantonine pills.",
            reviewer: "Javier Mendez"
        },
          {
            image: "/images/product1.jpg",
            review: "I've tried a lot of things to sleep but none of those worked, so I tried Cloudy and wow! I sleep like a baby now.",
            reviewer: "Naomi Uwazurike"
        },
        {
            image: "/images/product2.jpg",
            review: "I have been falling asleep faster and sleeping thru the night.",
            reviewer: "Nate Jacobs"
        }
    ]
  return (
    <div className="my-5 text-gray-700 px-10 sm:pl-40">
        <h2 className="text-primary font-extrabold text-xl">Product Reviews</h2>
        <div className="flex flex-wrap justify-center items-center my-3">
        {
            products.map(({reviewer, image, review})=> {
                return (<CardWrapper className="relative w-2/3 sm:w-1/6 h-3/4 sm:h-72 flex flex-col justify-between items-center gap-3 my-5" key={image}>
                    <Image src={image} alt="product image" width={300} height={50} className='rounded-xl'/>
                    <div className="mt-1">
                        <p className="text-sm sm:text-xs font-thin w-4/5 text-center mx-auto">{review}</p>
                        <p className="text-lg font-bold text-center">{reviewer}</p>
                    </div>
                    <span className="flex scale-50">
                        <StarFilledIcon className="text-green-400" />
                        <StarFilledIcon className="text-green-400" />
                        <StarFilledIcon className="text-green-400" />
                        <StarFilledIcon className="text-green-400" />
                        <StarFilledIcon className="text-green-400" />
                    </span>
                </CardWrapper>)
            })
        }
          </div>
    </div>
  )
}

export default ProductReviews