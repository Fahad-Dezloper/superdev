"use client"
import { MenuIcon } from '@/components/ui/menu'
import React, { useState } from 'react'

const menuOptions = [
  {name: 'Home', href: '/'},
  {name: 'Program Details', href: '#program-details'},
  {name: 'Timeline', href: '#timeline'},
  {name: 'Requirements', href: '#requirements'},
];

const SideBar = () => {
  const [open, setOpen] = useState(false);

  // Handlers to open/close sidebar on hover
  const handleMouseEnter = () => setOpen(true);
  const handleMouseLeave = () => setOpen(false);

  return (
    <div className="relative h-full w-[10vw]">
      {/* Dark overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 z-30
          ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setOpen(false)}
      />
      
      {/* Always-visible sidebar */}
      <div
        className="fixed top-0 left-0 w-[10vw] shadow-md py-8 md:flex hidden flex-col gap-[18vw] items-center h-full bg-white dark:bg-[#121316] z-50"
      >
        <div className="w-full flex justify-center">
          <MenuIcon
            size={28}
            className="cursor-pointer dark:hover:bg-[#121316] hover:bg-gray-100 p-3 rounded-2xl"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </div>
        <h1 className="rotate-270 text-[3vw] whitespace-nowrap font-primary">Superdev Fellowship</h1>
      </div>

      {/* Sliding sidebar menu */}
      <div
        className={`fixed top-0 left-0 h-full z-40 bg-white dark:bg-[#18181b] shadow-md transition-all duration-300 ease-in-out
          ${open ? 'translate-x-0' : '-translate-x-full'}
          w-[80vw] max-w-xs
        `}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ marginLeft: '10vw' }}
      >
        <div className="flex flex-col h-full justify-between py-8 px-6">
          <div>
            <nav className="flex flex-col gap-6 mt-8">
              {menuOptions.map((option, idx) => (
                <a
                  key={option.name}
                  href={option.href}
                  className={`text-lg font-mono ${idx === 0 ? 'text-blue-500' : 'text-gray-800 dark:text-gray-200'} hover:text-blue-600`}
                >
                  {option.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar