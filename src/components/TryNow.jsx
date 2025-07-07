import React from 'react'
import { HiArrowRight } from 'react-icons/hi'
import { Link } from 'react-router'

const TryNow = () => {
  return (
    <div className='bg-black text-white py-20'>
      <div className='primary-container'>
        <div className='flex flex-col md:flex-row justify-between gap-16'>
          <div className='md:w-3/5'>
            <div>
              <h2 className='text-4xl md:text-7xl font-bold mb-8'>Try it for <br/> free!</h2>
              <p className='text-xl mb-8 md:max-w-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum autem dolor tenetur quasi obcaecati similique!</p>
              <Link to="/get-started" className="hover:text-gray-300 bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700">Get Started - It's Free!</Link>
            </div>
          </div>

          <div className='md:w-2/5 space-y-12'>
            <div>
              <h3 className='text-lg md:text-xl leading-relaxed font-medium mb-4'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi aperiam quos vitae pariatur debitis voluptas provident illo sed numquam
              </h3>
            </div>
            <div className='space-y-2'>
              <h2 className='text-xl font-bold'>Contact Sales</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore repellat ut dolorum soluta ipsum eius recusandae.</p>
              <Link to="/" className='inline-flex items-center text-white hover:text-gray-300 hover:underline transition-colors'>
                Contact Sales
                <HiArrowRight className='ml-2 w-5 h-5'/>
              </Link>
            </div>
            <div className='space-y-2'>
              <h2 className='text-xl font-bold'>Hired a Certified Partner</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore repellat ut dolorum soluta ipsum eius recusandae.</p>
              <Link to="/" className='inline-flex items-center text-white hover:text-gray-300 hover:underline transition-colors'>
                Browse Partners
                <HiArrowRight className='ml-2 w-5 h-5'/>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TryNow