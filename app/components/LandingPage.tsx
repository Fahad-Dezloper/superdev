/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useEffect, useState } from 'react'

const backgroundImages = [
  '/hero/hero-bg.png',
  '/hero/hero-bg-1.png',
  '/hero/hero-bg-2.png',
  '/hero/hero-bg-3.png',
]

const LandingPage = () => {
  const [bgIndex, setBgIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgroundImages.length)
    }, 5000) // change every 5 seconds
    return () => clearInterval(interval)
  }, [])

  return (
    <div className='relative w-full flex items-center justify-center font-body md:min-h-[80vh] md:max-h-[80vh] min-h-screen rounded-2xl p-4 overflow-hidden border'>
      <div className='absolute top-0 left-0 w-full h-full rounded-2xl z-0 transition-opacity duration-1000'>
        {backgroundImages.map((src, index) => (
          <img
            key={src}
            src={src}
            alt={`Background ${index}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === bgIndex ? 'opacity-30' : 'opacity-0'
            }`}
          />
        ))}
        <div className='absolute inset-0 bg-black/5 dark:bg-black/60' />
      </div>

      <div className='max-w-2xl text-center space-y-6 z-10'>
        <span className='px-3 py-1 bg-sky-100 text-sky-600 dark:bg-sky-900 dark:text-sky-300 rounded-full text-sm font-medium'>
          July - August 2025
        </span>
        <h1 className='text-4xl font-bold text-gray-900 dark:text-white mt-4'>
          <span className='font-primary'>Superdev</span> Fellowship 2025
        </h1>
        <p className='text-xl text-gray-700 dark:text-gray-300'>
          An 8-week cohort for <span className='font-bold font-primary'>SuperDevs</span> building on Solana.
        </p>
        <p className='text-lg text-gray-700 dark:text-gray-400 leading-relaxed'>
          Join a handpicked group of builders. Learn from top mentors, ship real Web3 projects, and get paid{' '}
          <span className='font-bold text-green-600 dark:text-green-400'>$2,500</span> to do it.
        </p>
        <a href='https://airtable.com/appdfQFBoIXdYtre1/shrrIsfy6iUMv8OeI' target='_blank' rel='noreferrer'>
          <button className='mt-4 px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors'>
            Apply now — limited spots
          </button>
        </a>
      </div>

      <div className='absolute md:bottom-4 md:flex hidden flex-col items-center md:right-4 z-10 opacity-80'>
        <div className='text-xs text-gray-700 dark:text-gray-300 text-right mb-1'>
          Supported by
        </div>
        <div className='flex w-full items-center justify-center gap-2 bg-white p-2 rounded-2xl backdrop-blur'>

          <img src='https://www.superdev.fun/_next/image?url=%2Fsponsor-3.png&w=1920&q=75' alt='Solana & Superteam Logo' className='w-full h-6' />
          <img src='https://www.superdev.fun/_next/image?url=%2Fsponsor-4.png&w=1920&q=75' alt='Solana & Superteam Logo' className='w-full h-6' />
        </div>
      </div>
      <div className='absolute bottom-6 left-16 right-16 md:hidden flex flex-col items-center z-10 opacity-80'>
        <div className='text-xs text-gray-700 dark:text-gray-300 text-right mb-1'>
          Supported by
        </div>
        <div className='flex w-full items-center justify-center gap-2 bg-white p-2 rounded-2xl backdrop-blur'>
          <img src='https://www.superdev.fun/_next/image?url=%2Fsponsor-3.png&w=1920&q=75' alt='Solana & Superteam Logo' className='w-full h-6' />
          <img src='https://www.superdev.fun/_next/image?url=%2Fsponsor-4.png&w=1920&q=75' alt='Solana & Superteam Logo' className='w-full h-6' />
        </div>
      </div>
    </div>
  )
}

export default LandingPage
