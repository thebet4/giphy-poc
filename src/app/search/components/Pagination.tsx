'use client'

import { useRouter } from "next/navigation"
import { parseAsInteger, useQueryState } from "nuqs"

export default function Pagination() {
    const [offset, setOffset] = useQueryState('offset', parseAsInteger.withDefault(0))
    const router = useRouter()

    const handlePaginateNext = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()

        await setOffset(offset + 10)
        router.refresh()

    }
    const handlePaginatePrev = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()

        if(offset <= 10) {
            await setOffset(0)
            router.refresh()
            return
        }
     
        setOffset(offset - 10)
        router.refresh()
        return
    }

    return (
        <div className="py-10 w-1/2 flex justify-between">
            <button onClick={handlePaginatePrev}>
                 {'< Prev'}
            </button>
            <button onClick={handlePaginateNext}>
                {'Next >'}
            </button>
        </div>
    )
}