"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

const Home = () => {
  const [input, setInput] = useState<string>('')
  const [searchResults, setSearchResults] = useState<{
    result: string[]
    duration: number
  }>()

  useEffect(() => {
    const fetchData = async () => {
      if (!input) return setSearchResults(undefined)

      const res = await fetch(`/api/search?q=${input}`)
    }

    fetchData()
  }, [input])

  return (
    <main className="h-screen w-screen grainy">
      <div className="flex flex-col gap-6 items-center pt-32 duration-500 animate-in animate fade-in-5 slide-in-from-bottom-2.5'">
        <Image
          src="/home.png"
          width={200}
          height={200}
          alt="Home page dishes"
          className="cover"
        />

        <h1 className='text-5xl tracking-tight font-bold flex items-center justify-center'>
          Speed Search
        </h1>

        <p className='text-zinc-600 text-lg max-w-prose text-center px-4'>
          A high-performance API built with Hono, Next.js and Cloudflare. Type a query below and get your results in miliseconds.
        </p>

        <div className="max-w-md w-full">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="text-black"
          />
        </div>
      </div>

    </main>
  )
}
export default Home