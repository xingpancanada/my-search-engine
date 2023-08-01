'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'
import { AiOutlineCamera, AiOutlineSearch } from 'react-icons/ai'

export default function SearchHeaderOptions() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get('searchTerm');

  function selectTab(tab: string){
    router.push(`/search/${tab === "Images" ? "image" : "web"}?searchTerm=${searchTerm}`)
  }

  return (
    <div className='flex items-center justify-center pr-32 md:justify-start md:pl-72 pt-2 select-none'>
      <div onClick={()=>selectTab("All")} className={`flex items-center active:text-blue-400 cursor-pointer border-b-2 border-transparent mx-3 ${pathname === "/search/web" && "!text-blue-400 !border-blue-400"}`}>
        <AiOutlineSearch className='text-md SearchIcon mr-1' />
        <p className='text-xs'>All</p>
      </div>
      <div onClick={()=>selectTab("Images")} className={`flex items-center active:text-blue-400 cursor-pointer border-b-2 border-transparent mx-3 ${pathname === "/search/image" && "!text-blue-400 !border-blue-400"}`}>
        <AiOutlineCamera className='text-md SearchIcon mr-1' />
        <p className='text-xs'>Images</p>
      </div>
    </div>
  )
}
