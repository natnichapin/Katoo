'use client'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './(component)/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
  
    //The root layout must define <html> and <body> tags since Next.js does not automatically create them.
    <html lang="en">
      
      <body className="w-screen h-screen  text-xl text-blue-300 text-center bg-black" >
      <Navbar/>
        
        {children}
        </body>

    </html>
  )
}
