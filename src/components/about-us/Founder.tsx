import React from 'react'

const Founder = () => {
    return (
        <section className="pt-10 overflow-hidden bg-gray-50 md:pt-0 sm:pt-16 2xl:pt-16">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid items-center grid-cols-1 md:grid-cols-2">

                    <div>
                        <h2 className=" mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Hey 👋 I am
                            <br className="block sm:hidden"/> Irene
                        </h2>
                        <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
                            The visionary founder of Zindi Studio Massage and Salon Palour. A trailblazing woman with a passion for holistic wellness and beauty, Irene embarked on a journey to create a haven of relaxation and rejuvenation in the heart of Diani. With her expertise in massage therapy and salon services, she has curated an exquisite menu of treatments designed to cater to the unique needs of her clients. Irene's commitment to excellence and her dedication to creating a serene and welcoming environment have made Zindi Studio a go-to destination for those seeking the perfect blend of indulgence and self-care.
                        </p>


                    </div>

                    <div className="relative">
                        <img className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2"
                             src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg"
                             alt=""/>

                        <img className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
                             src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/business-woman.png"
                             alt=""/>
                    </div>

                </div>
            </div>
        </section>
    )
}
export default Founder
