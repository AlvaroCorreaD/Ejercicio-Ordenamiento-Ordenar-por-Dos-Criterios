function setArrayNames(dimention: number) {
  let arrayNames: string[] = new Array(dimention);
  for (let i = 0; i < dimention; i++) {
    arrayNames[i] = String(prompt("Input Name " + i));
  }
  return arrayNames;
}

function setArrayAges(minAge: number, maxAge: number, dimention: number) {
  let arrayAges: number[] = new Array(dimention);
  for (let i = 0; i < dimention; i++) {
    arrayAges[i] = Math.floor(Math.random() * (maxAge - minAge) + minAge);
  }
  return arrayAges;
}

function setArrayHeights(minH: number, maxH: number, dimention: number) {
  let arrayHeights: number[] = new Array(dimention);
  for (let i = 0; i < dimention; i++) {
    arrayHeights[i] = Math.floor(Math.random() * (maxH - minH) + minH);
  }
  return arrayHeights;
}

function printArrays(
  arrayNames: string[],
  arrayAges: number[],
  arrayHeights: number[],
  dimention: number
) {
  for (let i = 0; i < dimention; i++) {
    console.log(
      "Nombre:",
      arrayNames[i],
      "Edad:",
      arrayAges[i] + " años",
      "Altura:",
      arrayHeights[i] + "Cm"
    );
  }
  return arrayHeights;
}

function comparator(arrayAges: number[], arrayHeights: number[], i: number) {
  let comparacion: number = 0;
  if (arrayAges[i] > arrayAges[i + 1]) {
    comparacion = 1;
  } else if (arrayAges[i] === arrayAges[i + 1]) {
    if (arrayHeights[i] > arrayHeights[i + 1]) {
      comparacion = 1;
    } else if (arrayHeights[i] < arrayHeights[i + 1]) {
      comparacion = -1;
    }
  } else {
    comparacion = -1;
  }
  return comparacion;
}

function change(array: any[], i: number) {
  let aux: string;
  aux = array[i];
  array[i] = array[i + 1];
  array[i + 1] = aux;
}

function bubbleSortValues(
  arrayNames: string[],
  arrayAges: number[],
  arrayHeights: number[],
  dimention: number
) {
  for (let i = 0; i < dimention; i++) {
    for (let j = 0; j < dimention; j++) {
      if (comparator(arrayAges, arrayHeights, j) === 1) {
        change(arrayNames, j);
        change(arrayAges, j);
        change(arrayHeights, j);
      }
    }
  }
}

let n = Number(prompt("Array dimention"));

let names: string[] = setArrayNames(n);
let ages: number[] = setArrayAges(22, 40, n);
let heights: number[] = setArrayHeights(165, 201, n);

printArrays(names, ages, heights, n);
bubbleSortValues(names, ages, heights, n);
printArrays(names, ages, heights, n);
