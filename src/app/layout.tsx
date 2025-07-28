import '@/app/globals.css'
import { Inter, Space_Mono } from 'next/font/google'

export const inter = Inter({ subsets: ['latin'] })
export const space_mono = Space_Mono({ 
    weight: ['400', '700'],
    subsets: ['latin'] })

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (

        <html lang="en">
            <body className={space_mono.className}>
                {/* <NavBar /> */}
                <main>{children}</main>
            </body>
        </html>
    )
}