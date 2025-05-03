export interface NavItem {
  label: string
  path: string
  children?: NavItem[]
}

export const mainNavigation: NavItem[] = [
  {
    label: 'Giới thiệu',
    path: '/',
  },
  {
    label: 'Mật thư',
    path: '/mat-thu',
  },
  {
    label: 'Công cụ',
    path: '/tools',
  },
]

// This can be expanded later with additional navigation sections
export const footerNavigation: NavItem[] = [
  {
    label: 'Về chúng tôi',
    path: '/about',
  },
  {
    label: 'Liên hệ',
    path: '/contact',
  },
]

// Example of nested navigation for future expansion
export const userNavigation: NavItem[] = [
  {
    label: 'Tài khoản',
    path: '/account',
    children: [
      {
        label: 'Hồ sơ',
        path: '/account/profile',
      },
      {
        label: 'Cài đặt',
        path: '/account/settings',
      },
    ],
  },
]
