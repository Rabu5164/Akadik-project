import React, { useState } from 'react';
import { products } from '../../utils/products';
import ProductCard from './ProductCard';
import { FaArrowRight } from "react-icons/fa";

const Product = ({ headline }) => {
  const categories = ["Chair", "Beds", "Sofa", "Lamp"];
  const [selectedCategory, setSelectedCategory] = useState("Chair");
  const [visibleProducts, setVisibleProducts] = useState(4);

  const filteredProducts = products.filter(
    (product) => product.category === selectedCategory
  );

  const loadMoreProducts = () => {
    setVisibleProducts((prev) => prev + 4);
  };

  return (
    <div className="section-container">
      <h2 className="text-4xl font-bold text-center my-8">{headline}</h2>

      {/* categories */}
      <div className="bg-[#EEEEEE] max-w-md mx-auto sm:rounded-full md:p-2.5 py-5 mb-16">
        <div className="flex flex-col sm:flex-row items-center md:justify-between justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setVisibleProducts(4); // reset visible products
              }}
              className={`py-1.5 sm:px-5 px-8 rounded-full hover:bg-primary hover:text-white transition-colors ${
                selectedCategory === category ? "bg-white text-primary" : "text-secondary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* products grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {filteredProducts.slice(0, visibleProducts).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* load more button */}
      {visibleProducts < filteredProducts.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={loadMoreProducts}
            className="flex items-center gap-2 px-6 py-3 border border-primary rounded-full text-primary font-semibold hover:bg-primary hover:text-white transition-colors"
          >
            View All
            <FaArrowRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default Product;
