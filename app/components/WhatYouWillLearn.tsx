import { BoxesIcon } from '@/components/ui/boxes'
import { CpuIcon } from '@/components/ui/cpu'
import React from 'react'

const WhatYouWillLearn = () => {
  return (
    <div className='w-full space-y-8 md:space-y-12 font-body px-0 md:px-8'>
      <div className='space-y-3 md:space-y-4'>
        <h2 className='text-2xl md:text-3xl font-bold text-gray-900 dark:text-white'>What You&apos;ll Learn</h2>
        <p className='text-gray-600 dark:text-gray-400 max-w-2xl'>
          A comprehensive curriculum designed to transform you into a Solana expert, from fundamentals to advanced implementations.
        </p>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8'>
        {/* Knowledge Foundation Section */}
        <div className='space-y-4 md:space-y-6'>
          <div className='flex items-center gap-3'>
            <CpuIcon size={24} className="text-gray-900 dark:text-white" />
            <h3 className='text-lg md:text-xl font-semibold text-gray-900 dark:text-white'>Core Concepts</h3>
          </div>

          <div className='space-y-3 md:space-y-4'>
            <div className='group bg-white dark:bg-[#1D2129] p-4 md:p-6 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-500 transition-all duration-300'>
              <div className='flex items-start gap-4'>
                <div>
                  <h4 className='font-medium text-gray-900 dark:text-white mb-2'>Rust Mastery</h4>
                  <p className='text-gray-600 dark:text-gray-400'>Comprehensive learning path from basics to advanced concepts with hands-on assignments</p>
                </div>
              </div>
            </div>

            <div className='group bg-white dark:bg-[#1D2129] p-4 md:p-6 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-500 transition-all duration-300'>
              <div className='flex items-start gap-4'>
                <div>
                  <h4 className='font-medium text-gray-900 dark:text-white mb-2'>Macros & Lifetimes</h4>
                  <p className='text-gray-600 dark:text-gray-400'>Master Rust&apos;s powerful meta-programming and memory management features</p>
                </div>
              </div>
            </div>

            <div className='group bg-white dark:bg-[#1D2129] p-4 md:p-6 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-500 transition-all duration-300'>
              <div className='flex items-start gap-4'>
                <div>
                  <h4 className='font-medium text-gray-900 dark:text-white mb-2'>Solana Architecture</h4>
                  <p className='text-gray-600 dark:text-gray-400'>Dive deep into Solana&apos;s data model, PDAs, and unique architectural advantages</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Practical Implementation Section */}
        <div className='space-y-4 md:space-y-6'>
          <div className='flex items-center gap-3'>
            <BoxesIcon size={24} className="text-gray-900 dark:text-white" />
            <h3 className='text-lg md:text-xl font-semibold text-gray-900 dark:text-white'>Hands-on Projects</h3>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4'>
            {[
              { title: 'Private Key Management', desc: 'Shamir, MCPs & key security' },
              { title: 'Blockchain Indexing', desc: 'Postgres/Clickhouse integration' },
              { title: 'Payment Infrastructure', desc: 'Deposits & withdrawals' },
              { title: 'Reverse Engineering', desc: 'Working with IDLs' },
              { title: 'Token Systems', desc: 'Deep dive into token mechanics' },
              { title: 'DeFi Applications', desc: 'Building a DEX from scratch' },
              { title: 'CEX Integration', desc: 'Exchange infrastructure' },
              { title: 'Final Project', desc: 'Capstone application' }
            ].map((item, index) => (
              <div 
                key={index}
                className='group bg-white dark:bg-[#1D2129] p-4 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-500 transition-all duration-300'
              >
                <div className='flex items-start gap-3'>
                  <div>
                    <h4 className='font-medium text-gray-900 dark:text-white text-sm'>{item.title}</h4>
                    <p className='text-xs text-gray-600 dark:text-gray-400'>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhatYouWillLearn