# Content Collection 2.0 ~ 4.0

## Defining Collection

```astro
---
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
---
```

## Query Collection

```astro
---
import {getCollection} from 'astro:content';
import Base from "../layouts/Base.astro"

// const postAll = await Astro.glob('./posts/*.md');

const postAll = await getCollection('posts');
---
```

## Generating Routes from Content

```astro
---
import Base from '../../layouts/Base.astro';
import { type CollectionEntry , getCollection } from 'astro:content';

export async function getStaticPaths() {
    const postEntries = await getCollection('posts');
    return postEntries.map(key => ({
        params: {slug: key.slug },
        props: key
    }))
}

type Props = CollectionEntry<'posts'>;

const key = Astro.props;
const { Content } = await key.render();
---

<Content />
```
## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
