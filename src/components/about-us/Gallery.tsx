import React from 'react'
import Image from 'next/image'

const Gallery = () => {
    return (
   <>

       <div className="bg-white py-6 sm:py-8 lg:py-12">
           <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
               <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
                   <div className="flex flex-col   gap-6 w-2/3">
                       <h4 className="text-2xl text-left font-bold text-gray-600 lg:text-3xl">Gallery</h4>

                       <h2 className="text-5xl font-bold text-gray-800 lg:text-3xl">
                           Follow us on
                           Social Platforms


                       </h2>

                       <p className="hidden max-w-screen-sm text-gray-500 md:block">We are available in social media platforms for appointment your information will be held in strict confidentiality. Prior to your appointment, shower and slip on comfortable clothing.</p>
                   </div>


               </div>

               <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">

                   <a href="#"
                      className="group relative flex h-56 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-96">
                       <Image
                           src='/images/about-us.jpeg'  width="516" height="917"
                           loading="lazy" alt="about us image"

                           className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"/>

                       <div
                           className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                       </div>

                       {/*<span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">VR</span>*/}
                   </a>



                   <a href="#"
                      className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                       <Image
                           src='/images/bed-massage.jpeg'  width="516" height="517"
                           loading="lazy" alt="full body massage image"
                           className="absolute inset-0 h-full w-full object-cover object-top transition duration-200 group-hover:scale-110"/>

                       <div
                           className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                       </div>

                       {/*<span*/}
                       {/*    className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Tech</span>*/}
                   </a>



                   <a href="#"
                      className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                       <Image
                           src='/images/spa.jpeg'  width="516" height="617"
                           loading="lazy" alt="Photo by Martin Sanchez"
                           className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"/>

                       <div
                           className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                       </div>

                       {/*<span*/}
                       {/*    className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Dev</span>*/}
                   </a>



                   <a href="#"
                      className="group relative flex h-56 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-96">
                       <Image
                           src='/images/employees.jpeg'  width="516" height="617"
                           loading="lazy" alt="emplopyees"
                           className="absolute inset-0 h-full w-full object-cover object-top transition duration-200 group-hover:scale-110"/>

                       <div
                           className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                       </div>

                       {/*<span*/}
                       {/*    className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Retro</span>*/}
                   </a>


                   <a href="#"
                      className="group relative flex h-64 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-96">
                       <Image
                           src='/images/hair.jpeg'  width="516" height="917"
                           loading="lazy" alt="salon"

                           className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"/>

                       <div
                           className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                       </div>

                       {/*<span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">VR</span>*/}
                   </a>



                   <a href="#"
                      className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                       <Image
                           src='/images/bed-massage.jpeg'  width="516" height="517"
                           loading="lazy" alt="full body massage image"
                           className="absolute inset-0 h-full w-full object-cover object-top transition duration-200 group-hover:scale-110"/>

                       <div
                           className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                       </div>

                       {/*<span*/}
                       {/*    className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Tech</span>*/}
                   </a>



                   <a href="#"
                      className="group relative flex h-56 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-12">
                       <Image
                           src='/images/employees-at-work.jpeg'  width="516" height="817"
                           loading="lazy" alt="Photo by Martin Sanchez"
                           className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"/>

                       <div
                           className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                       </div>

                       {/*<span*/}
                       {/*    className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Dev</span>*/}
                   </a>



                   <a href="#"
                      className="group relative flex h-56 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-96">
                       <Image
                           src='/images/full-body.jpeg'  width="516" height="717"
                           loading="lazy" alt="emplopyees"
                           className="absolute inset-0 h-full w-full object-cover object-top transition duration-200 group-hover:scale-110"/>

                       <div
                           className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                       </div>

                       {/*<span*/}
                       {/*    className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Retro</span>*/}
                   </a>
               </div>
           </div>
       </div></>
    )
}
export default Gallery
