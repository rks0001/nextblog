import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import { Roboto } from 'next/font/google'
import Footer from '@/components/footer/Footer'
import { ThemeProvider } from '@/context/ThemeContext'
import AuthProvider from '@/components/AuthProvider/AuthProvider'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Next Blog',
  description: 'Full Stack Blog App using NextJS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ThemeProvider>
          <AuthProvider>

        <div className='container'> 
        <Navbar/>
        {children}
        <Footer/>
        </div>
          </AuthProvider>
        </ThemeProvider>
       
     
        </body>
       
    </html>
  )
}
