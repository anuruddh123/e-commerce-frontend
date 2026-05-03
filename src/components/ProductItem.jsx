import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const ProductItem = ({ id, image, name, price, oldPrice, rating = 4 }) => {

  const { currency, addToCart } = useContext(ShopContext)

  const discount = oldPrice 
    ? Math.round(((oldPrice - price) / oldPrice) * 100) 
    : null

  return (
    <div className='group relative bg-white rounded-2xl overflow-hidden border border-gray-100 transition duration-300 hover:shadow-xl hover:-translate-y-1'>

      {/* Wishlist */}
      <button className='absolute top-3 right-3 z-10 bg-white p-2 rounded-full shadow hover:scale-110 transition'>
        ❤️
      </button>

      {/* Discount Badge */}
      {discount && (
        <span className='absolute top-3 left-3 z-10 bg-black text-white text-xs px-2 py-1 rounded'>
          -{discount}%
        </span>
      )}

      {/* Clickable Area */}
      <Link to={`/product/${id}`} onClick={() => scrollTo(0,0)}>

        {/* Image */}
        <div className='w-full h-52 flex items-center justify-center bg-gray-50 overflow-hidden'>
          <img 
            src={image[0]} 
            alt={name}
            className='max-h-full object-contain transition duration-500 group-hover:scale-105'
          />

          {/* Overlay */}
          <div className='absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center'>
            <span className='bg-white text-black text-xs px-4 py-2 rounded-full font-medium'>
              View Product
            </span>
          </div>
        </div>

      </Link>

      {/* Info */}
      <div className='p-4'>

        <p className='text-sm font-medium text-gray-800 truncate'>
          {name}
        </p>

        {/* Rating */}
        <div className='flex items-center text-yellow-400 text-xs mt-1'>
          {'★'.repeat(rating)}
          {'☆'.repeat(5 - rating)}
        </div>

        {/* Price */}
        <div className='flex items-center gap-2 mt-2'>
          <p className='text-sm font-semibold text-gray-800'>
            {currency}{price}
          </p>

          {oldPrice && (
            <p className='text-xs text-gray-400 line-through'>
              {currency}{oldPrice}
            </p>
          )}
        </div>

        {/* Add to Cart */}
        <button 
          onClick={() => addToCart(id)}
          className='mt-4 w-full py-2 text-sm bg-black text-white rounded-full hover:bg-gray-800 transition'
        >
          Add to Cart
        </button>

      </div>

    </div>
  )
}

export default ProductItem