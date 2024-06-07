import {PORTAUS_API_KEY, PORTAUS_API_URL } from '$env/static/private'

export async function getProducts () {
    const myHeaders = new Headers();
    myHeaders.append("Accept-Language", "fr-CA");
    myHeaders.append("apikey", PORTAUS_API_KEY);
    
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };
    
    return await fetch(`${PORTAUS_API_URL}v1/products/search/`, requestOptions)
      .then((response) => response.json())
      .catch((error) => console.error(error));
}


