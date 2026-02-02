import React from 'react'
import Button from '../../components/Button'

const Material = () => {
  return (
    <div>
      <section className="section-container my-24 flex flex-col md:flex-row md:items-start md:gap-12">


  {/* Text */}
  <div className="md:w-1/2 flex flex-col justify-start">
    <h3 className="uppercase text-lg font-semibold text-primary mb-4">Materials</h3>
    <h2 className="capitalize text-4xl font-bold mb-4 lg:w-1/2">Very serious materials for making furniture</h2>
    <p className="text-secondary dark:text-white mb-5 lg:w-1/2">
     Because Akadik Furniture & Artfly was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price
    </p>
    <Button text="More Info"/>
  </div>

    {/* Image */}
  <div className="md:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-4 items-end">
  
  {/* left stacked images */}
  <div className="flex flex-col gap-4">
    <img 
      src="/images/material.png" 
      alt="Material 1"
      className="w-full rounded-2xl object-cover shadow-sm"
    />
    <img 
      src="/images/material1.png" 
      alt="Material 2"
      className="w-full rounded-2xl object-cover shadow-sm"
    />
  </div>

  {/* right big image */}
  <div className="col-span-1 md:col-span-2">
    <img 
      src="/images/material2.png" 
      alt="Material 3"
      className="w-full h-[300px] md:h-[541px] rounded-2xl object-cover shadow-md"
    />
  </div>

</div>

</section>

    </div>
  )
}

export default Material
