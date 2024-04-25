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

//Creacion de html 

const createCards= (character)=>{
  const card = document.createElement("div");
  card.classList.add("cardPersonajes");

  const imgCard= document.createElement("img");
  imgCard.setAttribute("class","imgCard");
  imgCard.setAttribute("id", "imgCard");
  imgCard.src = character.image;
  imgCard.alt =character.name;

  const descripcionCard = document.createElement("div");
  descripcionCard.setAttribute("class", "descripcionCard");
  descripcionCard.setAttribute("id", "descripcionCard");
  descripcionCard.classList.add("descritionCard")

  const nameCharacter = document.createElement("h2");
  nameCharacter.setAttribute("class", "nameCharacter")
  nameCharacter.setAttribute("id", "nameCharacter")
  nameCharacter.innerText= character.name;

  const locationNameCharacter = document.createElement("h4");
  locationNameCharacter.setAttribute("class", "locationNameCharacter")
  locationNameCharacter.setAttribute("id", "locationNameCharacter")
  locationNameCharacter.innerText = character.location.name;

  const speciesCharacter = document.createElement("p");
  speciesCharacter.setAttribute("class", "speciesCharacter")
  speciesCharacter.setAttribute("id", "speciesCharacter")
  speciesCharacter.innerText = character.species;

  const genderCharacter = document.createElement("p");
  genderCharacter.setAttribute("class", "genderCharacter")
  genderCharacter.setAttribute("id", "genderCharacter")
  genderCharacter.innerText = character.gender;


  const favCard = document.createElement("button");
    favCard.setAttribute("class", "favCard");
    favCard.setAttribute("id", "favCard ");
    favCard.innerHTML = '<ion-icon name="heart-outline"></ion-icon>';


//Todos lo appendChild
  descripcionCard.appendChild(nameCharacter);
  descripcionCard.appendChild(locationNameCharacter);
  descripcionCard.appendChild(speciesCharacter);
  descripcionCard.appendChild(genderCharacter);
  descripcionCard.appendChild(favCard);

  card.appendChild(imgCard);
  card.appendChild(descripcionCard);

  containerCards.appendChild(card);
}

// Llamada a la api para los personajes
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