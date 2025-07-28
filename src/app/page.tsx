'use client'

import { inter, space_mono } from './lib/fonts'
import Link from 'next/link';

export default function Page() {
  return (
    <div className={`${space_mono.className} min-h-screen bg-gray-900`}>
      <div className="max-w-2xl mx-auto px-32 py-12 h-screen space-y-4">
        <h1 className={`${inter.className} text-5xl font-bold text-gray-300 mb-12 text-left`}>David</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto text-left">
          Learning to build stuff with code
        </p>
        <p>
          Contact me: <a href="davidhsu727@gmail.com" className='font-bold underline underline-offset-4'>davidhsu727@gmail.com</a>
        </p>
        <p><a href="https://github.com/Dshushu73" className='font-bold underline underline-offset-4'>github</a></p>
        <div className='mt-20 space-y-4'>
        <h2 className='font-bold text-2xl'>Projects</h2>
        <table className='border-2 table-fixed w-full'>
          <tbody>
            <tr className='border-2'>
              <td className='border-2 px-2 py-2 font-bold w-1/4 underline'><Link href='./todo'>Todo</Link></td>
              <td className='px-2 py-2'><p>TypeScript, React </p></td>
            </tr>
            <tr>
              <td className='border-2 px-2 py- font-bold w-1/4 underline'><Link href='./tictactoe'>TicTacToe</Link></td>
              <td className='px-2 py-2'><p>TypeScript, React</p></td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
}

