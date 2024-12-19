import type { Metadata } from 'next'
import './globals.css'
import 'movinwords/styles'

export const metadata: Metadata = {
  title: 'Movinwords',
  description: 'Movinwords is a robust, lightweight JavaScript library designed for animating sentences, words, and letters.',
  openGraph: {
    siteName: 'Movinwords',
    url: 'https://github.com/revueltai/movinwords',
    title: 'Movinwords',
    description: 'Movinwords is a robust, lightweight JavaScript library designed for animating sentences, words, and letters.',
    images: [
      {
        url: 'https://a.storyblok.com/f/99692/600x315/e650aa1a75/movinwords.jpg',
        width: 600,
        height: 315,
        alt: 'Movinwords',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
