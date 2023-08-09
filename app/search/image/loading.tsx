import Image from 'next/image'
import React from 'react'

export default function Loading() {
  return (
    <div className='mx-2 pt-12 max-w-6xl pl-12 lg:pl-32 sm:space-x-12 flex flex-col sm:flex-row'>
      <div className='animate-pulse'>
        <div className='h-48 w-52 bg-gray-200 rounded-md mb-4'></div>
        <div className='h-2 w-48 bg-gray-200 rounded-md mb-2.5'></div>
        <div className='h-2 w-44 bg-gray-200 rounded-md mb-2.5'></div>
      </div>
      <div className='animate-pulse'>
        <div className='h-48 w-52 bg-gray-200 rounded-md mb-4'></div>
        <div className='h-2 w-48 bg-gray-200 rounded-md mb-2.5'></div>
        <div className='h-2 w-44 bg-gray-200 rounded-md mb-2.5'></div>
      </div>
      <div className='animate-pulse'>
        <div className='h-48 w-52 bg-gray-200 rounded-md mb-4'></div>
        <div className='h-2 w-48 bg-gray-200 rounded-md mb-2.5'></div>
        <div className='h-2 w-44 bg-gray-200 rounded-md mb-2.5'></div>
      </div>
    </div>
  )
}