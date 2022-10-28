import { json } from '@sveltejs/kit';
 
export const GET = async ({ params }) => {
    let data = json([
        "cannon",
        "mata",
        "oriole",
        "raven",
        "sake",
    ])
    // return new response
    return data;
}