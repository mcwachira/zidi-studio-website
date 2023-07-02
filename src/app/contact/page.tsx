import React from 'react'
import ContactForm from "@/components/contact-us/ContactForm";
import CallToAction from "@/components/contact-us/CallToAction";
import Header from "@/components/Header";

const Page = () => {
    return (
       <>

           <Header title='     Short Story about us' subtitle='The big story behind, our beautyness center'/>

           <CallToAction/>
           <ContactForm/>

       </>
    )
}
export default Page
