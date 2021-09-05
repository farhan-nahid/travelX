// set planet ticket cost
const moonPrice = 20;
const marsPrice = 30;

// update input value

const ticketQuantity = (planet, operator) => {
  const input = document.getElementById(planet);
  const number = parseInt(input.value);

  if (operator === "plus") {
    input.value = number + 1;
  } else {
    if (input.value > 0) {
      input.value = number - 1;
    }
  }
  calculateJourney(planet);
  totalCost();
};

// update planet price

const calculateJourney = (planet) => {
  const input = document.getElementById(planet);
  const number = parseInt(input.value);

  if (planet === "mars") {
    document.getElementById("mars__price").innerText = number * marsPrice;
  } else {
    document.getElementById("moon__price").innerText = number * moonPrice;
  }
};

// calculate total cost

const totalCost = () => {
  const marsPrice = parseInt(document.getElementById("mars__price").innerText);
  const moonPrice = parseInt(document.getElementById("moon__price").innerText);

  document.getElementById("total__cost").innerText = marsPrice + moonPrice;
};
