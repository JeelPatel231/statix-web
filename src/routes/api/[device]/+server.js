import { error } from '@sveltejs/kit';
 
export const GET = async ({ params }) => {
    let resp = await fetch(`https://downloads.statixos.com/json/${params.device}.json`);
    if (!resp.ok) throw error(resp.status, resp.statusText)

    let json = await resp.json()

    return new Response(JSON.stringify(json))
}