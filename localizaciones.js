const txtLocalizaciones = document.getElementById("txtLocalizaciones");
const containerCardsLocalizacion = document.getElementById("containerCardsLocalizacion");
const URL1= "https://rickandmortyapi.com/api/location";
const URL2= "https://rickandmortyapi.com/api/location?name=";


const getApi = async(URL) => {
  const response = await fetch(URL);
  const data = await response.json();
  //array
  return data.results;
}

const createCards= (location)=>{
  const card = document.createElement("div");
  card.classList.add("cardLocalizacio");

  const locationCard = document.createElement("div");
  locationCard.classList.add("locationCard")

  const namelocation = document.createElement("h2");
  namelocation.textContent= location.name;

  const typelocation = document.createElement("p");
  typelocation.textContent = location.type;

  const dimensionlocation = document.createElement("p");
  dimensionlocation.textContent = location.dimension;

  locationCard.appendChild(namelocation);
  locationCard.appendChild(typelocation);
  locationCard.appendChild(dimensionlocation);

  card.appendChild(locationCard);

  containerCardsLocalizacion.appendChild(card);
}

const generateAlllocation = async () => {
  const data = await getApi(URL1);
  data.map(location => createCards(location));
}

const getlocationByName = async () => {
  containerCardsLocalizacion.innerHTML= "";
  const data = await getApi(URL2+event.target.value);
  data.map(location =>createCards(location));
}

window.addEventListener("DOMContentLoaded", generateAlllocation);
txtLocalizaciones.addEventListener("keyup", getlocationByName);