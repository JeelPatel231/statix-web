import { error } from '@sveltejs/kit';
 
export const load = async ({ fetch, params }) => {
  let resp = await fetch(`/api/${params.device}`)
  if(!resp.ok) throw error(resp.status,resp.statusText)
  
  let deviceData = formatBuildTypes((await resp.json()).response[0])
 
  return {
    deviceData,
    codename : params.device
  }
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