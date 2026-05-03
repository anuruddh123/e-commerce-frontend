import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'

const Collection = () => {

  const { products, search, showSearch } = useContext(ShopContext)

  const [showFilter, setShowFilter] = useState(false)
  const [filterProducts, setFilterProducts] = useState([])
  const [category, setCategory] = useState([])
  const [subCategory, setSubCategory] = useState([])
  const [sortType, setSortType] = useState('relavent')
  const [loading, setLoading] = useState(true)

  // Toggle Category
  const toggleCategory = (e) => {
    const value = e.target.value
    setCategory(prev =>
      prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
    )
  }

  // Toggle SubCategory
  const toggleSubCategory = (e) => {
    const value = e.target.value
    setSubCategory(prev =>
      prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
    )
  }

  // Apply Filters
  const applyFilter = () => {
    let productsCopy = [...products]

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
      )
    }

    if (category.length) {
      productsCopy = productsCopy.filter(item =>
        category.includes(item.category)
      )
    }

    if (subCategory.length) {
      productsCopy = productsCopy.filter(item =>
        subCategory.includes(item.subCategory)
      )
    }

    setFilterProducts(productsCopy)
  }

  // Sort Products
  const sortProduct = () => {
    let fpCopy = [...filterProducts]

    if (sortType === 'low-high') {
      fpCopy.sort((a, b) => a.price - b.price)
    } else if (sortType === 'high-low') {
      fpCopy.sort((a, b) => b.price - a.price)
    }

    setFilterProducts(fpCopy)
  }

  // Apply filter when data changes
  useEffect(() => {
    if (products.length > 0) {
      applyFilter()
      setLoading(false)
    }
  }, [products, category, subCategory, search, showSearch])

  // Sort when sortType changes
  useEffect(() => {
    sortProduct()
  }, [sortType])

  return (
    <div className='px-4 sm:px-8 lg:px-16 pt-10 border-t'>

      <div className='flex flex-col lg:flex-row gap-10'>

        {/* Sidebar */}
        <div className='lg:w-1/4'>

          {/* Mobile Filter Toggle */}
          <div 
            onClick={() => setShowFilter(!showFilter)} 
            className='flex justify-between items-center mb-4 cursor-pointer lg:hidden'
          >
            <p className='text-lg font-medium'>Filters</p>
            <img 
              className={`h-3 transition ${showFilter ? 'rotate-180' : ''}`} 
              src={assets.dropdown_icon} 
              alt="" 
            />
          </div>

          <div className={`${showFilter ? 'block' : 'hidden'} lg:block space-y-6`}>

            {/* Categories */}
            <div className='bg-white p-5 rounded-xl shadow-sm border'>
              <p className='font-semibold mb-3'>Categories</p>
              <div className='space-y-2 text-sm text-gray-600'>
                {['Men', 'Women', 'Kids'].map((item, i) => (
                  <label key={i} className='flex items-center gap-2'>
                    <input type="checkbox" value={item} onChange={toggleCategory} />
                    {item}
                  </label>
                ))}
              </div>
            </div>

            {/* Type */}
            <div className='bg-white p-5 rounded-xl shadow-sm border'>
              <p className='font-semibold mb-3'>Type</p>
              <div className='space-y-2 text-sm text-gray-600'>
                {['Topwear', 'Bottomwear', 'Winterwear'].map((item, i) => (
                  <label key={i} className='flex items-center gap-2'>
                    <input type="checkbox" value={item} onChange={toggleSubCategory} />
                    {item}
                  </label>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Products Section */}
        <div className='flex-1'>

          {/* Header */}
          <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4'>
            <Title text1={'ALL'} text2={'COLLECTIONS'} />

            <select 
              onChange={(e) => setSortType(e.target.value)} 
              className='border rounded-full px-4 py-2 text-sm'
            >
              <option value="relavent">Sort: Relevant</option>
              <option value="low-high">Price: Low → High</option>
              <option value="high-low">Price: High → Low</option>
            </select>
          </div>

          {/* Products Grid */}
          <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6'>

            {loading ? (
              <p className='text-gray-500 col-span-full text-center'>
                Loading products...
              </p>
            ) : (filterProducts.length > 0 ? filterProducts : products).length > 0 ? (

              (filterProducts.length > 0 ? filterProducts : products).map((item, index) => (
                <ProductItem
                  key={index}
                  name={item.name}
                  id={item._id}
                  price={item.price}
                  image={item.image}
                />
              ))

            ) : (
              <p className='text-gray-500 col-span-full text-center'>
                No products found.
              </p>
            )}

          </div>

        </div>

      </div>
    </div>
  )
}

export default Collection