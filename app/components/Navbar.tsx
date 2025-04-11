import {
  Avatar,
  Badge,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@heroui/react'
import { NavLink } from '@remix-run/react'
import { mainNavigation } from '~/lib/navigation'

export function NavbarComponent() {
  return (
    <Navbar
      classNames={{
        item: 'data-[active=true]:text-primary',
        wrapper: 'px-4 sm:px-6 ',
        brand: 'font-serif',
      }}
      height="60px"
      className="border-b"
    >
      <NavbarBrand>
        <NavbarMenuToggle className="mr-4 h-6 sm:hidden" />
        <Avatar size="sm" src="/logo.jpg" className="mr-2" />
        <p className="font-bold text-lg">GĐPT Thai Dương</p>
      </NavbarBrand>
      <NavbarContent
        className="ml-4 hidden h-12 w-full max-w-fit gap-4 rounded-full px-4 sm:flex"
        justify="start"
      >
        {mainNavigation.map((item) => (
          <NavbarMenuItem key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `flex gap-2 text-inherit ${isActive ? 'font-bold text-primary' : ''}`
              }
            >
              {item.label}
            </NavLink>
          </NavbarMenuItem>
        ))}
      </NavbarContent>
      <NavbarItem className="px-2">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <button
              type="button"
              className="mt-1 h-8 w-8 outline-none transition-transform"
            >
              <Badge
                className="border-transparent"
                color="success"
                content=""
                placement="bottom-right"
                shape="circle"
                size="sm"
              >
                <Avatar size="sm" src="" />
              </Badge>
            </button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">From Thai Dương With Love</p>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarItem>

      {/* Mobile Menu */}
      <NavbarMenu>
        {mainNavigation.map((item) => (
          <NavbarMenuItem key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `w-full ${isActive ? 'font-bold text-primary' : ''}`
              }
            >
              {item.label}
            </NavLink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
