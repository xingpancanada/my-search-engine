"use client"
import Link from 'next/link'
import { TbGridDots } from 'react-icons/tb'

export default function HomeHeader() {
  
  return (
    <header>
      <div className='flex justify-end items-center p-6 space-x-6'>
        <Link href='https://mail.google.com' className='hover:underline text-sm'>Gmail</Link>
        <Link href='https://image.google.com' className='hover:underline text-sm'>Images</Link>
        <div className='dropdown inline-block relative group'>
          <div className='p-2 hover:bg-gray-200 rounded-full'>
            <TbGridDots className='text-lg' />
          </div>
          <div className='dropdown-menu absolute pt-1 invisible group-hover:visible text-gray-700 text-xs'>
            <Link href="https://workspace.google.com/" className='block rounded w-24 px-2 py-1 text-center bg-gray-600 hover:opacity-90 text-white'>Google apps</Link>
          </div>
        </div>
        <button className='bg-blue-500 text-white rounded px-4 py-1 text-sm mr-2 hover:brightness-105 hover:shadow-md transition-shadow'>Sign in</button>
      </div>
    </header>
  )
}
