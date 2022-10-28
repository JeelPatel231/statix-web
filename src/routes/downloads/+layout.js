import { error } from "@sveltejs/kit"

export const load = async ({fetch}) => {
    let q = await fetch(`/api`)
    if (!q.ok) throw error(q.status, q.statusText)
    return {
        devices : await q.json()
    }
}