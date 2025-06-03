import React from 'react'
import ApplyNow from './ApplyNow'
import { ThemeToggle } from './Toggle'
const Topbar = () => {
  return (
    <div className='w-full items-center h-fit flex justify-between'>
        <h1 className='font-primary md:text-3xl text-xl font-bold'>SuperDev</h1>
        <div className='flex items-center gap-4'>
            <ThemeToggle />
            <span className='hidden md:flex'>
                <ApplyNow />
            </span>
        </div>
    </div>
  )
}

export default Topbar