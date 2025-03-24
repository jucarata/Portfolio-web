import {defineCollection, z} from "astro:content"

const myinfo = defineCollection({
    schema: z.object({
        name: z.string(),
        alias: z.string(),
        description: z.string(),
        projects: z.array(
            z.object({
                title: z.string(),
                imageURL: z.string(),
                description: z.string(),
                stack: z.array(z.string()),
                link: z.string().url()
            })
        )
    })
})

export const collections = { myinfo }