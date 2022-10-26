/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const form = document.querySelector("form");
const submitButton = document.getElementById("submit-btn");

function convertWeight(event) {
  event.preventDefault();
  const weightData = document.getElementById("search").value;
  const outputData = document.getElementById("output");

  outputData.textContent = `Pounds: ${weightData * 2.2046} lbs, Grams: ${
    weightData / 0.001
  } g, Ounces: ${weightData * 35.274} oz`;
}

form.addEventListener("submit", convertWeight);
