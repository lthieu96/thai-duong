import { HeroUIProvider } from '@heroui/react'
import type { MetaFunction } from '@remix-run/node'
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import './tailwind.css'

export const meta: MetaFunction = () => {
  return [{ title: 'GĐPT Thai Dương' }]
}

export default function App() {
  return (
    <html lang="vi">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700&family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
        <Meta />
        <Links />
      </head>
      <body suppressHydrationWarning>
        <HeroUIProvider>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
        </HeroUIProvider>
      </body>
    </html>
  )
}
