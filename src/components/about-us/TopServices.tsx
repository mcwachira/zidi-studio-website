import React from 'react'
import Image from "next/image";

const TopServices = () => {
    return (

<>
        <div className="max-w-full  mr-auto ml-auto pr-5 pl-5 pt-20 ">

            <div   className="text-center">
            <div className="pb-1 text-gray-600 text-base font-semibold tracking-widest uppercase">
                Creative Excellence
            </div>
            <h2 className="mt-0 mb-4 text-5xl tracking-normal leading-snug font-bold text-gray-900 text-center">

                Therapeutic Blends to Promote Wellness
            </h2>
{/*//justify-center align-start border-b-2 border-gray-300 mb-10 pb-8  pt-16*/}

                {/*flex mr-auto ml-auto px-auto py-auto  items-center*/}
            </div>
            <div    className="pt-12 ml-auto mx-auto w-3/4 ">
                <div   className="flex gap-3 justify-center align-start border-b-2 border-gray-300 mb-10 pb-8 pt-4">
                    <div
                        className="w-40 h-40  flex-row gap-3 justify-center align-center mr-2   bg-gray-200  px-8  py-8 flex border-2 border-gray-400">
                        <Image
                            src="https://uploads-ssl.webflow.com/6135e5f06048e4e83fb2c8ab/618f473e1e3bd92a8bb6ece4_about-icon-one.svg"
                            width="200" height="200"
                            alt="About Icon"
                          />
                    
                    </div>

                    <div className="pt-5 pr-5 pl-5 flex-auto">
                        <h3 className="mt-0 mb-2 text-2xl">The Skilled Beauty Experts</h3>
                        <div className="leading-relaxed">Your wellness goals and the areas of preference, then unwind
                            with a customized massage experience facials, massages, wraps, scrubs, manicures and much
                            more.
                        </div>
                    </div>
                </div>

                <div   className="flex flex-row gap-3 justify-center align-start border-b-2 border-gray-300 mb-10 pb-4 pt-4">
                    <div className="w-40 h-40  flex-row gap-3 justify-center align-center mr-2

                     bg-gray-200  px-8  py-8 flex border-2 border-gray-400">


                        <Image
                            src="https://uploads-ssl.webflow.com/6135e5f06048e4e83fb2c8ab/618f473e7ca5fb6466638b30_about-icon-two.svg"
                            width="150" height="150"
                            loading="lazy" alt="About Icon"  className="text-center"/>
                    </div>
                    <div className="pt-5 pr-5 pl-5 flex-auto">
                        <h3 className="mt-0 mb-2 text-2xl">Clear &amp; Quality Services</h3>
                        <div className="leading-relaxed">We are a full-service salon and spa offering over a hundred
                            services including hair cutting, styling, color and extensions. Looking for a tranquil
                            escape.
                        </div>
                    </div>
                </div>

                <div   className="flex flex-row gap-3 justify-center align-start border-b-2 border-gray-300 mb-10 pb-4 pt-4">
                    <div className="w-36 h-36  flex-row gap-3 justify-center align-center mr-2

                     bg-gray-200  px-8  py-8 flex border-2 border-gray-400">


                        <Image
                            src="https://uploads-ssl.webflow.com/6135e5f06048e4e83fb2c8ab/618f473ecd54744a3d6292ba_about-icon-three.svg"
                            width="100" height="100"
                            loading="lazy" alt="About Icon"  className="text-center"/>
                    </div>
                    <div className="pt-5 pr-5 pl-5 flex-auto">
                        <h3 className="mt-0 mb-2 text-2xl">Natural products</h3>
                        <div className="leading-relaxed">

                                      helps you cross the finish line. At Massage Heights, we’re dedicated to helping you live
                                    happier.
                        </div>
                    </div>
                </div>
            </div>


        </div>

</>

    )
}
export default TopServices
