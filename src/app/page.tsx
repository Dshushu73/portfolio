'use client'

import { inter, space_mono } from './lib/fonts'
import Link from 'next/link';

export default function Page() {
  return (
    <div className={`${space_mono.className} min-h-screen bg-gray-900`}>
      <div className="max-w-2xl mx-auto px-4 sm:px-8 md:px-16 lg:px-32 py-6 sm:py-8 lg:py-12 min-h-screen flex flex-col">
        <div className="flex-1 flex flex-col space-y-3 sm:space-y-4">
          <h1 className={`${inter.className} text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-300 mb-6 sm:mb-8 lg:mb-12 text-left`}>David</h1>
          <p className="text-lg sm:text-xl text-gray-300 text-left">
            Learning to build stuff with code
          </p>
          <p className="text-gray-300">
            Contact me: <a href="mailto:davidhsu727@gmail.com" className='font-bold underline underline-offset-4'>davidhsu727@gmail.com</a>
          </p>
          <p className="text-gray-300"><a href="https://github.com/Dshushu73" className='font-bold underline underline-offset-4'>github</a></p>
          
          <div className='mt-10 sm:mt-16 lg:mt-20 space-y-3 sm:space-y-4'>
            <h2 className='font-bold text-xl sm:text-2xl text-gray-300'>Projects</h2>
            
       
            <div className='border-2 border-gray-300'>
           
              <div className='border-b-2 border-gray-300 last:border-b-0'>
                <div className='flex flex-col sm:flex-row'>
                  <div className='px-2 py-2 sm:px-2 sm:py-2 font-bold sm:w-1/4 border-b sm:border-b-0 sm:border-r-2 border-gray-300'>
                    <Link href='./todo' className='underline text-gray-300 hover:text-white'>Todo</Link>
                  </div>
                  <div className='px-2 py-2 flex-1 text-gray-300'>
                    <p>TypeScript, React</p>
                  </div>
                </div>
              </div>
              
           
              <div className='border-b-2 border-gray-300 last:border-b-0'>
                <div className='flex flex-col sm:flex-row'>
                  <div className='px-2 py-2 sm:px-2 sm:py-2 font-bold sm:w-1/4 border-b sm:border-b-0 sm:border-r-2 border-gray-300'>
                    <Link href='./tictactoe' className='underline text-gray-300 hover:text-white'>TicTacToe</Link>
                  </div>
                  <div className='px-2 py-2 flex-1 text-gray-300'>
                    <p>TypeScript, React</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

