/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'
import PaginationButtons from './PaginationButtons'

export default function ImageSearchResults({ data }: any) {
  return (
    <div className='mx-12 md:mx-32 pb-24'>
      <p className='text-xs text-gray-500 pb-3 pt-2'>
        About {data?.searchInformation?.formattedTotalResults} results ({data?.searchInformation?.formattedSearchTime} seconds)
      </p>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 space-x-6'>
        {data?.items?.map((item: any) => (
          <div className='mb-4 max-w-xl group' key={item.link}>
            <div className='text-xs pt-2'>
              <Link href={item.link} className='truncate'>
                <img src={item.link} alt={item.title} className='h-60 cursor-pointer w-full object-contain group-hover:brightness-105' />
              </Link>
            </div>
            <div className='text-sm text-blue-700 pt-1 group-hover:underline decoration-blue-800'>
              <Link href={item.link}>
                {item.title}
              </Link>
            </div>
            <p className='text-xs text-gray-500 pt-1 truncate'>{item.displayLink}</p>
          </div>
        ))}
      </div>
      <div>
        <PaginationButtons />
      </div>
    </div>
  )
}
