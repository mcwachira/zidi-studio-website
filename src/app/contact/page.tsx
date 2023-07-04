import React from 'react'
import ContactForm from "@/components/contact-us/ContactForm";
import CallToAction from "@/components/contact-us/CallToAction";
import Header from "@/components/Header";

const Page = () => {
    return (
       <>

           <Header title='Get In touch With Us' subtitle='Ready to serve you 24/7'/>

           <CallToAction/>
           <ContactForm/>

       </>
    )
}
export default Page
