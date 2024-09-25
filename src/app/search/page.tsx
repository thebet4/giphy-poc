import { Suspense } from "react"
import GifList from "./components/List"
import Filter from "./components/Filter"
import Fallback from "./components/Fallback" 
import Pagination from "./components/Pagination"


interface searchParamsProps  {
    searchParams: {
        query: string
        offset: string
    }
}

export default function SearchPage({searchParams}: searchParamsProps) {
    const query = searchParams.query
    const offset = searchParams.offset
    const searchKey = `query-${query}-${offset}`
    return (
        <div 
            className="w-full h-screen flex flex-col items-center p-10"
        >
            <Filter />
            <Suspense fallback={<Fallback />} key={searchKey}>
                <GifList query={query} offset={offset}/>
            </Suspense>

            <Pagination />
        </div>
    )
}