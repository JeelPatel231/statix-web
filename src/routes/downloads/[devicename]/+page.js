export const load = async ({fetch, params}) => {
    let w = await fetch(`/api/${params.devicename}`)
    let res_w = await w.json()
    res_w = {...res_w, ...{device_name:params.devicename}}
    
    return res_w
}
