import Link from 'next/link'
import React from 'react'
import { TbGridDots } from 'react-icons/tb'

export default function HomeHeader() {
  return (
    <header>
      <div className='flex justify-end items-center p-6 space-x-6'>
        <Link href='https://mail.google.com' className='hover:underline text-sm'>Gmail</Link>
        <Link href='https://image.google.com' className='hover:underline text-sm'>Images</Link>
        <TbGridDots className='bg-transparent hover:bg-gray-200 rounded-full text-lg' />
        <button className='bg-blue-500 text-white rounded px-4 py-2 text-sm mr-2 hover:brightness-105 hover:shadow-md transition-shadow'>Sign in</button>
      </div>
    </header>
  )
}
