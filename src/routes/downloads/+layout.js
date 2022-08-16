export const load = async ({fetch}) => {
    /*
    HACK HACK HACK
    directly returning the res_q doesnt render in server
    BUT 
    assigning it to some object and the using that object to render successfully does SSR
    */
    let res = {}
    let q = await fetch(`/api`)
    let res_q = await q.json()
    res.search = res_q

    return res
}