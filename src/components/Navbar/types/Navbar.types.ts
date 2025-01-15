export interface NavbarProps {
  data: NavbarData[]
  location: string
  handleOpen: () => void
  isOpen?: boolean
}

export interface NavbarData {
  name: string
  link: string
}
