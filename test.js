const myHeaders = new Headers();
myHeaders.append("Accept-Language", "fr-CA");
myHeaders.append("apikey", "0ab262f2-c006-43d0-94ec-d7654937b7ea");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

await fetch("https://cms-api-test-wardetassocies.portaus.net/api/v1/products/search/", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));