const txtPersonajes = document.getElementById("txtPersonajes");
const containerCards = document.getElementById("containerCards");

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
  const genderCharacter = document.createElement("p");
  genderCharacter.textContent = character.gender;

  descripcionCard.appendChild(nameCharacter);
  descripcionCard.appendChild(genderCharacter);

  card.appendChild(imgCard);
  card.appendChild(descripcionCard);

  containerCards.appendChild(card);
}

