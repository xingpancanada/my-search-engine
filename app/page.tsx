import HomeHeader from '@/components/HomeHeader'
import HomeSearch from '@/components/HomeSearch'
import Image from 'next/image'


export default function Home() {
  return (
    <main className="">
      <HomeHeader />

      <div className='flex items-center min-h-screen pb-60'>
        <div className='grid justify-items-center min-w-full'>
          <Image 
            src="/BigAlsCanada.png" 
            alt='logo'
            width="120"
            height="120"
            className='bg-transparent rounded-3xl shadow-lg shadow-sky-100 my-10'
          />
          {/* <p className='pt-1 text-sky-600 pb-8 text-xs'>My Search Engine</p> */}

          <HomeSearch />
        </div>
      </div>

    </main>
  )
}
