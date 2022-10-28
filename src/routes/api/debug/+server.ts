import { error } from '@sveltejs/kit';
 
/** @type {import('./$types').RequestHandler} */
export const GET = async ({ params }) => {
  
  let json = {
    "response": [
        [
            {
                "url": "https://downloads.statixos.com/12-OFFICIAL/oriole/statix_oriole-20220714-12-v5.2-OFFICIAL.zip",
                "romtype": "OFFICIAL",
                "datetime": 1657760520,
                "version": "5.2",
                "filename": "statix_oriole-20220714-12-v5.2-OFFICIAL.zip",
                "size": 1870729965,
                "id": "119ebc73d800c63055132dfd2d143768"
            },
            {
                "url": "https://downloads.statixos.com/12-OFFICIAL/oriole/statix_oriole-20220520-12-v5.1-OFFICIAL.zip",
                "romtype": "OFFICIAL",
                "datetime": 1653008520,
                "version": "5.1",
                "filename": "statix_oriole-20220520-12-v5.1-OFFICIAL.zip",
                "size": 1813064326,
                "id": "6e8318b77699b12a66817bce0619e3a6"
            },
            {
                "url": "https://downloads.statixos.com/12-OFFICIAL/oriole/statix_oriole-20220610-12-v5.2-OFFICIAL.zip",
                "romtype": "OFFICIAL",
                "datetime": 1654822920,
                "version": "5.2",
                "filename": "statix_oriole-20220610-12-v5.2-OFFICIAL.zip",
                "size": 1937880943,
                "id": "4bb10e3fc621ecb419003962451176f3"
            },
            {
                "url": "https://downloads.statixos.com/12-OFFICIAL/oriole/statix_oriole-20220420-12-v5.1-OFFICIAL.zip",
                "romtype": "OFFICIAL",
                "datetime": 1650416520,
                "version": "5.1",
                "filename": "statix_oriole-20220420-12-v5.1-OFFICIAL.zip",
                "size": 1817986301,
                "id": "c6b15661b7812cf032aaf94f92d857f6"
            },
            {
                "url": "https://downloads.statixos.com/12-SNOWCONE/oriole//home/downloads/12-SNOWCONE/oriole/statix_oriole-20220408-0351-12-v5.1-SNOWCONE.zip",
                "romtype": "SNOWCONE",
                "datetime": 1649357391,
                "version": "5.1",
                "filename": "/home/downloads/12-SNOWCONE/oriole/statix_oriole-20220408-0351-12-v5.1-SNOWCONE.zip",
                "size": 1812768097,
                "id": "9bb460468ba4e38a3d9fb6c4d9affea9"
            },
            {
                "url": "https://downloads.statixos.com/12-SNOWCONE/oriole//home/downloads/12-SNOWCONE/oriole/statix_oriole-20220330-1403-12-v5.1-UNOFFICIAL.zip",
                "romtype": "UNOFFICIAL",
                "datetime": 1648612234,
                "version": "5.1",
                "filename": "/home/downloads/12-SNOWCONE/oriole/statix_oriole-20220330-1403-12-v5.1-UNOFFICIAL.zip",
                "size": 1817532080,
                "id": "cd5b24d4bbedbfaac8dbacc644d9babc"
            }
        ]
    ]
}

  return new Response(JSON.stringify(json));
}