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
        <Meta />
        <Links />
      </head>
      <body>
        <HeroUIProvider>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
        </HeroUIProvider>
      </body>
    </html>
  )
}
