import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const Button = ({text}) => {
  return (
    <div>
       <button className='text-sm text-primary flex items-center gap-1'>
                    {text}
                    <FaArrowRight />

                </button>
    </div>
  )
}

export default Button
