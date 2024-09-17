import React from 'react'
import { Link } from 'react-router-dom'
import DetailPage from '../pages/DetailPage'

function ProductCardComponent( {product} ) {
  return (
    <div className='w-[300px] border-2 border-slate-500'>
        <img 
        src={product.thumbnail} 
        alt={product.title} 
        className='h-[250px] w-full object-cover' 
        />

        <h3 className='text-xl text-slate-500 text-center mb-[10px]'>{product.title}</h3>
        <p className='text-xl text-slate-500 text-center mb-[10px]'>{product.price}</p>
        <Link to={`/detail/${product.id}`}>
            <button>Show more...</button>
        </Link>
    </div>
  )
}

export default ProductCardComponent