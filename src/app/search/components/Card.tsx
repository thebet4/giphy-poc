/* eslint-disable @next/next/no-img-element */
import { Gif } from "../models/gif"


export default function Card({username, slug, images, alt_text}: Gif) {
    return (
            <li>
                <img 
                    src={images.preview_gif.url}
                    alt={alt_text}
                    className="w-60 h-60"
                />
                <div className="w-60 flex flex-col">
                    <h2>
                        {slug}
                    </h2>
                    <p>author: {username}</p>
                </div>
            </li>
    )
}