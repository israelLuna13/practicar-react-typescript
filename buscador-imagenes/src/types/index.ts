import { z } from "zod"

export type searchImage = {
    stuff:string
}

export const Image = z.array(
    z.object({
        largeImageURL: z.string(),
        previewURL: z.string(),
        likes: z.number(),
        views: z.number(),
    })
)
export type Imagen = z.infer<typeof Image>