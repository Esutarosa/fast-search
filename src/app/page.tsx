"use client"

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
    <main>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="text-black"
        />
      </div>
    </main>
  )
}
export default Home