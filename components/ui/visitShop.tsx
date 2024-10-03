import React from 'react'
import ButtonRed from './button'
import Link from 'next/link'

const VisitShop = () => {
  return (
    <div className='text-primary text-center my-5'>
        <h2 className="text-4xl text-center font-extrabold my-2">Visit Our Shop</h2>
        <p className="text-center font-thin text-sm sm:text-xs w-1/2 mx-auto">
              Our Personal Diffuser is an aromatherapy device that contains a blend of melatonin, lavender, and chamomile.
               A few breaths of our plant-based essential oil mist will mellow you out, quiet the mind, and lull you to bed.
        </p>
        <Link href="/shop" >
       
            <ButtonRed data='Visit Shop' className='text-center mx-auto'/>
        </Link>
        </div>
  )
}

export default VisitShop