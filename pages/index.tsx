import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <>
      <nav className="bg-gray-200">
        <div className="max-w-7xl mx-auto md:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 hidden md:block">
              <img className="h-8 w-8" src="/favicon.ico" alt="Logo" />
            </div>
            <div className="flex-grow">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href={'/rmi'}>
                  <div className="bg-white text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                    C++
                  </div>
                </Link>
                <Link href={'/mpi'}>
                  <div className="bg-white text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                    Python
                  </div>
                </Link>
                <Link href={'/berkeley'}>
                  <div className="bg-white text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                    Javascript
                  </div>
                </Link>
                <Link href={'/tokenRing'}>
                  <div className="bg-white text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                    Java
                  </div>
                </Link>
                <Link href={'/bully'}>
                  <div className="bg-white text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                    PHP
                  </div>
                </Link>
              </div>
            </div>
            <div className='bg-blue-600 text-slate-50 w-20 h-10 md:flex justify-center items-center rounded-lg hidden'>
              Run
            </div>
          </div>
        </div>
      </nav>


      <div className='flex'>
        <div className='w-[55%] h-screen border-black border-r-2'>
          <div className='h-10 bg-slate-400 font-bold text-lg flex items-center border-b-2 border-black'> <div className='bg-white h-10 pl-10 pr-5'>main.cpp</div> </div>
          <textarea  className='w-full h-screen p-4 outline-none'></textarea>
        </div>
        <div className='w-[45%] h-screen'>
          <div className='h-10 bg-slate-400 font-bold text-lg flex items-center border-b-2 border-black'> <div className='bg-white h-10 pl-10 pr-5'>Output</div> </div>
          <textarea  className='w-full h-screen p-4 outline-none'></textarea>
        </div>
      </div>
    </>
  )
}

export default Home
