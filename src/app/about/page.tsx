import React from 'react'
import AboutUsHeader from "../../components/about-us/AboutUsHeader";
import TopServices from "@/components/about-us/TopServices";
import CallToAction from "@/components/about-us/CallToAction";
import Founder from "@/components/about-us/Founder";
import OurTeam from "@/components/about-us/OurTeam";
import Testimonial from "@/components/Testimonial";

const Page = () => {
    return (

        <>
        <AboutUsHeader/>
            <TopServices/>
<CallToAction/>
            <Founder/>
            <OurTeam/>
            <Testimonial/>


        </>
    )
}
export default Page
