import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import { env } from 'hono/adapter';
import { Redis } from '@upstash/redis';

export const runtime = 'edge';

const app = new Hono().basePath('/api')

type EnvConfig = {
  UPSTASH_REDIS_REST_URL: string,
  UPSTASH_REDIS_REST_TOKEN: string
}

app.get('/search', async (c) => {
  try {
    const { UPSTASH_REDIS_REST_URL, UPSTASH_REDIS_REST_TOKEN } = env<EnvConfig>(c)

    const start = performance.now()

    const redis = new Redis({
      url: UPSTASH_REDIS_REST_URL,
      token: UPSTASH_REDIS_REST_TOKEN
    })

    const query = c.req.query('q')

    if (!query) return c.json(
      { message: 'Invalid search query' },
      { status: 400 }
    )

    const res = []
    const rank = await redis.zrank('dishes', query)

    if (rank !== null && rank !== undefined) {
      const dish = await redis.zrange<string[]>("dishes", rank, rank + 100)

      for (const el of dish) {
        if (!el.startsWith(query)) break

        if (el.endsWith('*')) res.push(el.substring(0, el.length - 1))
      }
    }

    const end = performance.now()

    return c.json({
      result: res,
      duration: end - start
    })
  } catch (err) {
    console.error(err)
    return c.json(
      { result: [], message: 'Internal server error' },
      { status: 500 }
    )
  }
})

export const GET = handle(app)
export default app as never