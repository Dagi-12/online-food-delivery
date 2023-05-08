import React from 'react'
import { useSelector } from 'react-redux'
import { cartProducts } from '../stores/cart/cartSlice'
import { ProductsSummaryCard } from './ProductsSummaryCard'

export const ProductsSummary = () => {
  const cart = useSelector(cartProducts);

  // Calculate total cart price
  const total = cart.reduce((acc, product) => acc + product.price * product.amount, 0);

  return (
    <div className='flex flex-col'>
      {cart && cart.map((product, index) => (
        <ProductsSummaryCard product={product} key={index} />
      ))}
      
      {/* Display total cart price */}
      <div className='mt-4 font-bold text-xl text-red-500'>Total: {total}$</div>
    </div>
  )
}

