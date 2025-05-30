export interface TabsProps {
  tabIndex: number
  tabs: { label: string; disabled: boolean }[]
  onClick: (index: number) => void
  renderContent?: (index: number) => React.ReactNode
}
