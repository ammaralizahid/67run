'use client'

import React from 'react'

export default function RatingSection() {
  return (
    <section className="w-full py-20 bg-white overflow-x-hidden">
      <div className="max-w-[1366px] mx-auto px-4 md:px-6 w-full flex flex-wrap justify-center gap-6">

        {/* Column 1 */}
        <div className="relative w-full sm:w-[45%] md:w-[307px] h-[160px]">
          <div className="absolute inset-0 bg-[#EAEAEA] transform skew-x-0 sm:-skew-x-12 flex flex-col items-center justify-center">
            <span className="text-[#435CBC] font-poppins font-bold text-[43px] transform skew-x-0 sm:skew-x-12">
              2,543
            </span>
            <span className="text-black font-poppins font-medium text-[17px] transform skew-x-0 sm:skew-x-12 -mt-1">
              Active Runners
            </span>
          </div>
        </div>

        {/* Column 2 */}
        <div className="relative w-full sm:w-[45%] md:w-[307px] h-[160px]">
          <div className="absolute inset-0 bg-[#FB7BA2] transform skew-x-0 sm:-skew-x-12 flex flex-col items-center justify-center">
            <span className="text-white font-poppins font-bold text-[43px] transform skew-x-0 sm:skew-x-12">
              175+
            </span>
            <span className="text-white font-poppins font-medium text-[17px] transform skew-x-0 sm:skew-x-12 -mt-1">
              Event & Challenges
            </span>
          </div>
        </div>

        {/* Column 3 */}
        <div className="relative w-full sm:w-[45%] md:w-[307px] h-[160px]">
          <div className="absolute inset-0 bg-[#EAEAEA] transform skew-x-0 sm:-skew-x-12 flex flex-col items-center justify-center">
            <span className="text-[#435CBC] font-poppins font-bold text-[43px] transform skew-x-0 sm:skew-x-12">
              15+
            </span>
            <span className="text-black font-poppins font-medium text-[17px] transform skew-x-0 sm:skew-x-12 -mt-1">
              Years Experience
            </span>
          </div>
        </div>

        {/* Column 4 */}
        <div className="relative w-full sm:w-[45%] md:w-[307px] h-[160px]">
          <div className="absolute inset-0 bg-[#FB7BA2] transform skew-x-0 sm:-skew-x-12 flex flex-col items-center justify-center">
            <span className="text-white font-poppins font-bold text-[43px] transform skew-x-0 sm:skew-x-12">
              25
            </span>
            <span className="text-white font-poppins font-medium text-[17px] transform skew-x-0 sm:skew-x-12 -mt-1">
              Expert Coaches
            </span>
          </div>
        </div>

      </div>
    </section>
  )
}
