import ImageSearchResults from '@/components/ImageSearchResults';
import Link from 'next/link';
import React from 'react'

async function getResults(q: string, startIndex: any){
  const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.GOOGLE_CONTEXT_KEY}&q=${q}&searchType=image&start=${startIndex}`);
  await new Promise((resolve) => setTimeout(resolve, 300)); // to show loading effect
  if(!response.ok) throw new Error("Something went wrong!"); //this is for developers, need to create error page for users to avoid error breaks the app
  const resp = await response.json();
  //return resp.items;
  return resp;
}

export default async function ImageSearchPage({searchParams}: any) {
  const startIndex = searchParams.start || "1";

  const data = await getResults(searchParams.searchTerm, startIndex);
  const results = await data.items;
  console.log(data);

  if(!results) {
    return (
      <div className="text-center mt-24">
        <p className='mb-8 text-rose-700 text-lg'>No results found...</p>
        <p className='mb-8 text-gray-500 text-sm'>Please try searching something else or go back
          <Link href="/" className='bg-blue-400 rounded py-2 px-4 mx-2 text-white text-xs cursor-pointer hover:shadow-lg focus:shadow-lg transition-shadow'>Home</Link>
        </p>
      </div>
    )
  }
  return (
    <> 
      {results && <ImageSearchResults data={data} />}
    </>
  )
}
