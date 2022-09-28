//1. Gérez les inputs, retrouvez leur valeur dans votre script quand on clique sur le bouton.
//2. Faites une validation basique, empêchez le calcul si l'utilisateur laisse un ou deux inputs vides. <br>
//   Montrez également un message pour l'informer de l'erreur (ex : "Veuillez remplir les inputs").
//3. Calculez l'IMC avec les valeurs rentrées.
//4. Calculez le rang de l'IMC par rapport à "IMCData"
//5. Remplissez l'interface en fonction des résultats

// IMC = poids en kg / taille² en m

//variables
const BMIData = [
  { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
  { name: "Bonne santé", color: "green", range: [18.5, 25] },
  { name: "Surpoids", color: "lightcoral", range: [25, 30] },
  { name: "Obésité modérée", color: "orange", range: [30, 35] },
  { name: "Obésité sévère", color: "crimson", range: [35, 40] },
  { name: "Obésité morbide", color: "purple", range: 40 },
];
const size = document.getElementById("size");
const numberresult = document.querySelector(".number-result");
const testresult = document.querySelector(".text-result");
let centimeter, kilogram, imc;

const calculate = () => {
  if (centimeter > 0 && kilogram > 0) {
    imc = (kilogram / centimeter).toFixed(1);
    numberresult.textContent = imc;
    size.value = "";
    weight.value = "";
  }
};

//size
size.addEventListener("change", (e) => {
  centimeter = e.target.value / 100;
  centimeter = centimeter * centimeter;
  console.log(centimeter);
});

//weight
weight.addEventListener("change", (e) => {
  kilogram = e.target.value;
  console.log(kilogram);
});

//calculate IMC at click
calculateImc.addEventListener("click", (e) => {
  calculate();
});

//result from table
