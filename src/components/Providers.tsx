'use client'
import { ThemeProvider } from "next-themes"
import { ReactNode } from "react"

type ChildrenProps = {

    children?:ReactNode
}

const Providers = ({children}:ChildrenProps) => {
  return (
    <ThemeProvider>{children}</ThemeProvider>
  )
}

export default Providers