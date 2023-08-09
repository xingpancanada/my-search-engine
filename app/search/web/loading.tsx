import Image from 'next/image'
import React from 'react'

export default function Loading() {
  return (
    <>
      <div className='mx-2 pt-8 max-w-6xl pl-12 lg:pl-32 animate-pulse'>
        <div className='h-2.5 w-48 bg-gray-200 rounded-full mb-2.5'></div>
        <div className='h-3.5 w-[360px] bg-gray-200 rounded-full mb-2.5'></div>
        <div className='h-2 max-w-[560px] bg-gray-200 rounded-full mb-2.5'></div>
        <div className='h-2 max-w-[520px] bg-gray-200 rounded-full mb-2.5'></div>
      </div>
    </>
  )
}