import { json } from "@sveltejs/kit";

export const GET = async ({params}) => {
    let q = await fetch(`https://downloads.statixos.com/json/${params.device}.json`)
    let res = await q.json()
    return json(res)
}