'use client'

import { useEffect } from "react"

export default function Error({ error, reset }:any) {
  useEffect(() => {
    console.log("Error: ", error)
  }, [error]);
  return (
    <div className="text-center mt-24">
      <p className='mb-8 text-rose-700'>Something went wrong...</p>
      <button onClick={() => reset()} className='text-sm bg-rose-300 px-6 py-2 rounded-lg hover:text-rose-700 hover:bg-rose-200 shadow-lg'>Try Again</button>
    </div>
  )
}
