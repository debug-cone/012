import React from 'react'
import { useEffect, useState } from 'react';

import { Router, useParams } from 'react-router-dom'

import ProductsService from '../services/productsService';

function DetailPage() {
  let { id } = useParams();
  // console.log(id);

  const [product, setProduct] = useState({});
  const [currentImage, setCurrentImage] = useState(0)
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    ProductsService.getSingleProduct(id)
    .then((res) => {
      setProduct(res.data)
      setIsLoading(true);
    })
    .catch((err) => console.log(err))
  }, [])

  function handleCurrentImage(i) {
    setCurrentImage(i)
  }

  return (
    <div className='container mx-auto'>
        {/* ProductsPage */}
        {
        isLoading 
        ?
        <div className='flex justify-between gap-8'>
          <div className="flex flex-col gap-6 flex-1">
            <img 
            src={product.images[currentImage]} 
            alt={product.title} 
            />

            <div className="flex gap-2">
              {product.images.map((el, i) => {
                return (
                  <img 
                  key={i}
                  src={el}
                  className='w-[20%] border border-slate-500 object-containt'
                  onClick={() => handleCurrentImage(i)}
                  />
                )
              })}
            </div>
          </div>
          <div className="content flex-1">
            <div className="border border-black p-8">
              <h3>{product.title}</h3>
              <h4>Price: ${product.price}</h4>
              <p>Description: {product.description}</p>
            </div>
            <div className="p-8 mt-8">
              <p>Stock: {product.stock}</p>
              <p>Brand: {product.brand}</p>
            </div>
          </div>

          {/* {allProducts.map((el, i) => (
            <ProductCardComponent key={i} product={el} />
          ))} */}
        </div>
        :
        <h2>Loading...</h2> }
    </div>
  )
}

export default DetailPage