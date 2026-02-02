import React from 'react';
import getImageUrl from "../../utils/getImageUrl";
 
import Rating from '../../components/Rating';
import { FiPlus } from "react-icons/fi";


const ProductCard = ({ product }) => {
  return (
      <div>
          <div className='bg-[#FAFAFA]'>
     <img src={getImageUrl(product.image)} alt={product.name} />

      
      
    </div>
    <div className='p-6 bg-white dark:bg-black shadow-sm'>
      <h4 className='text-base mb-1 '>{product.category}</h4>
      <h3 className='font-semibold text-xl mb-2'>{product.name}</h3>
      <Rating rating={product.rating} />

     
     
      <div className="flex items-center justify-between mt-2">
        <p className='text-secondary dark:text-white font-bold text-lg'><sup>$</sup> <span>{product.price}</span></p>
        <button className='bg-secondary text-white p-2 rounded-full   '><FiPlus /></button>
      </div>
    </div>
      </div>
  )
}

export default ProductCard;
