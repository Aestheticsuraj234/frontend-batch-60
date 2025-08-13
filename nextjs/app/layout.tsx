import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
    subsets:["latin"],
    weight:["100" ,"200" ,"300" , "400" , "500" , "600" , "700" , "900"]
 })

export const metadata: Metadata = {
  title: 'Hello Next.js',
  description: 'My first Next.js application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
