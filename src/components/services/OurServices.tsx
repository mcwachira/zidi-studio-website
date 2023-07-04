import React from 'react'
import Image from "next/image";

const OurServices = () => {
    return (
 <>

     <div className=" pt-32 pb-32 bg-white ">


         <div className='text-center'>
             <div className="pb-1 text-gray-600 text-base font-semibold tracking-widest uppercase">
                 Our Services
             </div>
             <h2 className="mt-0 mb-4 text-5xl tracking-normal leading-snug font-bold text-gray-900 text-center">

                 Creative excellence and the <br/>unparalleled hospitality <br/></h2>

         </div>

         {/*<div className='ml-auto mr-auto max-w-max pr-5 pl-5'>*/}

         <div className="pb-20 w-screen grid  md:grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-3">

             <div className='mt-20 ml-auto mr-auto w-1/2'>
                 <div className='flex flex-col'>
                     <div className=" border-b-2 border-b-gray-600">
                         <div className="flex">
                             <h3 className="relative overflow-visible w-auto mt-0 mr-auto mb-0 pr-2 justify-start items-start bg-white text-xl text-left capitalize font-semibold  ">Deep Tissue</h3>
                             <div className="pl-2 bg-white">from</div>
                             <div className="pl-2 text-gray-900 text-xl bg-white">$48.00</div>
                         </div>
                         <div className="inset-y-1/4 border-2 border-dotted border-gray-900"></div>
                         <div className="font-base">A therapeutic massage that used for relieving muscles.</div>
                     </div>
                     <div className=" border-b-2 border-b-gray-600">
                         <div className="flex">
                             <h3 className="relative overflow-visible w-auto mt-0 mr-auto mb-0 pr-2 justify-start items-start bg-white text-xl text-left capitalize font-semibold  ">Body Scrub</h3>
                             <div className="pl-2 bg-white">from</div>
                             <div className="pl-2 text-gray-900 text-xl bg-white">$18.00</div>
                         </div>
                         <div className="inset-y-1/4 border-dotted border-gray-900"></div>
                         <div className="font-base">Perfect way to relieve all that unwanted stress in body.</div>
                     </div>
                     <div className=" border-b-2 border-b-gray-600">
                         <div className="flex">
                             <h3 className="relative overflow-visible w-auto mt-0 mr-auto mb-0 pr-2 justify-start items-start bg-white text-xl text-left capitalize font-semibold  ">Foot Massage</h3>
                             <div className="pl-2 bg-white">from</div>
                             <div className="pl-2 text-gray-900 text-xl bg-white">$25.00</div>
                         </div>
                         <div className="inset-y-1/4 border-dotted border-gray-900"></div>
                         <div className="font-base">Get a relaxing massage focused on your feet and lower legs.</div>
                     </div>
                     <div className=" border-b-2 border-b-gray-600">
                         <div className="flex">
                             <h3 className="relative overflow-visible w-auto mt-0 mr-auto mb-0 pr-2 justify-start items-start bg-white text-xl text-left capitalize font-semibold  ">Scalp Treatments</h3>
                             <div className="pl-2 bg-white">from</div>
                             <div className="pl-2 text-gray-900 text-xl bg-white">$15.00</div>
                         </div>
                         <div className="inset-y-1/4 border-dotted border-gray-900"></div>
                         <div className="font-base">Superior gray creates a rich, natural look with less fading.</div>
                     </div>



                     <a href="/services-single"  className="mt-20 mb-2 bg-gray-600 text-white text-xs font-extrabold text-center uppercase px-8 py-4 border-2 border-gray-600 ease-linear duration-200 trackng-widest hover:bg-transparent hover:text-gray-900">GET AN APPOINTMENT</a>
                     <Image src="https://uploads-ssl.webflow.com/6135e5f06048e4e83fb2c8ab/618f54f0f6c6e0cdc8748bf1_service-box.jpg"
                            width="516" height="517"
                            loading="lazy" alt="Service Pattern" className="hidden"/>
                 </div>
             </div>
             <div className='mr-auto ml-auto flex flex-col'>

                 <div className="relative ">
                     <Image
                         src="https://uploads-ssl.webflow.com/6135e5f06048e4e83fb2c8ab/618f54b244ab47992990ef3c_service-image-one.jpg"
                         loading="lazy" alt="Care Girl Image"
                         className="relative z-10 shadow-lg object-cover"
                         width="516" height="517"/>

                 </div>




             </div>

         </div>

         <div className="pb-20 w-screen grid  md:grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-3">


             <div className=' mr-auto ml-auto flex flex-col'>

                     <div className="relative ">
                         <Image
                             src="https://uploads-ssl.webflow.com/6135e5f06048e4e83fb2c8ab/618f54b2f945d433a45352b9_service-image-two.jpg"
                             loading="lazy" alt="Care Girl Image"
                             className="relative z-10 shadow-lg  object-cover"
                             width="516" height="517"/>

                     </div>



                 </div>



             <div className='mt-20 ml-auto mr-auto w-1/2'>
                 <div className='flex flex-col'>
                     <div className=" border-b-2 border-b-gray-600">
                         <div className="flex">
                             <h3 className="relative overflow-visible w-auto mt-0 mr-auto mb-0 pr-2 justify-start items-start bg-white text-xl text-left capitalize font-semibold  ">Blemish Buster</h3>
                             <div className="pl-2 bg-white">from</div>
                             <div className="pl-2 text-gray-900 text-xl bg-white">$40.00</div>
                         </div>
                         <div className="inset-y-1/4 border-2 border-dotted border-gray-900"></div>
                         <div className="font-base">Deep cleansing facial rebalances to promote healthy skin.</div>
                     </div>
                     <div className=" border-b-2 border-b-gray-600">
                         <div className="flex">
                             <h3 className="relative overflow-visible w-auto mt-0 mr-auto mb-0 pr-2 justify-start items-start bg-white text-xl text-left capitalize font-semibold  ">Oxygen Facial</h3>
                             <div className="pl-2 bg-white">from</div>
                             <div className="pl-2 text-gray-900 text-xl bg-white">$32.00</div>
                         </div>
                         <div className="inset-y-1/4 border-dotted border-gray-900"></div>
                         <div className="font-base">Hydrates, tones, lifts, and adds radiance to the skin.</div>
                     </div>
                     <div className=" border-b-2 border-b-gray-600">
                         <div className="flex">
                             <h3 className="relative overflow-visible w-auto mt-0 mr-auto mb-0 pr-2 justify-start items-start bg-white text-xl text-left capitalize font-semibold  ">Lash Lift</h3>
                             <div className="pl-2 bg-white">from</div>
                             <div className="pl-2 text-gray-900 text-xl bg-white">$25.00</div>
                         </div>
                         <div className="inset-y-1/4 border-dotted border-gray-900"></div>
                         <div className="font-base">Treatment for natural lashes that can add curl and definition.</div>
                     </div>




                     <a href="/services-single"  className="mt-20 mb-2 bg-gray-600 text-white texct-xs font-extrabold text-center uppercase px-8 py-4 border-2 border-gray-600 ease-linear duration-200 trackng-widest hover:bg-transparent hover:text-gray-900">GET AN APPOINTMENT</a>
                     <Image src="https://uploads-ssl.webflow.com/6135e5f06048e4e83fb2c8ab/618f54f0f6c6e0cdc8748bf1_service-box.jpg"
                            width="516" height="517"
                            loading="lazy" alt="Service Pattern"    className="hidden"
                     />

                 </div>
             </div>

         </div>


         <div className="pb-20 w-screen grid  md:grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-3">


             <div className='mt-20 ml-auto mr-auto w-1/2'>
                 <div className='flex flex-col'>
                     <div className=" border-b-2 border-b-gray-600">
                         <div className="flex">
                             <h3 className="relative overflow-visible w-auto mt-0 mr-auto mb-0 pr-2 justify-start items-start bg-white text-xl text-left capitalize font-semibold  ">Deep Tissue</h3>
                             <div className="pl-2 bg-white">from</div>
                             <div className="pl-2 text-gray-900 text-xl bg-white">$48.00</div>
                         </div>
                         <div className="inset-y-1/4 border-2 border-dotted border-gray-900"></div>
                         <div className="font-base">A therapeutic massage that used for relieving muscles.</div>
                     </div>
                     <div className=" border-b-2 border-b-gray-600">
                         <div className="flex">
                             <h3 className="relative overflow-visible w-auto mt-0 mr-auto mb-0 pr-2 justify-start items-start bg-white text-xl text-left capitalize font-semibold  ">Body Scrub</h3>
                             <div className="pl-2 bg-white">from</div>
                             <div className="pl-2 text-gray-900 text-xl bg-white">$18.00</div>
                         </div>
                         <div className="inset-y-1/4 border-dotted border-gray-900"></div>
                         <div className="font-base">Perfect way to relieve all that unwanted stress in body.</div>
                     </div>
                     <div className=" border-b-2 border-b-gray-600">
                         <div className="flex">
                             <h3 className="relative overflow-visible w-auto mt-0 mr-auto mb-0 pr-2 justify-start items-start bg-white text-xl text-left capitalize font-semibold  ">Foot Massage</h3>
                             <div className="pl-2 bg-white">from</div>
                             <div className="pl-2 text-gray-900 text-xl bg-white">$25.00</div>
                         </div>
                         <div className="inset-y-1/4 border-dotted border-gray-900"></div>
                         <div className="font-base">Get a relaxing massage focused on your feet and lower legs.</div>
                     </div>
                     <div className=" border-b-2 border-b-gray-600">
                         <div className="flex">
                             <h3 className="relative overflow-visible w-auto mt-0 mr-auto mb-0 pr-2 justify-start items-start bg-white text-xl text-left capitalize font-semibold  ">Scalp Treatments</h3>
                             <div className="pl-2 bg-white">from</div>
                             <div className="pl-2 text-gray-900 text-xl bg-white">$15.00</div>
                         </div>
                         <div className="inset-y-1/4 border-dotted border-gray-900"></div>
                         <div className="font-base">Superior gray creates a rich, natural look with less fading.</div>
                     </div>



                     <a href="/services-single"  className="mt-20 mb-2 bg-gray-600 text-white text-xs font-extrabold text-center uppercase px-8 py-4 border-2 border-gray-600 ease-linear duration-200 trackng-widest hover:bg-transparent hover:text-gray-900">GET AN APPOINTMENT</a>
                     <Image src="https://uploads-ssl.webflow.com/6135e5f06048e4e83fb2c8ab/618f54f0f6c6e0cdc8748bf1_service-box.jpg"
                            width="516" height="517"
                            loading="lazy" alt="Service Pattern" className="hidden"/>
                 </div>
             </div>

             <div className=' mr-auto ml-auto flex flex-col'>

                 <div className="relative ">
                     <Image
                         src="https://uploads-ssl.webflow.com/6135e5f06048e4e83fb2c8ab/618f54b244ab47992990ef3c_service-image-one.jpg"
                         loading="lazy" alt="Care Girl Image"
                         className="relative z-10 shadow-lg "
                         width="516" height="517"/>

                 </div>




             </div>
         </div>



         <div className="pb-20 w-screen grid  md:grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-3">


                 <div className='flex flex-col  ml-auto mr-auto '>

                     <div className="relative mr-0">
                         <Image
                             src="https://uploads-ssl.webflow.com/6135e5f06048e4e83fb2c8ab/618f54b244ab47992990ef3c_service-image-one.jpg"
                             loading="lazy" alt="Care Girl Image"
                             className="relative z-10 shadow-lg "
                             width="516" height="517"/>

                     </div>

                 </div>

             <div className='mt-20 ml-auto mr-auto w-1/2'>
                     <div className='flex flex-col'>
                     <div className=" border-b-2 border-b-gray-600">
                         <div className="flex">
                             <h3 className="relative overflow-visible w-auto mt-0 mr-auto mb-0 pr-2 justify-start items-start bg-white text-xl text-left capitalize font-semibold  ">Deep Tissue</h3>
                             <div className="pl-2 bg-white">from</div>
                             <div className="pl-2 text-gray-900 text-xl bg-white">$48.00</div>
                         </div>
                         <div className="inset-y-1/4 border-2 border-dotted border-gray-900"></div>
                         <div className="font-base">A therapeutic massage that used for relieving muscles.</div>
                     </div>
                     <div className=" border-b-2 border-b-gray-600">
                         <div className="flex">
                             <h3 className="relative overflow-visible w-auto mt-0 mr-auto mb-0 pr-2 justify-start items-start bg-white text-xl text-left capitalize font-semibold  ">Body Scrub</h3>
                             <div className="pl-2 bg-white">from</div>
                             <div className="pl-2 text-gray-900 text-xl bg-white">$18.00</div>
                         </div>
                         <div className="inset-y-1/4 border-dotted border-gray-900"></div>
                         <div className="font-base">Perfect way to relieve all that unwanted stress in body.</div>
                     </div>
                     <div className=" border-b-2 border-b-gray-600">
                         <div className="flex">
                             <h3 className="relative overflow-visible w-auto mt-0 mr-auto mb-0 pr-2 justify-start items-start bg-white text-xl text-left capitalize font-semibold  ">Foot Massage</h3>
                             <div className="pl-2 bg-white">from</div>
                             <div className="pl-2 text-gray-900 text-xl bg-white">$25.00</div>
                         </div>
                         <div className="inset-y-1/4 border-dotted border-gray-900"></div>
                         <div className="font-base">Get a relaxing massage focused on your feet and lower legs.</div>
                     </div>
                     <div className=" border-b-2 border-b-gray-600">
                         <div className="flex">
                             <h3 className="relative overflow-visible w-auto mt-0 mr-auto mb-0 pr-2 justify-start items-start bg-white text-xl text-left capitalize font-semibold  ">Scalp Treatments</h3>
                             <div className="pl-2 bg-white">from</div>
                             <div className="pl-2 text-gray-900 text-xl bg-white">$15.00</div>
                         </div>
                         <div className="inset-y-1/4 border-dotted border-gray-900"></div>
                         <div className="font-base">Superior gray creates a rich, natural look with less fading.</div>
                     </div>



                     <a href="/services-single"  className="mt-20 mb-2 bg-gray-600 text-white texct-xs font-extrabold text-center uppercase px-8 py-4 border-2 border-gray-600 ease-linear duration-200 trackng-widest hover:bg-transparent hover:text-gray-900">GET AN APPOINTMENT</a>
                     <Image src="https://uploads-ssl.webflow.com/6135e5f06048e4e83fb2c8ab/618f54f0f6c6e0cdc8748bf1_service-box.jpg"
                            width="516" height="517"
                            loading="lazy" alt="Service Pattern" className="hidden"/>
                 </div>
             </div>

         </div>


     </div>






 </>
    )
}
export default OurServices
