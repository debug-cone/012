import React from 'react'
import { useEffect, useState } from 'react'

import ProductsService from '../services/productsService'

import ProductCardComponent from '../components/ProductCardComponent';

function ProductsPage() {
  const [allProducts, setAllProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    ProductsService.getAllProducts()
      .then((res) => {
        setAllProducts(res.data.products)
        setIsLoading(true);
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <div>
        {/* ProductsPage */}

        {
        isLoading 
        ?
        <div className='flex flex-wrap gap-[30px]'>
          {allProducts.map((el, i) => (
            <ProductCardComponent key={i} product={el} />
          ))}
        </div>
        :
        <h2>Loading...</h2> }
    </div>
  )
}

export default ProductsPage