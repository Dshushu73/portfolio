'use client'

import { inter, space_mono } from '../lib/fonts'
import Board from "./board"
import Link from "next/link"


export default function Page() {
    return (
        <div className={`${space_mono.className} min-h-screen bg-gray-900`}>
            <div className="px-2 py-2"><Link href="/">home</Link></div>
            <div className="py-8">
                <Board />
            </div>
        </div>


    )
}