import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SearchBox from './SearchBox'
import { RiSettings3Line } from 'react-icons/ri'
import { TbGridDots } from 'react-icons/tb'
import SearchHeaderOptions from './SearchHeaderOptions'

export default function SearchHeader() {
  return (
    <header className='sticky top-0 py-6'>
      <div className='flex w-full px-10 items-center justify-between'>
        <Link href={''}>
          <Image 
            src="/BigAlsCanada.png" 
            alt='logo'
            width="60"
            height="60"
            className='rounded shadow-sky-100 duration-300 transition-all ease-in-out hover:shadow-sky-50 hover:shadow-xl hover:-translate-y-1 bg-transparent'
          />
        </Link>
        <div className='flex-1 mx-6'>
          <SearchBox />
        </div>
        <div className='hidden md:inline-flex space-x-2'>
          <RiSettings3Line className='header-icon' />
          <TbGridDots className='header-icon' />
        </div>
        <button className='bg-blue-500 text-white rounded px-4 py-1 text-sm mr-2 hover:brightness-105 hover:shadow-md transition-shadow mx-4'>Sign in</button>
      </div>
      <SearchHeaderOptions />
    </header>
  )
}
