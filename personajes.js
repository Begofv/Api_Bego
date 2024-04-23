const txtPersonajes = document.getElementById("txtPersonajes");
const containerCards = document.getElementById("containerCards");
const URL1= "https://rickandmortyapi.com/api/character";
const URL2= "https://rickandmortyapi.com/api/character/?name=";


const getApi = async(URL) => {
  const response = await fetch(URL);
  const data = await response.json();
  //array
  return data.results;
}

const createCards= (character)=>{
  const card = document.createElement("div");
  card.classList.add("cardPersonajes");

  const imgCard= document.createElement("img");
  imgCard.src = character.image;
  imgCard.alt =character.name;

  const descripcionCard = document.createElement("div");
  descripcionCard.classList.add("descritionCard")

  const nameCharacter = document.createElement("h2");
  nameCharacter.textContent= character.name;

  const locationNameCharacter = document.createElement("h4");
  locationNameCharacter.textContent = character.location.name;

  const speciesCharacter = document.createElement("p");
  speciesCharacter.textContent = character.species;

  const genderCharacter = document.createElement("p");
  genderCharacter.textContent = character.gender;

  descripcionCard.appendChild(nameCharacter);
  descripcionCard.appendChild(locationNameCharacter);
  descripcionCard.appendChild(speciesCharacter);
  descripcionCard.appendChild(genderCharacter);

  card.appendChild(imgCard);
  card.appendChild(descripcionCard);

  containerCards.appendChild(card);
}

const generateAllCharacter = async () => {
  const data = await getApi(URL1);
  data.map(character => createCards(character));
}

const getCharacterByName = async () => {
  containerCards.innerHTML= "";
  const data = await getApi(URL2+event.target.value);
  data.map(character =>createCards(character));
}

window.addEventListener("DOMContentLoaded", generateAllCharacter);
txtPersonajes.addEventListener("keyup", getCharacterByName);