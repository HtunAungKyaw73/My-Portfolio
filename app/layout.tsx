import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'Htun Aung Kyaw Portfolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en"
          /*On toggle, this will change automatically with the help of tailwind.config*/
          className="light" style={{colorScheme:"light"}} >
        <head>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
            <link rel="manifest" href="/site.webmanifest"/>
            <style>{`
                    html {
                      font-family: ${GeistSans.style.fontFamily};
                      --font-sans: ${GeistSans.variable};
                      --font-mono: ${GeistMono.variable};
                    }
                `}</style>
        </head>
        <body /*To prevent rehydration error*/ cz-shortcut-listen="true">{children}</body>
    </html>
  )
}
