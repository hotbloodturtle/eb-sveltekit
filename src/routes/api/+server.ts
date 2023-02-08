import db from '$lib/server/database'

export async function GET() {
    const users = await db.user.findMany()
    return new Response(JSON.stringify({ users }))
}