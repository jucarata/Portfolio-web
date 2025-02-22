import {defineCollection, z} from "astro:content"

const myinfo = defineCollection({
    schema: z.object({
        name: z.string(),
        alias: z.string(),
        description: z.string(),
        experience: z.array(
            z.object({
                position: z.string(),
                institution: z.string(),
                startDate: z.string(),
                endDate: z.string(),
                description: z.string()
            })
        )
    })
})

export const collections = { myinfo }