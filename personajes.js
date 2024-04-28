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

  let favCardClick = false;

  // Función para manejar el clic en el ícono de corazón
  function handleFavoriteClick(personajeId) {
    // Verificar si el evento ya está en favoritos
    let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    const index = favoritos.indexOf(personajeId);
    // Si no está en favoritos, agregarlo; de lo contrario, quitarlo
    if (index === -1) {
      favoritos.push(personajeId
        );
    } else {
      favoritos.splice(index, 1);
    }
    // Guardar los favoritos actualizados en el localStorage
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
  }

  // En el bloque donde creas el elemento favCard y agregas el evento click:
  favCard.addEventListener("click", () => {
    // Obtener el ID del evento asociado a este elemento favCard
    const personajeId = event; // Reemplaza event.id con la propiedad adecuada que identifica el evento

    // Cambiar el ícono del corazón y manejar el estado de favoritos
    if (favCardClick === false) {
      favCard.innerHTML = '<ion-icon name="heart"></ion-icon>';
      handleFavoriteClick(personajeId);
      favCardClick = true;
    } else {
      favCard.innerHTML = '<ion-icon name="heart-outline"></ion-icon>';
      handleFavoriteClick(personajeId);
      favCardClick = false;
    }
  });
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


document.querySelector('.menu-toggle').addEventListener('click', function() {
  document.querySelector('.menu').classList.toggle('active');
});

