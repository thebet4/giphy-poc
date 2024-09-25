'use client'

import { useRouter } from "next/navigation"
import { useQueryState } from "nuqs"

export default function Filter() {
    const [query, setQuery] = useQueryState('query', { defaultValue: 'cheeseburgers' })
    const router = useRouter()

    const handleSearchGifs = (e: MouseEvent) => {
        e.preventDefault()
        router.refresh()
    }

    const handleClearResults = (e: MouseEvent) => {
        setQuery('')
        router.refresh()
    }

    return (
        <form action=""
            className="flex flex-col w-1/3 mb-10"
        >
            <input 
                type="text"
                name="query"
                placeholder="Search a gif"
                value={query}
                onChange={e => setQuery(e.target.value)}
                className="text-gray-700"
            />

            <button className="bg-purple-400 mt-4" onClick={(e) => handleSearchGifs(e)}>
                Search
            </button>

            <button className="mt-4 hover:bg-gray-800 " onClick={e => handleClearResults(e)}>
                Clear
            </button>
        </form>
    )
}