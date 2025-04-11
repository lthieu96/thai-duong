import { ReactNode } from 'react'
import { NavbarComponent } from './Navbar'

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarComponent />
      <main className="w-full mt-4 lg:mt-6 lg:max-w-5xl mx-auto px-6 ">
        {children}
      </main>
    </div>
  )
}
