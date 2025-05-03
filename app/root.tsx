import { HeroUIProvider } from '@heroui/react'
import type { MetaFunction } from '@remix-run/node'
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import { Layout } from './components/Layout'
import './tailwind.css'
import './landing-page.css'
import './styles/magic-pattern.css'

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
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
          rel="stylesheet"
        />
        <Meta />
        <Links />
      </head>
      <body suppressHydrationWarning className="magicpattern-landing">
        <HeroUIProvider>
          <Layout>
            <Outlet />
          </Layout>
          <ScrollRestoration />
          <Scripts />
        </HeroUIProvider>
      </body>
    </html>
  )
}
