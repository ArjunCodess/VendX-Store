import Navbar from '@/components/navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import Footer from '@/components/footer'
import ToastProvider from '@/providers/toast-provider'

const urban = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'VendX Store',
    description: 'VendX Store',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={urban.className}>
                <ToastProvider />
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    )
}