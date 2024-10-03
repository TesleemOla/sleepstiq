import { CheckboxIcon } from '@radix-ui/react-icons'
import { SmilePlus } from 'lucide-react'
import React from 'react'

const PromoteBox = () => {
  return (
      <div className="text-primary font-thin text-xs text-left my-2">
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