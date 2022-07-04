let n = Number(prompt("Input Array Names dimention"));
let arrayNames: string[] = new Array(n);

function setArrayAges(minAge: number = 18, maxAge: number = 66) {
  let dimention = Number(prompt("Input Array Ages dimention:"));
  let arrayAges: number[] = new Array(dimention);
  for (let i = 0; i < arrayAges.length; i++) {
    arrayAges[i] = Math.floor(Math.random() * (maxAge - minAge) + minAge);
  }
  return arrayAges;
}

function setArrayHeights(minH: number = 165, maxH: number = 201) {
  let dimention = Number(prompt("Input Array Heights dimention:"));
  let arrayHeights: number[] = new Array(dimention);
  for (let i = 0; i < arrayHeights.length; i++) {
    arrayHeights[i] = Math.floor(Math.random() * (maxH - minH) + minH);
  }
  return arrayHeights;
}

let arrayAges = setArrayAges();
let arrayHeights = setArrayHeights();

for (let i = 0; i < arrayNames.length; i++) {
  arrayNames[i] = String(prompt("Input Names"));
  console.log(
    "Nombre:",
    arrayNames[i],
    "Edad:",
    arrayAges[i] + " años",
    "Altura:",
    arrayHeights[i] + "Cm"
  );
}
