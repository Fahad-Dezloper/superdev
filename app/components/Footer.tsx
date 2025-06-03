import React from 'react'
import ApplyNow from './ApplyNow'

const Footer = () => {
  return (
    <div className='w-full px-4 md:px-8 rounded-t-4xl md:min-h-[40vh] h-fit flex flex-col justify-between py-8 bg-gradient-to-br from-blue-50/50 to-blue-100/50 dark:bg-[#121316] dark:bg-gradient-to-br dark:from-[#121316]/20 dark:to-[#121316]/20'>
      <div className='flex flex-col md:flex-row justify-between items-start gap-8 md:gap-0'>
        <div className='flex flex-col gap-2'>
          <h1 className='font-primary text-2xl md:text-3xl font-bold text-gray-900 dark:text-white'>SuperDev</h1>
          <p className='text-gray-600 dark:text-gray-400'>Building the future of Web3</p>
        </div>

        <div className='flex flex-col md:flex-row gap-8 md:gap-16 font-body w-full md:w-auto'>
          {/* Links Section */}
          <div className='flex gap-8 md:gap-16'>
          <div className='flex flex-col gap-2'>
            <h3 className='font-semibold mb-2 text-gray-900 dark:text-white'>Links</h3>
            <a href="#" className='text-gray-600 dark:text-gray-400 hover:text-[#51A2FF] dark:hover:text-[#51A2FF] transition-colors'>Program Details</a>
            <a href="#" className='text-gray-600 dark:text-gray-400 hover:text-[#51A2FF] dark:hover:text-[#51A2FF] transition-colors'>Timeline</a>
            <a href="#" className='text-gray-600 dark:text-gray-400 hover:text-[#51A2FF] dark:hover:text-[#51A2FF] transition-colors'>Requirements</a>
          </div>

          {/* Socials Section */}
          <div className='flex flex-col gap-2'>
            <h3 className='font-semibold mb-2 text-gray-900 dark:text-white'>Socials</h3>
            <a href="#" className='text-gray-600 dark:text-gray-400 hover:text-[#51A2FF] dark:hover:text-[#51A2FF] transition-colors'>Twitter</a>
            <a href="#" className='text-gray-600 dark:text-gray-400 hover:text-[#51A2FF] dark:hover:text-[#51A2FF] transition-colors'>Email</a>
          </div>
          </div>

          {/* Registration Section */}
          <div className='flex flex-col gap-2'>
            <h3 className='font-semibold mb-2 text-gray-900 dark:text-white'>Registration</h3>
            <ApplyNow />
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className='mt-8 pt-4 border-t border-gray-200 dark:border-gray-700'>
        <p className='text-center md:text-right text-gray-600 dark:text-gray-400'>© 2025 Solana Superdev Fellowship</p>
      </div>
    </div>
  )
}

export default Footer