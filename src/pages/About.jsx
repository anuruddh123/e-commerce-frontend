import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div className='px-4 sm:px-8 lg:px-16'>

      {/* Heading */}
      <div className='text-3xl text-center pt-10 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
        <p className='mt-4 text-gray-500 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed'>
          Discover the story behind our brand and what drives us to deliver excellence every day.
        </p>
      </div>

      {/* About Section */}
      <div className='my-16 flex flex-col md:flex-row items-center gap-12'>
        
        <img 
          className='w-full md:max-w-[500px] rounded-2xl shadow-lg object-cover' 
          src={assets.about_image} 
          alt="about" 
        />

        <div className='flex flex-col justify-center gap-6 md:w-1/2 text-gray-600'>
          <p className='leading-relaxed'>
            Trendora was built with a vision to redefine online shopping by making it more intuitive, stylish, and accessible. We believe shopping should not just be easy, but also inspiring.
          </p>

          <p className='leading-relaxed'>
            Our platform offers a carefully curated collection across fashion, electronics, and lifestyle categories—ensuring every product meets high standards of quality and design.
          </p>

          <div>
            <h3 className='text-lg font-semibold text-gray-800 mb-2'>Our Mission</h3>
            <p className='leading-relaxed'>
              To deliver a seamless and enjoyable shopping experience by combining quality products, modern design, and exceptional customer service.
            </p>
          </div>
        </div>

      </div>

      {/* Why Choose Us */}
      <div className='text-2xl text-center mb-10'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-20'>

        <div className='bg-white border rounded-2xl p-8 shadow-sm hover:shadow-xl transition duration-300'>
          <h4 className='font-semibold text-lg mb-3'>Quality Assurance</h4>
          <p className='text-gray-600 text-sm leading-relaxed'>
            Every product is carefully selected and tested to ensure it meets our premium quality standards.
          </p>
        </div>

        <div className='bg-white border rounded-2xl p-8 shadow-sm hover:shadow-xl transition duration-300'>
          <h4 className='font-semibold text-lg mb-3'>Easy Shopping</h4>
          <p className='text-gray-600 text-sm leading-relaxed'>
            Enjoy a smooth and hassle-free shopping experience with our modern and user-friendly interface.
          </p>
        </div>

        <div className='bg-white border rounded-2xl p-8 shadow-sm hover:shadow-xl transition duration-300'>
          <h4 className='font-semibold text-lg mb-3'>Customer First</h4>
          <p className='text-gray-600 text-sm leading-relaxed'>
            Our support team is always ready to help, ensuring your satisfaction at every step.
          </p>
        </div>

      </div>

      {/* Newsletter */}
      <div className='mb-10'>
        <NewsletterBox/>
      </div>

    </div>
  )
}

export default About