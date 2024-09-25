type Images = {
    preview_gif: {
        url : string
    }
}

export type Gif = {
    id: string
    title: string
    alt_text: string
    username: string
    url: string
    embed_url: string
    slug: string
    images: Images

}