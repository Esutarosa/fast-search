"use client"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import Image from "next/image"
import { useEffect, useState } from "react"

const Home = () => {
  const [input, setInput] = useState<string>('')
  const [searchResults, setSearchResults] = useState<{
    results: string[]
    duration: number
  }>()

  useEffect(() => {
    const fetchData = async () => {
      if (!input) return setSearchResults(undefined)

      const res = await fetch(`/api/search?q=${input}`)
      const data = (await res.json()) as { results: string[]; duration: number }
      setSearchResults(data)
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
          Japanese Dishes
        </h1>

        <p className='text-zinc-600 text-lg max-w-prose text-center px-4'>
          A high-performance API built with Hono, Next.js, and Redis. Enter your query below to receive Japanese cuisine results in milliseconds.
        </p>

        <div className="max-w-md w-full">
          <Command>
            <CommandInput
              value={input}
              onValueChange={setInput}
              placeholder="Search any Japanese food..."
              className="placeholder:text-zinc-500"
            />

            <CommandList>
              {searchResults?.results.length === 0 ? (
                <CommandEmpty>No results found.</CommandEmpty>
              ) : null}

              {searchResults?.results ? (
                <CommandGroup heading='Results'>
                  {searchResults?.results.map((result) => (
                    <CommandItem
                      key={result}
                      value={result}
                      onSelect={setInput}>
                      {result}
                    </CommandItem>
                  ))}
                </CommandGroup>
              ) : null}

              {searchResults?.results ? (
                <>
                  <div className='h-px w-full bg-zinc-200' />

                  <p className='p-2 text-xs text-zinc-500'>
                    Found {searchResults.results.length} results in{' '}
                    {searchResults?.duration.toFixed(0)}ms
                  </p>
                </>
              ) : null}
            </CommandList>
          </Command>
        </div>
      </div>
    </main>
  )
}
export default Home