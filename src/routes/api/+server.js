import { json } from "@sveltejs/kit";

export const GET = async ({params}) => {
    // url for getting the list of all supported devices

    // let q = await fetch(`https://downloads.statixos.com/json/${params.device}.json`)
    // let res = await q.json()

    // return a hardcoded list for now
    return json([
        "alioth",
        "begonia",
        "lemonadep",
        "mata",
        "oriole",
        "raven",
        "sake",
        "sargo"
    ])
}