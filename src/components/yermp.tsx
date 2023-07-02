import React from 'react'
import Container from './Container'
import Image from 'next/image'

const Hero = () => {
    return (
        <>
            <Container className="flex flex-wrap">

                <div className="flex items-center w-full lg:w-1/2">
                    <div className="max-w-2xl mb-8">
                        <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
                            Bring the Well Being and beauty naturally
                        </h1>
                        <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
                            Your body does a lot for you, and your caring therapist can help return the favour in a way that benefits your
                            physical and mental wellness.
                        </p>

                        <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener"
                                className="px-8 py-4 text-lg font-medium text-center text-white bg-gray-600 rounded-md ">
                                Make a Reservation
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center w-full lg:w-1/2">

                    <Image src='/images/hero.jpeg'  width="516" height="517"
                           className="object-cover rounded-lg"
                           alt="Hero Illustration"
                        // loading="eager"
                        // placeholder="blur"
                    />
                </div>





            </Container>

        </>
    )
}
