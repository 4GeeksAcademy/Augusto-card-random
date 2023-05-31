// eslint-disable */
 import "bootstrap";
 import "./style.css";
 import "./assets/img/rigo-baby.jpg";
 import "./assets/img/4geeks.ico";

window.onload = function() {
  const suitList = ["♣", "♦", "♥", "♠"];

  const redElements = ["♦", "♥"];
  const numbersList = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];

  // Ejecución en refresh
  generateCard(suitList, numbersList, redElements);

  // Asignación de los elementos del dom con los que queremos interactuar
  const createCardButton = document.getElementById("new-card");

  const widthInput = document.getElementById("card-width");
  const heigthInput = document.getElementById("card-heigth");
  const cardElement = document.getElementById("card-body");

  // Asignación de event handlers
  const onClickEventNewButtonEventHandler = () =>
    generateCard(suitList, numbersList, redElements);

  createCardButton.addEventListener("click", onClickEventNewButtonEventHandler);

  widthInput.addEventListener("input", (e) =>
    updateSide("width", cardElement, e.target.value)
  );

  heigthInput.addEventListener("input", (e) =>
    updateSide("height", cardElement, e.target.value)
  );

  setInterval(() => {
    generateCard(suitList, numbersList, redElements);
  }, 2000);
};

const updateSide = (type, card, newValue) => {
  const availableTypes = ["height", "width"];

  const limits = {
    min: 200,
    max: 500
  };

  if (
    newValue <= limits.max &&
    newValue >= limits.min &&
    availableTypes.includes(type)
  )
    card.style[type] = newValue + "px";
};

/**
 * Definición de funciones
 */
const selectRandomItem = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

const generateCard = (suitList, numbersList, redElements) => {
  const selectedSuit = selectRandomItem(suitList); // suitList[Math.floor(Math.random() * suitList.length)];
  const selectedNumbersList = selectRandomItem(numbersList);

  const numberDomElement = document.getElementById("card-number");
  numberDomElement.textContent = selectedNumbersList;

  const isRed = redElements.includes(selectedSuit);

  const suitDomElements = document.querySelectorAll(".card-suit");

  suitDomElements.forEach((elem) => {
    elem.textContent = selectedSuit;
    elem.style.color = isRed ? "red" : "black";
  });
};

/**
 * Other implementations
 *
 */

/*
  const suitDomElementsCollection = document.getElementsByClassName(
    "card-suit"
  );
  const suitsLength = suitDomElementsCollection.length;

  for (let i = 0; i < suitsLength; i++) {
    const element = suitDomElementsCollection[i];
    element.textContent = selectedSuit;
    element.style.color = isRed ? "red" : "black";

    function selectRandomItemNormal(array) {
  return array[Math.floor(Math.random() * array.length)];
}

  }*/
