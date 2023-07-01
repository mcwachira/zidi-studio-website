import React from 'react'
import Container from './Container'
import Image from 'next/image'

const WhatWeDo = () => {
  return (
   <>
     <div className="  w-full grid aut-cols-max auto-rows-max  md:grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-4 my-40">

     <div className="flex items-center w-full lg:w-full">
<div className="rounded-md flex flex-col max-w-full items-center justify-center">
    <div className='inline-block w-full'>
        <Image src='/images/spa.jpeg'  width="516" height="517"
               className="rounded-lg w-full"
               alt="Hero Illustration"
            // loading="eager"
            // placeholder="blur"
        />
    </div>

    <h2 className="text-2xl  my-4 leading-1">
            Spa &amp; Massage
            </h2>
    <div className="pb-8 leading-2 track-wide">
            Your wellness goals and the areas of preference, then unwind with a customized massage experience.
            </div>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="#"
                target="_blank"
                rel="noopener"
                className="mt-2 mb-2 bg-gray-600 text-white texct-xs font-extrabold text-center uppercas px-8 py-4 border-2 border-gray-600 ease-linear duration-200 trackng-widest hover:bg-transparent hover:text-gray-900">
               Read More
              </a>
              </div>
            </div>
          </div>
          <div className="flex items-center w-full lg:w-full">
<div className="rounded-md flex flex-col max-w-full items-center justify-center">
    <div className='inline-block w-full'>
        <Image src='/images/hair-beauty.jpeg'   width="516" height="517"
               className="rounded-lg w-full"
               alt="Hero Illustration"
            // loading="eager"
            // placeholder="blur"
        />
    </div>

    <h2 className="text-2xl  my-4 leading-1">
            Hair &amp; Beauty
            </h2>
            <div className="pb-8 leading-2 track-wide">
            Combining skin-type-specific cleansing & toning, exfoliation, deep-pore cleansing extractions customized treatment.
            </div>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
                <a
                    href="#"
                    target="_blank"
                    rel="noopener"
                    className="mt-2 mb-2 bg-gray-600 text-white texct-xs font-extrabold text-center uppercas px-8 py-4 border-2 border-gray-600 ease-linear duration-200 trackng-widest hover:bg-transparent hover:text-gray-900">
                    Read More
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-center w-full lg:w-full">
<div className="rounded-md flex flex-col max-w-full items-center justify-center">

    <div className='inline-block w-full'>

        <Image src='/images/body-treatments.jpeg'  width="516" height="517"
               className="rounded-lg w-full"
               alt="Hero Illustration"
            // loading="eager"
            // placeholder="blur"
        />
    </div>

    <h2 className="text-2xl  my-4 leading-1">
          Body Treatments
            </h2>
    <div className="pb-8 leading-2 track-wide">
            Offers therapeutic benefits such as relief of muscle tension and increased circulation to the areas worked
            </div>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
                <a
                    href="#"
                    target="_blank"
                    rel="noopener"
                    className="mt-2 mb-2 bg-gray-600 text-white texct-xs font-extrabold text-center uppercas px-8 py-4 border-2 border-gray-600 ease-linear duration-200 trackng-widest hover:bg-transparent hover:text-gray-900">
                    Read More
                </a>
              </div>
            </div>
          </div>
        

   </div>
   </>
  )
}

export default WhatWeDo