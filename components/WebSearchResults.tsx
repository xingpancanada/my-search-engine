import Link from 'next/link'
import React from 'react'
import parse from 'html-react-parser';

export default function WebSearchResults({data}: any) {
  return (
    <div className='mx-12 md:mx-32 pb-24'>
      <p className='text-xs text-gray-500 pb-3 pt-2'>
        About {data?.searchInformation?.formattedTotalResults} results ({data?.searchInformation?.formattedSearchTime} seconds)
      </p>
      {data?.items?.map((item: any) => (
        <div className='mb-4 max-w-xl group' key={item.link}>
          <div className='text-xs pt-2'>
            <Link href={item.link} className='truncate'>
              {item.formattedUrl}
            </Link>
            </div>
            <div className='text-sm text-blue-700 pt-1 group-hover:underline decoration-blue-800'>
            <Link href={item.link}>
              {item.title}
            </Link>
          </div> 
          <p className='text-xs text-gray-500 pt-1 truncate'>{parse(item.htmlSnippet)}</p>
        </div>
      ))}
    </div>
  )
}
