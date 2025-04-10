import {
  Avatar,
  Badge,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@heroui/react'

export default function Index() {
  return (
    <Navbar
      classNames={{
        item: 'data-[active=true]:text-primary',
        wrapper: 'px-4 sm:px-6',
      }}
      height="60px"
    >
      <NavbarBrand>
        <NavbarMenuToggle className="mr-4 h-6 sm:hidden" />
        <Avatar size="sm" src="/logo.jpg" className="mr-2" />
        <p className="font-bold text-lg font-serif">GĐPT Thai Dương</p>
      </NavbarBrand>
      <NavbarContent
        className="ml-4 hidden h-12 w-full max-w-fit gap-4 rounded-full bg-content2 px-4 dark:bg-content1 sm:flex"
        justify="start"
      >
        <NavbarItem isActive>
          <Link className="flex gap-2 text-inherit" href="#">
            Mật thư
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="flex gap-2 text-inherit" href="#">
            Công cụ
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent
        className="ml-auto flex h-12 max-w-fit items-center gap-0 rounded-full p-0 lg:bg-content2 lg:px-1 lg:dark:bg-content1"
        justify="end"
      >
        <NavbarItem className="px-2">
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <button className="mt-1 h-8 w-8 outline-none transition-transform">
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
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu>
        <NavbarMenuItem isActive>
          <Link className="w-full" color="foreground" href="#">
            Mật thư
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="w-full" color="foreground" href="#">
            Công cụ
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  )
}
