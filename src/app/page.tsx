import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import WhyUs from "@/components/WhyUs";
import OurServices from "@/components/OurServices";
import Testimonial from "@/components/Testimonial";
import BookAppointment from "@/components/BookAppointment";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
   <Hero/>
   <WhatWeDo/>
  <WhyUs/>
        <OurServices/>
        <Testimonial/>
        <BookAppointment/>
    </main>
  )
}
