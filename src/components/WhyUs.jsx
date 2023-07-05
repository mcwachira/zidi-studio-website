import React from 'react'
import Image from "next/image";

const WhyUs = () => {
    return (
        <>
            <div className=" pt-24 pb-16 bg-gray-200 w-full">
<div className='ml-auto mr-auto max-w-max pr-5 pl-5'>
                <div className='w-full grid aut-cols-max auto-rows-max  md:grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-4 my-40 '>

                    <div className="pr-0">
                        <div className='text-left'>
                            <div className="pb-1 text-gray-600 text-base font-semibold tracking-widest uppercase">
                                Take care of your self
                            </div>
                            <h2 className="mt-0 mb-4 text-4xl tracking-normal leading-snug font-bold text-gray-900 ">

                                Elevate Your Lifestyle by Bring Balance and Well Being Into Your Life
                            </h2>

                            <div className='pt-0 pb-5 text-gray-700 leading-relaxed'>
                                Escape the everyday stress at Zindi: Indulge in a soothing massage session and embrace pure relaxation in the breathtaking setting of Diani.   </div>
                        </div>

                        <div className='pt-8'>
                            <div className='flex flex-wrap items-center gap-4'>
                                <div
                                    className="flex mr-2 ml-2 px-12 py-5 flex-col items-center bg-white border-2 border-gray-900 first:ml-0 first:bg-white">
                                    <Image
                                        src="https://uploads-ssl.webflow.com/6135e5f06048e4e83fb2c8ab/618f473e1e3bd92a8bb6ece4_about-icon-one.svg"
                                        width="55" height="55"
                                        alt="About Icon"
                                        className="text-center"/>
                                    <h3 className="mt-3 text-xl text-center mb-0">Beauty  <br/>Experts</h3>
                                </div>
                                <div
                                    className="flex mr-1 ml-1 px-12 py-5 flex-col items-center bg-white border-2 border-gray-900">
                                    <Image
                                        src="https://uploads-ssl.webflow.com/6135e5f06048e4e83fb2c8ab/618f473e7ca5fb6466638b30_about-icon-two.svg"
                                        width="80" height="80"
                                        loading="lazy" alt="About Icon"  className="text-center"/>
                                    <h3 className="mt-3 text-xl text-center mb-0">Quality<br/>Services</h3>
                                </div>
                                <div
                                    className="flex mr-1 ml-1 px-12 py-5 flex-col items-center bg-white border-2 border-gray-900 last-child:px-4 last-child:py-12">
                                    <Image
                                        src="https://uploads-ssl.webflow.com/6135e5f06048e4e83fb2c8ab/618f473ecd54744a3d6292ba_about-icon-three.svg"
                                        width="70" height="70"
                                        loading="lazy" alt="About Icon"  className="text-center"/>
                                    <h3 className="mt-3 text-xl text-center mb-0">100%<br/>Nature</h3>
                                </div>
                            </div>
                        </div>
                    </div>







                        <div className="mt-8 sm:mt-0">
                            <Image
                                src="https://uploads-ssl.webflow.com/6135e5f06048e4e83fb2c8ab/618f48751328985dc398bddc_about-girl-image.jpg"
                                loading="lazy" alt="Care Girl Image" className=" shadow-lg object-cover "
                                width="516" height="517"/>



                        </div>
                    </div>




                    </div>

            </div>




        </>
    )

}
export default WhyUs
