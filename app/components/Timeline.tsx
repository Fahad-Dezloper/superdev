import React from 'react'
import FloatingTrustNotes from './Pin'

const Timeline = () => {
  return (
    <div id='timeline' className='w-full space-y-12 font-body md:px-8 px-0'>
        <div className=' space-y-4'>
            <h2 className='text-3xl font-bold text-gray-900 dark:text-white'>Fellowship Timeline</h2>
            <p className='text-gray-600 dark:text-gray-300'>From application to graduation - follow the complete Solana Superdev Fellowship journey</p>
        </div>

        <div>
            <FloatingTrustNotes />
        </div>
    </div>
  )
}

export default Timeline