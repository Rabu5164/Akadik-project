import React from 'react'
import Button from '../../components/Button'

const Experience = () => {
  return (
   <section className="section-container my-24 flex flex-col md:flex-row md:items-start md:gap-12">
  {/* Image */}
  <div className="md:w-1/2 mb-8 md:mb-0">
    <img 
      src="/images/Rectangle 1446.png" 
      alt="Our Experience" 
      className="w-full h-full object-cover rounded-lg"
    />
  </div>

  {/* Text */}
  <div className="md:w-1/2 flex flex-col justify-start">
    <h3 className="uppercase text-lg font-semibold text-primary mb-4">Experiences</h3>
    <h2 className="capitalize text-4xl font-bold mb-4 lg:w-1/2">We provide you the best experience</h2>
    <p className="text-gray-700">
      You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and luxurious style and with premium quality materials.
    </p>
    <Button text="More Info"/>
  </div>
</section>

  )
}

export default Experience
