import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import WhyUs from "@/components/WhyUs";
import OurServices from "@/components/OurServices";
import Testimonial from "@/components/Testimonial";
import BookAppointment from "@/components/BookAppointment";
import Blog from "@/components/Blog";



export default function Home() {
  return (
    <main>
   <Hero/>
   <WhatWeDo/>
  <WhyUs/>
        <OurServices/>
        <Testimonial/>
        <Blog/>
        <BookAppointment/>
    </main>
  )
}
