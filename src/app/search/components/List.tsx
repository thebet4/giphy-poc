import { Gif } from "../models/gif"
import Card from "./Card"

interface GetGifsResponse  {
    data: Gif[]
}

interface GitListProps {
    query: string
    offset: string
}

export default async function GifList({query, offset}: GitListProps)  {
    const api_key = 'pLURtkhVrUXr3KG25Gy5IvzziV5OrZGa'
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${query}&limit=10&offset=${offset}`)
    const {data: gifs} = await response.json() as GetGifsResponse
    return (
        <ul className="grid grid-flow-row grid-cols-3">
            {
                gifs.map(gif => {
                    return (
                        <Card key={gif.id} {...gif}/>
                    )
                })
            }
        </ul>
    )
}