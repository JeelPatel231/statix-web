import { error } from '@sveltejs/kit';
 
export const load = async ({ fetch, params }) => {
  let resp = await fetch(`http://localhost:5173/api/${params.device}`)
  if(!resp.ok) throw error(resp.status,resp.statusText)
  
  let data = {}
  data.deviceData = formatBuildTypes((await resp.json()).response[0])
 
  return data
}

const formatBuildTypes = (data_arr) => {
  let data = {};
  data_arr.forEach(el => {
    if(el['romtype'] in data) 
      data[el['romtype']].push(el)
    else
      data[el['romtype']] = [el]
  });
  return data
}