const apiURI = "https://boolean-uk-api-server.fly.dev"

export function getUsers(){
  const apiURI = "https://boolean-uk-api-server.fly.dev"
  return fetch(apiURI + "/lucasholter00/contact", {
    method: "GET",
    headers: {
      "Accept": "application/json"
    }
  }).then(res => {
    if (!res.ok) {
      // If response status is not 2xx, throw error to be caught below
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    return res.json();
  }).catch(err => {throw err})
}

export function getArt(){
  const apiURI = "https://boolean-uk-api-server.fly.dev"
  return fetch(apiURI + "/art", {
    method: "GET",
    headers: {
      "Accept": "application/json"
    }
  }).then(res => {
    if (!res.ok) {
      // If response status is not 2xx, throw error to be caught below
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    return res.json();
  }).catch(err => {throw err})
}
