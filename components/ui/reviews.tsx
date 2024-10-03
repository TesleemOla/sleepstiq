
import React from 'react'
import Card from './Card'


const Reviews = () => {
    const reviewData =[
        {
            review: "Love it! I have trouble falling asleep and this knocked me right out. Will be buying more.",
            name: "John Matthews"
        },
        {
            review: "I work shift work. Swinging from days to nights is sometimes brutal for sleep. Thank you Sleepstiq",
            name: "Eunice Oliver"
        },
        {
            review: "It's a really good product and helps me sleep better at night.",
            name: "Laura Davies"
        },
        {
            review: "Helps me relax and sleep better at night. Stress levels definetely goes down.",
            name: "Jane Bocks"
        }
    ]
  return (
    <div className="bg-white mt-16 sm:mt-16 mb-5 flex flex-wrap justify-center">
          {reviewData.map((item, i)=><Card {...item} key={i} />)}
    </div>
  )
}

export default Reviews