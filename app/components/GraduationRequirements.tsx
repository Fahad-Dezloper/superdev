import { Award } from 'lucide-react'
import React from 'react'

const requirements = [
  {
    title: 'Attendance Criteria',
    desc: 'Attend at least 80% of all classes',
  },
  {
    title: 'Assignment Submissions',
    desc: 'Complete all required projects',
  },
  {
    title: 'Plagiarism Checks',
    desc: 'All work must be original',
  },
  {
    title: '1:1 Interviews',
    desc: 'Technical evaluations with mentors',
  },
]

const GraduationRequirements = () => {
  return (
    <div id='requirements' className="w-full flex flex-col gap-6 font-body md:px-8 px-0">
        <div className='space-y-3 md:space-y-4'>
            <h2 className='text-2xl md:text-3xl font-bold text-gray-900 dark:text-white'>Graduation 🎓</h2>
            <p className='text-gray-600 dark:text-gray-300'>From application to graduation. It ain&apos;t gonna be easy, but it&apos;ll be worth it.</p>
        </div>

        <div className='flex flex-col md:flex-row gap-6'>
      {/* Graduation Requirements Card */}
      <div className="w-full bg-white dark:bg-[#121316] border border-gray-200 dark:border-gray-700 rounded-xl p-4 md:p-6 flex flex-col justify-between shadow-sm">
        <div>
          <div className="flex items-center mb-4">
            <h2 className="text-xl md:text-2xl text-gray-900 dark:text-white">Requirements</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 md:gap-x-6 gap-y-4 mb-4">
            {requirements.map((req) => (
              <div key={req.title} className="flex items-start gap-2">
                {/* Checkmark Icon */}
                <span className="mt-1">
                  <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#6366F1" fillOpacity="0.1"/><path d="M6 10.5l2.5 2L14 8" stroke="#6366F1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">{req.title}</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">{req.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <hr className="my-4 border-gray-200 dark:border-gray-700" />
          <div className="text-gray-700 dark:text-gray-300 text-sm">
            Fellows are expected to commit 30 hours per week to get the most value from this program.
          </div>
        </div>
      </div>

      {/* Top Performers Reward Card */}
      <div className="w-full md:max-w-[50vh] bg-white dark:bg-[#121316] border border-gray-200 dark:border-gray-700 rounded-xl p-4 md:p-6 flex flex-col justify-between shadow-sm">
        <div className='flex flex-col justify-between h-full'>
          <div className="flex flex-col gap-4 mb-3">
            {/* Award Icon */}
            <span className="bg-orange-100 dark:bg-orange-900/30 w-fit p-2 rounded-lg mr-3">
              <Award className="text-orange-500 dark:text-orange-400" />
            </span>
            <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">Top Performers Reward</h3>
          </div>
          <div className="text-gray-700 dark:text-gray-300 text-sm mb-2">Top 20 graduates will receive</div>
          <div className="text-2xl md:text-3xl font-bold text-orange-500 dark:text-orange-400 mb-2">$2,500 <span className="text-xs bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 rounded px-2 py-0.5 ml-1 align-middle">Stipend</span></div>
          <div className="text-gray-700 dark:text-gray-300 text-sm">Recognition for excellence and dedication throughout the program</div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default GraduationRequirements