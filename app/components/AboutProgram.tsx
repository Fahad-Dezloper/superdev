/* eslint-disable @next/next/no-img-element */
import React from 'react'
import ApplyNow from './ApplyNow'

const AboutProgram = () => {
  return (
    <div id='program-details' className='w-full space-y-6 md:space-y-8 font-body md:px-4 px-0'>
      <div className='space-y-3 md:space-y-4'>
        <h2 className='text-2xl md:text-3xl font-bold text-gray-900 dark:text-white'>About the Program</h2>
        <p className='text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed'>
          The Superdev Fellowship is an 8-week program for experienced developers to master Solana and build real-world Web3 projects.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
        <div className='flex-1 space-y-6 md:space-y-8'>
          <div className='space-y-3 md:space-y-4'>
            <h3 className='text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-100'>Learning Experience</h3>
            <p className='text-gray-700 dark:text-gray-300 leading-relaxed'>
              You&apos;ll learn by doing — each week covers a core area like DeFi, NFTs, DAOs, and on-chain gaming. The program includes:
            </p>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4'>
                <div className='bg-white dark:bg-[#1D2129] p-4 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-500 transition-colors'>
                  <h4 className='font-medium text-gray-900 dark:text-white mb-2'>Live workshops</h4>
                  <p className='text-sm text-gray-600 dark:text-gray-400'>Live sessions with top Solana builders</p>
                </div>
                <div className='bg-white dark:bg-[#1D2129] p-4 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-500 transition-colors'>
                  <h4 className='font-medium text-gray-900 dark:text-white mb-2'>Hands-on coding sessions</h4>
                  <p className='text-sm text-gray-600 dark:text-gray-400'>Hands-on coding sessions with top Solana builders</p>
                </div>
                <div className='bg-white dark:bg-[#1D2129] p-4 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-500 transition-colors'>
                  <h4 className='font-medium text-gray-900 dark:text-white mb-2'>Q&A sessions with top Solana builders</h4>
                  <p className='text-sm text-gray-600 dark:text-gray-400'>Q&A sessions with top Solana builders</p>
              </div>
            </div>
          </div>

          <div className='space-y-3 md:space-y-4'>
            <h3 className='text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-100'>Program Benefits</h3>
            <p className='text-gray-700 dark:text-gray-300 leading-relaxed mb-4 md:mb-6'>
              You&apos;ll join a cohort of <span className='text-sky-800 dark:text-sky-400 font-medium underline'>Elite</span> developers. The top 20 students will receive $2,500 in support, and all participants will present their projects at Demo Day — with real opportunities for:
            </p>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4'>
            <div className="group max-h-[25vh] overflow-hidden relative rounded-2xl border bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <img
                    src="/superteam/grant.png"
                    alt="grant image"
                    className="w-full h-full object-bottom group-hover:scale-105 transition-transform duration-300"
                />
                
                <div className="absolute bottom-0 w-full h-16 bg-gradient-to-t from-black/70 to-transparent dark:from-gray-900/80 z-0" />

                <div className="absolute bottom-0 w-full px-3 py-2 z-10 text-sm">
                    <span className="block font-semibold text-white">
                    Grants
                    </span>
                    <p className="text-xs text-gray-200">
                    Access to ecosystem grants and funding opportunities
                    </p>
                </div>
                </div>

            <div className="group max-h-[25vh] overflow-hidden relative rounded-2xl border bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <img
                    src="/superteam/funding.png"
                    alt="grant image"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                <div className="absolute bottom-0 w-full h-16 bg-gradient-to-t from-black/70 to-transparent dark:from-gray-900/80 z-0" />

                <div className="absolute bottom-0 w-full px-3 py-2 z-10 text-sm">
                    <span className="block font-semibold text-white">
                    Funding
                    </span>
                    <p className="text-xs text-gray-200">
                    Potential investment opportunities from leading VCs
                    </p>
                </div>
                </div>

            <div className="group max-h-[25vh] overflow-hidden relative rounded-2xl border bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <img
                    src="/superteam/hiring.png"
                    alt="grant image"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                <div className="absolute bottom-0 w-full h-16 bg-gradient-to-t from-black/70 to-transparent dark:from-gray-900/80 z-0" />

                <div className="absolute bottom-0 w-full px-3 py-2 z-10 text-sm">
                    <span className="block font-semibold text-white">
                    Hiring
                    </span>
                    <p className="text-xs text-gray-200">
                    Direct hiring opportunities from top Solana teams
                    </p>
                </div>
                </div>
            </div>
          </div>
        </div>

        <div className='lg:w-[400px]'>
          <div className='bg-white dark:bg-[#1D2129]/40 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 px-4 md:px-8 py-4'>
            <div className='space-y-4 md:space-y-6'>
              <div>
                <h3 className='text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2'>Program Details</h3>
                <p className='text-gray-600 dark:text-gray-400'>Everything you need to know</p>
              </div>

              <div className='w-full h-[25vh]  rounded-2xl overflow-hidden'>
                <iframe className='w-full h-full object-cover' src="https://www.youtube.com/embed/dfV1ziyNJPk" title="Superdev fellowship 2025" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              </div>

              <div className='grid grid-cols-2 gap-y-4 h-fit grid-rows-2'>
                <div className=''>
                  <h4 className='font-medium text-gray-500 dark:text-gray-400'>Duration</h4>
                  <div className='space-y-1'>
                    <p className='text-gray-900 dark:text-white font-medium'>8 weeks</p>
                  </div>
                </div>

                <div className=''>
                  <h4 className='font-medium text-gray-500 dark:text-gray-400'>Format</h4>
                  <div className='space-y-1'>
                    <p className='text-gray-900 dark:text-white font-medium'>Remote</p>
                  </div>
                </div>

                <div className=''>
                  <h4 className='font-medium text-gray-500 dark:text-gray-400'>Stipend</h4>
                  <div className='space-y-1'>
                    <p className='text-gray-900 dark:text-white font-medium'>$2,500</p>
                    <p className='text-sm text-gray-600 dark:text-gray-400'>Top 20 fellows</p>
                  </div>
                </div>

                <div className=''>
                  <h4 className='font-medium text-gray-500 dark:text-gray-400'>Batch</h4>
                  <div className='space-y-1'>
                    <p className='text-gray-900 dark:text-white font-medium'>July - August 2025</p>
                    <p className='text-sm text-gray-600 dark:text-gray-400'>12-16 Classes</p>
                  </div>
                </div>
              </div>

              <div className='pt-4 flex w-full items-center justify-center border-t border-gray-100 dark:border-gray-700'>
                  <ApplyNow />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutProgram