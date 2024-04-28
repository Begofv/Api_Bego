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

  const favCard = document.createElement("button");
  favCard.setAttribute("class", "favCard");
  favCard.setAttribute("id", "favCard ");
  favCard.innerHTML = '<ion-icon name="heart-outline"></ion-icon>';

  locationCard.appendChild(namelocation);
  locationCard.appendChild(typelocation);
  locationCard.appendChild(dimensionlocation);
  locationCard.appendChild(favCard);

  card.appendChild(locationCard);

  containerCardsLocalizacion.appendChild(card);



  let favCardClick = false;

  // Función para manejar el clic en el ícono de corazón
  function handleFavoriteClick(localizacionId) {
    // Verificar si el evento ya está en favoritos
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const index = favorites.indexOf(localizacionId);
    // Si no está en favoritos, agregarlo; de lo contrario, quitarlo
    if (index === -1) {
      favorites.push(localizacionId);
    } else {
      favorites.splice(index, 1);
    }
    // Guardar los favoritos actualizados en el localStorage
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }

  // En el bloque donde creas el elemento favCard y agregas el evento click:
  favCard.addEventListener("click", () => {
    // Obtener el ID del evento asociado a este elemento favCard
    const localizacionId = event; // Reemplaza event.id con la propiedad adecuada que identifica el evento

    // Cambiar el ícono del corazón y manejar el estado de favoritos
    if (favCardClick === false) {
      favCard.innerHTML = '<ion-icon name="heart"></ion-icon>';
      handleFavoriteClick(localizacionId);
      favCardClick = true;
    } else {
      favCard.innerHTML = '<ion-icon name="heart-outline"></ion-icon>';
      handleFavoriteClick(localizacionId);
      favCardClick = false;
    }
  });
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


// añadir quien reside en ese planera, que personaje, con el icono del mas


document.querySelector('.menu-toggle').addEventListener('click', function() {
  document.querySelector('.menu').classList.toggle('active');
});