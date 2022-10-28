import { error } from "@sveltejs/kit"

export const load = async ({fetch}) => {
    let resp = {}
    let q = await fetch(`/api`)
    if (!q.ok) throw error(q.status, q.statusText)
    resp.devices = await q.json()
    return resp
}