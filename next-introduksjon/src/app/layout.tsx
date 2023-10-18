import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
    <h1>Welcome to Next.js!</h1>
    <Link href="demo.js">Go to Demo</Link>
  </div>
  )
}
