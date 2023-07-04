import React from 'react'
import TopServices from "@/components/about-us/TopServices";
import CallToAction from "@/components/about-us/CallToAction";
import Founder from "@/components/about-us/Founder";
import OurTeam from "@/components/about-us/OurTeam";
import Testimonial from "@/components/Testimonial";
import Header from "@/components/Header";
import Team from "@/components/Team";
import Gallery from "@/components/about-us/Gallery";

const Page = () => {
    return (

        <>
        <Header title='     Short Story about us' subtitle='The big story behind, our massage center'/>
            <TopServices/>
<CallToAction/>
            <Founder/>
            <Team/>
            <Gallery/>
            <Testimonial/>


        </>
    )
}
export default Page
