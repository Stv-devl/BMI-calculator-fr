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
const sizeerror = document.querySelector(".size-error");
const weighterror = document.querySelector(".weight-error");
const textresult = document.querySelector(".text-result");
let centimeter = 0;
let kilogram = 0;
let imc = 0;

const calculate = () => {
  if (centimeter >= 2 && centimeter <= 5 && kilogram >= 20 && kilogram <= 800) {
    imc = (kilogram / centimeter).toFixed(1);
    numberresult.textContent = imc;
    size.value = "";
    weight.value = "";
    sizeerror.textContent = "";
    weighterror.textContent = "";
  }

  if (centimeter == 0) {
    sizeerror.textContent = "Veuillez rentrer un chiffre ";
    size.value = "";
    weight.value = "";
  }
  if (kilogram == 0) {
    weighterror.textContent = "Veuillez rentrer un chiffre ";
    size.value = "";
    weight.value = "";
  }
  if (centimeter <= 2 || centimeter >= 6) {
    sizeerror.textContent = "Veuillez rentrer un chiffre cohérent";
    size.value = "";
    weight.value = "";
  }

  if (kilogram <= 20 && kilogram > 900) {
    weighterror.textContent = "Veuillez rentrer un chiffre cohérent";
    size.value = "";
    weight.value = "";
  }
};

/*
const result = () => {
   (imc <= 18.5) {
    const bname = BMIData[0].name;
    textresult.textContent = bname;
  } else if (imc >= 18.5 || imc <= 25) {
    const bname2 = BMIData[1].name;
    textresult.textContent = bname2;
  } else if (imc >= 25 || imc <= 30) {
    const bname3 = BMIData[2].name;
    textresult.textContent = bname3;
  }
};
*/

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
  result();
});

//result from table
