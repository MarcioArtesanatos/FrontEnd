
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import './globals.css'
import { Montserrat, Lobster } from 'next/font/google'


const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-mont' })
const lobster = Lobster({ subsets: ['latin'], weight: '400', variable: '--font-lob' })

export const metadata = {
  title: 'Márcio Artesanatos | Brinquedos Educativos',
  description: 'Brinquedos educativos com preço de atacado e varejo 🧸🧩🎨',
  name: "viewport", content: "width=device-width, initial-scale=1"
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">

      <body className={`${montserrat.variable} ${lobster.variable} w-full min-h-screen z-10`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
