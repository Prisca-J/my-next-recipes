import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'MesRecettes',
    description: 'Découvrez de délicieuses recettes faciles à préparer',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="fr" className="h-full">
        <body className={`${inter.className} flex flex-col min-h-full`}>
        <Navbar />
        <main className="flex-grow bg-gray-50">
            {children}
        </main>
        <Footer />
        </body>
        </html>
    )
}