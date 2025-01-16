'use client'

import cn from '@/lib/clsx'
import { useState } from 'react'
import { SectionWrapper } from '../../Layout'
import { Typography } from '../../Typography'
import { AccordionProps } from '../types/Accordion.types'

export function Accordion({ data = [], showNumber = false }: Readonly<AccordionProps>) {
  const [expanded, setExpanded] = useState<string | false>(false)

  const handleChange = (panel: string) => () => {
    setExpanded(prevExpanded => (prevExpanded === panel ? false : panel))
  }

  return (
    <SectionWrapper id='accordion-collapse' className='space-y-2' data-accordion='collapse'>
      {data.map((item, index) => {
        const panelId = `accordion-panel-${index}`
        const isExpanded = expanded === panelId

        return (
          <SectionWrapper id={panelId} key={'key-' + index}>
            <button
              id={`accordion-collapse-heading-${index}`}
              type='button'
              onClick={handleChange(panelId)}
              className={cn(
                `flex items-center justify-between w-full p-4 rtl:text-right border border-gray-100 hover:bg-gray-100 z-10`,
                isExpanded ? 'rounded-t-xl border-b-0' : 'rounded-xl shadow-lg'
              )}
              data-accordion-target={`#accordion-collapse-body-${index}`}
              aria-expanded={isExpanded}
              aria-controls={`accordion-collapse-body-${index}`}
            >
              <Typography size='TITLE_MD' className='font-normal'>
                {showNumber && `${index + 1}. `} {item.title}
              </Typography>

              <svg
                data-accordion-icon
                className={cn(`w-3 h-3 transition-all transform shrink-0`, isExpanded ? 'rotate-180' : 'rotate-0')}
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 10 6'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M9 5 5 1 1 5'
                />
              </svg>
            </button>

            <div
              id={`accordion-collapse-body-${index}`}
              className={cn(
                `rounded-b-xl p-5 border border-t-0 shadow-lg border-gray-100 transition-all z-0`,
                isExpanded ? 'block' : 'hidden'
              )}
              aria-labelledby={`accordion-collapse-heading-${index}`}
            >
              {typeof item.content === 'string' ? (
                <Typography size='BODY_MD_NORMAL' className='text-gray-600'>
                  {item.content}
                </Typography>
              ) : (
                item.content
              )}
            </div>
          </SectionWrapper>
        )
      })}
    </SectionWrapper>
  )
}
