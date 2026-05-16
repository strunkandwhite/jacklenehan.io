import { Lato } from 'next/font/google'
import '../src/stylesheets/styles.scss'

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '700'],
  display: 'swap',
  variable: '--font-lato',
})

export const metadata = {
  title: 'Jack Lenehan',
  description: 'Personal website of Jack Lenehan',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={lato.variable}>
      <body>{children}</body>
    </html>
  )
}
