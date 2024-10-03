import React from 'react'
import ButtonRed from './button'
import Link from 'next/link'

const VisitShop = () => {
  return (
    <div>
        <h2>Visit Our Shop</h2>
        <p>
              Our Personal Diffuser is an aromatherapy device that contains a blend of melatonin, lavender, and chamomile.
               A few breaths of our plant-based essential oil mist will mellow you out, quiet the mind, and lull you to bed.
        </p>
        <Link href="/shop">
            <ButtonRed data='Visit Shop'    />
        </Link>
        </div>
  )
}

export default VisitShop