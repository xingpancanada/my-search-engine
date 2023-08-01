import HomeHeader from '@/components/HomeHeader'
import HomeSearch from '@/components/HomeSearch'
import Image from 'next/image'


export default function Home() {
  return (
    <main className="">
      <HomeHeader />

      <div className='flex items-center mt-20'>
        <div className='grid justify-items-center min-w-full'>
          <Image 
            src="/BigAlsCanada.png" 
            alt='logo'
            width="120"
            height="120"
            className='rounded-3xl shadow-sky-100 my-10 duration-300 transition-all ease-in-out hover:shadow-sky-50 hover:shadow-xl hover:-translate-y-1 bg-transparent'
          />
          {/* <p className='pt-1 text-slate-300 pb-8 text-xs'>My Search Engine</p> */}

          <HomeSearch />
        </div>
      </div>

    </main>
  )
}
