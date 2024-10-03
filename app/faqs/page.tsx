import React from 'react'

const FaqPage = () => {
  return (
    <section className="sm:pl-40 text-primary my-5">

      <p className=" font-thin text-sm">{"We're"} here to help you</p>
      <h2 className="text-4xl font-extrabold">How can we assist?</h2>
      <div className="sm:flex gap-20 my-5">
          <ul>
            <li>Sleepstiq product</li>
            <li>Order</li>
            <li>Melantonin</li>
          </ul>
        <div>
          <ul className="flex flex-col gap-7">
            <li>Q1.How does it work?
              
            </li>
            <li>Q2. Why inhale melantonine?</li>
            <li>Q3. How much melantonine is there per inhale?</li>
            <li>Q4. Is is a cigarette or tobacco product?</li>
            <li>Q5. {"What's"} in it?</li>
            <li>Q6. {"What's not in it?"}</li>
            <li>Q7. How long does it last?</li>
            <li>Q8. How do you know it has run out or died?</li>
          </ul>
        </div>
        
      </div>
    </section>
  )
}

export default FaqPage