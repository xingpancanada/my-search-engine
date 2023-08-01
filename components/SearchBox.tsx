
'use client'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsFillMicFill } from 'react-icons/bs'
import { RxCross2 } from 'react-icons/rx'
import { toast } from 'react-toastify'


export default function SearchBox() {
  const searchParams = useSearchParams(); //get search params from web address
  const searchTerm = searchParams.get("searchTerm");
  const [term, setTerm] = useState(searchTerm || ""); 
  const router = useRouter();

  function handleSubmit(e: any){
    e.preventDefault();
    if(!term.trim()) {
      toast.warn("Please enter your search!");
      return;
    }
    router.push(`/search/web?searchTerm=${term}`)
  }
  
  return (
    <form onSubmit={handleSubmit} className='flex w-full max-w-[80%] h-10 items-center border border-gray-200 rounded-3xl hover:shadow-md focus:shadow-md transition-shadow sm:max-w-xl lg:max-w-4xl'>
      <input type="text" placeholder='my search' className='flex-grow focus:outline-none antialiased ml-5'
        onChange={(e) => setTerm(e.target.value)}
        value={term}
      />
      <RxCross2 className='text-gray-400 mr-3 ml-2 text-lg cursor-pointer' onClick={() => setTerm("")} />
      <RxCross2 className='hidden sm:inline-flex text-transparent text-md border-l-2 border-gray-200 text-lg' />
      <BsFillMicFill className='hidden sm:inline-flex text-blue-300 mr-2 text-md cursor-pointer' />
      <AiOutlineSearch className='text-lg text-gray-400 m-2 SearchIcon cursor-pointer mr-2' onClick={handleSubmit} />
    </form>
  )
}
