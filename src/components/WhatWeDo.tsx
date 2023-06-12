import React from 'react'
import Container from './Container'
import Image from 'next/image'

const WhatWeDo = () => {
  return (
   <>
     <div className="  w-full grid  md:grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-3 my-56">

     <div className="flex items-center w-full lg:w-full">
<div className="rounded-md flex flex-col max-w-full items-center justify-center">
<Image src='/images/spa.jpeg'  width="516" height="517"
              className="object-cover rounded-lg"
              alt="Hero Illustration"
              // loading="eager"
              // placeholder="blur"
            />
            <h3 className="text-xl my-4 font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-4xl xl:leading-tight dark:text-white">
            Spa & Massage
            </h3>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            Your wellness goals and the areas of preference, then unwind with a customized massage experience.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="#"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-black bg-white hover:bg-gray-600 border-gray-600 border-2 rounded-md ">
               Read More
              </a>
              </div>
            </div>
          </div>
          <div className="flex items-center w-full lg:w-full">
<div className="rounded-md flex flex-col max-w-full items-center justify-center">
<Image src='/images/hair-beauty.jpeg'   width="516" height="517"
              className="object-cover rounded-lg"
              alt="Hero Illustration"
              // loading="eager"
              // placeholder="blur"
            />
           <h3 className="text-xl my-4 font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-4xl xl:leading-tight dark:text-white">
            Hair & Beauty
            </h3>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            Combining skin-type-specific cleansing & toning, exfoliation, deep-pore cleansing extractions customized treatment.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
            <a
                href="#"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-black bg-white hover:bg-gray-600 border-gray-600 border-2 rounded-md ">
               Read More
              </a>
              </div>
            </div>
          </div>

          <div className="flex items-center w-full lg:w-full">
<div className="rounded-md flex flex-col max-w-full items-center justify-center">
<Image src='/images/body-treatments.jpeg'  width="516" height="517"
              className="object-cover rounded-lg"
              alt="Hero Illustration"
              // loading="eager"
              // placeholder="blur"
            />
             <h3 className="text-xl my-4 font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-4xl xl:leading-tight dark:text-white">
          Body Treatments
            </h3>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            Offers therapeutic benefits such as relief of muscle tension and increased circulation to the areas worked
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
            <a
                href="#"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-black bg-white hover:bg-gray-600 border-gray-600 border-2 rounded-md ">
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