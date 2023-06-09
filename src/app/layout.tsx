import './globals.css'
import { Inter } from 'next/font/google'
import Providers from '@/components/Providers'
import NavbarThree from '../components/NavbarThree'
import FooterTwo from '@/components/FooterTwo'
import MainNavbar from "../components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>

        <Providers>
        <MainNavbar/>
        {children}
        <Footer/>
          </Providers>
          
          
          </body>
    </html>
  )
}
