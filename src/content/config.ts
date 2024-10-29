import { z, defineCollection } from 'astro:content';

const postCollect = defineCollection({
    type : 'content', // v2.5.0 and later
    schema : z.object({
        title : z.string(),
        pubDate: z.string(),
        info : z.string(),
    })
 });

export const collections = {
    posts : postCollect,
}