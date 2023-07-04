import React from 'react'

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
                      className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                       <img
                           src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
                           loading="lazy" alt="Photo by Minh Pham"
                           className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"/>

                       <div
                           className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                       </div>

                       {/*<span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">VR</span>*/}
                   </a>



                   <a href="#"
                      className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                       <img
                           src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=1000"
                           loading="lazy" alt="Photo by Magicle"
                           className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"/>

                       <div
                           className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                       </div>

                       {/*<span*/}
                       {/*    className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Tech</span>*/}
                   </a>



                   <a href="#"
                      className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                       <img
                           src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=1000"
                           loading="lazy" alt="Photo by Martin Sanchez"
                           className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"/>

                       <div
                           className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                       </div>

                       {/*<span*/}
                       {/*    className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Dev</span>*/}
                   </a>



                   <a href="#"
                      className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                       <img
                           src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600"
                           loading="lazy" alt="Photo by Lorenzo Herrera"
                           className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"/>

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
