"use client"
import Loading from '@/app/loading'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsFillMicFill } from 'react-icons/bs'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image';

export default function HomeSearch() {
  const [input, setInput] = useState("")
  const router = useRouter();
  const [randomSearchLoading, setRandomSearchLoading] = useState(false)

  function handleSubmit(e: any){
    e.preventDefault();
    if(!input.trim()) {
      toast.warn("Please enter your search!");
      return;
    }
    router.push(`/search/web?searchTerm=${input}`)
  }

  async function randomSearch(){
    setRandomSearchLoading(true);
    const resp = await fetch('https://random-word-api.herokuapp.com/word').then(res => res.json()).then(data => data[0]);
    if(!resp) return;
    router.push(`/search/web?searchTerm=${resp}`)
    setRandomSearchLoading(false);
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='flex w-full max-w-[70%] h-12 items-center border border-gray-200 rounded-3xl hover:shadow-md focus:shadow-md transition-shadow sm:max-w-xl lg:max-w-3xl'>
        <AiOutlineSearch className='text-lg text-gray-500 m-3 SearchIcon' />
        <input type="text" placeholder='my search' className='flex-grow focus:outline-none antialiased'
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <BsFillMicFill className='text-gray-600 m-3 text-sm' />
      </form>
      <div className='mt-3 flex flex-col sm:flex-row antialiased'>
        <button onClick={handleSubmit} className='btn disabled:opacity-70' disabled={!input}>My Search</button>
        <ToastContainer 
          position="bottom-center"
          autoClose={3000}
          hideProgressBar={true}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          className='text-xs'
        />
        <button onClick={randomSearch} className='btn disabled:opacity-70' disabled={randomSearchLoading}>
          {
            randomSearchLoading ?  (
              <div className='flex justify-center'>
                <Image src="spinner.svg" alt="loading" priority={true} width={30} height={30} />
              </div>
            ) : (
              <p> I&apos;m Feeling lucky</p>
            )
          }
        </button>
      </div>
    </>
  )
}
