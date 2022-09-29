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
  if (centimeter > 0 && kilogram > 0) {
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
};

//take result from table and display
const result = () => {
  if (imc <= 18.5);
  {
    const bname = BMIData[0].name;
    const bcolor = BMIData[0].color;
    textresult.textContent = bname;
    textresult.style.color = bcolor;
  }
  if (imc > 18.5 && imc <= 25.0) {
    const bname2 = BMIData[1].name;
    const bcolor2 = BMIData[1].color;
    textresult.textContent = bname2;
    textresult.style.color = bcolor2;
  }
  if (imc > 25 && imc <= 30.0) {
    const bname3 = BMIData[2].name;
    const bcolor3 = BMIData[2].color;
    textresult.textContent = bname3;
    textresult.style.color = bcolor3;
  }
  if (imc > 30 && imc <= 35.0) {
    const bname4 = BMIData[3].name;
    const bcolor4 = BMIData[3].color;
    textresult.textContent = bname4;
    textresult.style.color = bcolor4;
  }
  if (imc > 35 && imc <= 40.0) {
    const bname5 = BMIData[4].name;
    const bcolor5 = BMIData[4].color;
    textresult.textContent = bname5;
    textresult.style.color = bcolor5;
  }
  if (imc > 40) {
    const bname6 = BMIData[5].name;
    const bcolor6 = BMIData[5].color;
    textresult.textContent = bname6;
    textresult.style.color = bcolor6;
  }
};

//size
size.addEventListener("change", (e) => {
  centimeter = e.target.value / 100;
  centimeter = centimeter * centimeter;
});

//weight
weight.addEventListener("change", (e) => {
  kilogram = e.target.value;
});

//calculate() and result() at click
calculateImc.addEventListener("click", (e) => {
  calculate();
  result();
});
