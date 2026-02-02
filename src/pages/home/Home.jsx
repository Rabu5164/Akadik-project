import React from 'react'
import Hero from './Hero'
import WhyChoose from './WhyChoose'
import Product from '../shoppage/Product'
import Experience from './Experience'
import Material from './Material'
import Review from './Review'

const Home = () => {
  return (
    <div>
      <Hero/>
      <WhyChoose/>
      <Product headline="Best Selling Product"/>
      <Experience/>
      <Material/>
      <Review/>
    </div>
  )
}

export default Home
