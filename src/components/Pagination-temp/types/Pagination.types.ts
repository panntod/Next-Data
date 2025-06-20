export interface PaginationProps {
  currentPage: number
  onChange: (page: number) => void
  hasNextPage: boolean
  hasPrevPage: boolean
  totalPages?: number
}

export interface PaginationGetVisiblePagesParams {
  totalPages: number
  currentPage: number
}
