import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {

  const [visible, setVisible] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)

  const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext)

  const logout = () => {
    navigate('/login')
    localStorage.removeItem('token')
    setToken('')
    setCartItems({})
  }

  return (
    <div className='flex items-center justify-between py-5 font-medium'>

      <Link to='/'>
        <img src={assets.logo2} className='w-40 sm:w-56' alt="" />
      </Link>

      {/* Desktop Menu */}
      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        <NavLink to='/' className='flex flex-col items-center gap-1'><p>HOME</p></NavLink>
        <NavLink to='/collection' className='flex flex-col items-center gap-1'><p>COLLECTION</p></NavLink>
        <NavLink to='/about' className='flex flex-col items-center gap-1'><p>ABOUT</p></NavLink>
        <NavLink to='/contact' className='flex flex-col items-center gap-1'><p>CONTACT</p></NavLink>
      </ul>

      {/* Right Icons */}
      <div className='flex items-center gap-4 sm:gap-6'>

        {/* Search */}
        <img
          onClick={() => { setShowSearch(true); navigate('/collection') }}
          src={assets.search_icon}
          className='w-6 sm:w-5 cursor-pointer'
          alt=""
        />

        {/* ✅ PROFILE ICON FIX */}
        <div className='relative'>
          <img
            onClick={() => {
              if (!token) {
                navigate('/login')
              } else {
                setShowDropdown(prev => !prev)
              }
            }}
            className='w-7 sm:w-5 cursor-pointer'   // 👈 FIXED SIZE
            src={assets.profile_icon}
            alt=""
          />

          {/* Dropdown */}
          {token && showDropdown && (
            <div className='absolute right-0 pt-4 z-50'>
              <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded shadow'>
                <p className='cursor-pointer hover:text-black'>My Profile</p>
                <p onClick={() => navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</p>
                <p onClick={logout} className='cursor-pointer hover:text-black'>Logout</p>
              </div>
            </div>
          )}
        </div>

        {/* Cart */}
        <Link to='/cart' className='relative'>
          <img src={assets.cart_icon} className='w-6 sm:w-5 min-w-5' alt="" />
          <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white rounded-full text-[8px]'>
            {getCartCount()}
          </p>
        </Link>

        {/* Menu */}
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className='w-6 cursor-pointer sm:hidden'
          alt=""
        />

      </div>

      {/* Mobile Sidebar */}
      <div className={`absolute top-0 right-0 bottom-0 bg-white transition-all ${visible ? 'w-full' : 'w-0'} overflow-hidden`}>
        <div className='flex flex-col text-gray-600'>
          <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
            <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="" />
            <p>Back</p>
          </div>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/collection'>COLLECTION</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>
        </div>
      </div>

    </div>
  )
}

export default Navbar