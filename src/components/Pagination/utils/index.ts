import { PaginationGetVisiblePagesParams } from '../types/Pagination.types'

export const getVisiblePages = ({ totalPages, currentPage }: PaginationGetVisiblePagesParams) => {
  const visiblePages = []

  // For small screens with limited space
  if (totalPages <= 3) {
    // If 3 or fewer pages, show all
    for (let i = 1; i <= totalPages; i++) {
      visiblePages.push(i)
    }
  } else {
    // For more pages, show a smart selection
    if (currentPage <= 2) {
      // Near the start
      visiblePages.push(1, 2, 3)
    } else if (currentPage >= totalPages - 1) {
      // Near the end
      visiblePages.push(totalPages - 2, totalPages - 1, totalPages)
    } else {
      // In the middle
      visiblePages.push(currentPage - 1, currentPage, currentPage + 1)
    }
  }

  return visiblePages
}
