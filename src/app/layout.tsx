import './globals.css';
import { Poppins } from 'next/font/google';

import Logo from '../assets/favicon.ico';

const poppins = Poppins({ 
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"]
})

// export const metadata = {
//   icons: {
//     icon: Logo
//   },
//   title: 'Consulting webFlow',
//   description: 'Site para consultores de estilo',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
          <link
            rel="icon"
            href="/favicon.ico"
            sizes="any"
          />
          <title>Consulting WebFlow</title>
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
