'use client'

import { Button } from '@/components/Button'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { PaginationProps } from '../types/Pagination.types'
import { getVisiblePages } from '../utils'

const Pagination = ({ currentPage, onChange, hasNextPage, hasPrevPage, totalPages = 5 }: PaginationProps) => {
  const visiblePages = getVisiblePages({ totalPages, currentPage })

  return (
    <div className='flex flex-row w-full justify-between items-center gap-2 sm:gap-4 mt-10'>
      <div>
        <Button
          variant={hasPrevPage ? 'primary' : 'primary-outline'}
          size='large'
          disabled={!hasPrevPage}
          onClick={() => {
            onChange?.(currentPage - 1)
          }}
          className={`flex items-center px-1 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm ${
            hasPrevPage ? 'bg-[#0C6DFD] text-white' : 'border'
          }`}
        >
          <ArrowLeft className='w-4 h-4 mr-0 sm:mr-2' />
          <span className='hidden sm:inline'>Sebelumnya</span>
        </Button>
      </div>

      <div className='flex gap-1 overflow-x-auto no-scrollbar'>
        {totalPages > 5 && currentPage > 2 && (
          <>
            <Button
              variant='primary-outline'
              size='small'
              onClick={() => {
                onChange?.(1)
              }}
              className='min-w-[28px] sm:min-w-[40px] h-7 sm:h-10 flex items-center justify-center border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 text-xs sm:text-sm'
            >
              1
            </Button>
            {currentPage > 3 && <span className='flex items-center px-0.5 sm:px-1'>...</span>}
          </>
        )}

        {visiblePages.map(p => (
          <Button
            key={p}
            variant={currentPage === p ? 'primary' : 'primary-outline'}
            size='medium'
            onClick={() => {
              onChange?.(p)
            }}
            className={`min-w-[28px] sm:min-w-[40px] h-7 sm:h-10 flex items-center justify-center text-xs sm:text-sm ${
              currentPage === p
                ? 'bg-[#0C6DFD] text-white'
                : 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            {p}
          </Button>
        ))}

        {totalPages > 5 && currentPage < totalPages - 1 && (
          <>
            {currentPage < totalPages - 2 && <span className='flex items-center px-0.5 sm:px-1'>...</span>}
            <Button
              variant='primary-outline'
              size='small'
              onClick={() => {
                onChange?.(totalPages)
              }}
              className='min-w-[28px] sm:min-w-[40px] h-7 sm:h-10 flex items-center justify-center border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 text-xs sm:text-sm'
            >
              {totalPages}
            </Button>
          </>
        )}
      </div>

      <div>
        <Button
          variant={hasNextPage ? 'primary' : 'primary-outline'}
          size='large'
          disabled={!hasNextPage}
          onClick={() => {
            onChange?.(currentPage + 1)
          }}
          className={`flex items-center px-1 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm ${
            hasNextPage ? 'bg-[#0C6DFD] text-white' : 'border'
          }`}
        >
          <span className='hidden sm:inline'>Selanjutnya</span>
          <ArrowRight className='w-4 h-4 ml-0 sm:ml-2' />
        </Button>
      </div>
    </div>
  )
}

Pagination.displayName = 'Pagination'
export default Pagination
