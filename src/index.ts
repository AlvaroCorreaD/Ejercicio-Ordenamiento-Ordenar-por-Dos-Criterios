let n = Number(prompt("Input Array Names dimention"));
let arrayNames: string[] = new Array(n);
let i: number;

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

function bubbleSortValues(sortedArray: number[]) {
  for (let i = 0; i < sortedArray.length; i++) {
    for (let j = 0; j < sortedArray.length; j++) {
      if (sortedArray[j] > sortedArray[j + 1]) {
        let temp = sortedArray[j];
        sortedArray[j] = sortedArray[j + 1];
        sortedArray[j + 1] = temp;
      }
    }
  }
  return sortedArray;
}

let arrayAges: number[] = setArrayAges();
let arrayHeights: number[] = setArrayHeights();

for (let i = 0; i < arrayNames.length; i++) {
  arrayNames[i] = String(prompt("Input Names"));
}

for (i = 0; i < arrayAges.length; i++) {
  console.log(
    "Nombre:",
    arrayNames[i],
    "Edad:",
    arrayAges[i] + " años",
    "Altura:",
    arrayHeights[i] + "Cm"
  );
}
