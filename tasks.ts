// Вывести числа от 1 до 10
function task1() {
  for (let i = 0; i < 10; i++) {
    console.log(i + 1);
  }
}

// Вывести числа от 10 до 1
function task2() {
  for (let i = 10; i > 0; i--) {
    console.log(i);
  }
}

// Посчитать сумму всех чисел в массиве
function task3() {
  const arr = [1, 2, 3, 4, 5];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  console.log(sum);
}

// *Посчитать сумму всех чисел в массиве без блока действий
function task3_1() {
  const arr = [1, 2, 3, 4, 5];
  let sum = 0;

  for (let i = 0; i < arr.length; sum += arr[i], i++);

  console.log(sum);
}

// Найти min и max элементы в массиве
function task4() {
  const arr = [1, 2, 3, 4, 15, 6, 7, 0, 11, -4, 10, 8];
  let min = arr[0];
  let max = arr[0];

  for (let i: number = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
    if (arr[i] > max) max = arr[i];
  }

  console.log("min:", min);
  console.log("max:", max);
}

// *Найти min и max элементы в 1й и 2й половинах массива
function task5() {
  const arr1 = [1, 2, 3, 4, 15, 6, 7, 0, 11, -4, 10, 8];
  const arr2 = [1, 2, 3, 4, 15, 6, 100, 7, 0, 11, -4, 10, 8];

  const arr = arr2;

  const isOddLength = arr.length % 2 > 0;
  let middle = isOddLength
    ? (arr.length - (arr.length % 2)) / 2 + 1
    : arr.length / 2;

  let min1 = arr[0];
  let max1 = arr[0];
  let min2 = arr[middle];
  let max2 = arr[middle];

  for (let i: number = 1; i < middle; i++) {
    if (arr[i] < min1) min1 = arr[i];
    if (arr[i] > max1) max1 = arr[i];
  }

  middle -= isOddLength ? 1 : 0;

  for (let j: number = middle; j < arr.length; j++) {
    if (arr[j] < min2) min2 = arr[j];
    if (arr[j] > max2) max2 = arr[j];
  }

  console.log("min1:", min1);
  console.log("max1:", max1);
  console.log("min2:", min2);
  console.log("max2:", max2);
}

// **Найти min и max элементы в 1й и 2й половинах массива использую один for
function task5_1() {
  const arr1 = [1, 2, 3, 4, 15, 6, 7, 0, 11, -4, 10, 8];
  const arr2 = [1, 2, 3, 4, 15, 6, 100, 7, 0, 11, -4, 10, 8];

  const arr = arr2;

  const length = arr.length;
  const isOddLength = length % 2 > 0;

  const end1 = isOddLength ? (length - (length % 2)) / 2 + 1 : length / 2;

  const start2 = isOddLength ? (length - (length % 2)) / 2 : length / 2;

  let min1 = arr[0];
  let max1 = arr[0];
  let min2 = arr[start2];
  let max2 = arr[start2];

  for (let i: number = 1; i < end1; i++) {
    if (arr[i] < min1) min1 = arr[i];
    if (arr[i] > max1) max1 = arr[i];

    if (arr[start2 + i] < min2) min2 = arr[start2 + i];
    if (arr[start2 + i] > max2) max2 = arr[start2 + i];
  }

  console.log("min1:", min1);
  console.log("max1:", max1);
  console.log("min2:", min2);
  console.log("max2:", max2);
}

task5_1();
