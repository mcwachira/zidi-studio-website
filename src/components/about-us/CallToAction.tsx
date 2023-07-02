import React from 'react'
import Image from "next/image";

const CallToAction = () => {
    return (

        <>
            <div className="relative bg-gray-900 ">
                <div className="relative pt-24 pd-24 grid  md:grid-cols-1 lg:grid-cols-2 grid-flow-rows gap-y-20 bg-gray-900
                 aign-center justify-center  ">
                    <div className="relative">
                        <Image
                            src="https://uploads-ssl.webflow.com/6135e5f06048e4e83fb2c8ab/618f70757849be2e6262c674_lifestyle-girl.jpg"
                            loading="lazy" alt="Care Girl Image" className="relative z-10 shadow-lg "
                            width="516" height="517"/>
                        <Image
                            src="https://uploads-ssl.webflow.com/6135e5f06048e4e83fb2c8ab/618f487689cbccaa098d6e96_about-pattern-bg.jpg"
                            loading="lazy" alt="About Pattern" className="absolute left-auto bottom-auto -top-10 -right-10 hidden"
                            width="516" height="517"/>
                </div>

                    <div className="pr-16">
                        <div
                             className="text-left ">
                            <div className="text-white pd-1 text-sm tracking-widest uppercase font-semibold">Take Your Care To Next</div>
                            <h2 className="text-white mt-0 mb-4 text-4xl tracking-normal leading-snug font-bold ">Elevate Your Lifestyle <br/>by Bring Balance &amp; Well Being
                                to your life</h2>
                            <div className="text-white pt-1 pb-2 leading-relaxed">Designed to allow you to unwind and feel confident
                                that you’re in good, caring hands. Our first priority is cleanliness. We have a full-time
                                staff whose job is to ensure that the environment at Beautyness remains pristine.<br/></div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}
export default CallToAction








