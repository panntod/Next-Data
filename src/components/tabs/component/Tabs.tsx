import { FC } from 'react'
import { TabsProps } from '../types/Tabs.types'

const Tabs: FC<TabsProps> = ({ tabIndex, tabs, onClick, renderContent }) => {
  return (
    <>
      <div className='text-sm font-medium text-center text-gray-500'>
        <ul className='flex flex-wrap -mb-px'>
          {tabs.map((tab, index) => (
            <li key={index} className='me-2'>
              {tab.disabled ? (
                <span className='inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500'>
                  {tab.label}
                </span>
              ) : (
                <button
                  type='button'
                  onClick={() => onClick(index)}
                  className={`inline-block p-4 border-b-2 rounded-t-lg 
                  ${
                    tabIndex === index
                      ? 'text-blue-600 border-blue-600 active'
                      : 'border-transparent hover:text-gray-600 hover:border-gray-300'
                  }`}
                >
                  {tab.label}
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className='p-4'>{renderContent ? renderContent(tabIndex) : null}</div>
    </>
  )
}

Tabs.displayName = 'Tabs'
export default Tabs
