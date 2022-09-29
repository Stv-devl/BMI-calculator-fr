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
const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");
const size = document.getElementById("size");
const numberresult = document.querySelector(".number-result");
const testresult = document.querySelector(".text-result");
const sizeerror = document.querySelector(".size-error");
const textresult = document.querySelector(".text-result");

// at click start calculate()
calculateImc.addEventListener("click", (e) => {
  calculate();
});

//fonction calculate
const calculate = () => {
  const size = inputs[0].value;
  const weight = inputs[1].value;

  if (!size || !weight || size <= 0 || weight <= 0) {
    handleError();
    return;
  }
  const ICM = (weight / Math.pow(size / 100, 2)).toFixed(1);
  result(ICM);
};

//fonction handleError =*> display error message
const handleError = () => {
  sizeerror.textContent = "Veuillez remplir les cases correctement";
};

//take result from table and display
const result = (ICM) => {
  const rank = BMIData.find((data) => {
    if (ICM >= data.range[0] && ICM < data.range[1]) return data;
    else if (typeof data.range === "number" && ICM >= data.range) return data;
  });
  numberresult.textContent = ICM;
  numberresult.style.color = `${rank.color}`;
  testresult.style.color = `${rank.color}`;
  testresult.textContent = `Résultat : ${rank.name}`;
};
