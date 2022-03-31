// Необходимая документация находится по ссылке https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/for
// for ([инициализация]; [условие]; [финальное выражение]) действия

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

  console.log("sum = ", sum);
}

// *Посчитать сумму всех чисел в массиве без блока действий
function task3_1() {
  const arr = [1, 2, 3, 4, 5];
  let sum = 0;

  for (let i = 0; i < arr.length; sum += arr[i], i++);

  console.log("sum = ", sum);
}

// *Посчитать сумму всех чисел в массиве не используя блок инициализации
function task3_2() {
  const arr = [1, 2, 3, 4, 5];
  let sum = 0;
  let i = 0;
  for (; i < arr.length; sum += arr[i], i++);

  console.log("sum = ", sum);
}

// *Посчитать сумму всех чисел в массиве не используя блок условия
function task3_3() {
  const arr = [1, 2, 3, 4, 5];
  let sum = 0;
  for (let i = 0; ; i++) {
    if (i === arr.length) {
      break;
    }
    sum += arr[i];
  }

  console.log("sum = ", sum);
}

// *Посчитать сумму всех чисел в массиве не используя блок финального выражения
function task3_4() {
  const arr = [1, 2, 3, 4, 5];
  let sum = 0;
  for (let i = 0; i < arr.length; ) {
    sum += arr[i];
    i++;
  }

  console.log("sum = ", sum);
}

// *Посчитать сумму всех чисел в массиве не используя блок инициализации, блок условия, блок финального выражения
function task3_5() {
  const arr = [1, 2, 3, 4, 5];
  let sum = 0;
  let i = 0;
  for (;;) {
    if (i === arr.length) {
      break;
    }
    sum += arr[i];
    i++;
  }

  console.log("sum = ", sum);
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

  console.log("min = ", min);
  console.log("max = ", max);
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

  console.log("min1 = ", min1);
  console.log("max1 = ", max1);
  console.log("min2 = ", min2);
  console.log("max2 = ", max2);
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

  console.log("min1 = ", min1);
  console.log("max1 = ", max1);
  console.log("min2 = ", min2);
  console.log("max2 = ", max2);
}

// Найти первое четное/нечетное число в массиве (использовать оператор break)
function task6() {
  const arr = [2, 2, 3, 4, 15, 6, 7, 0, 11, -4, 10, 8];

  let odd: number = undefined;

  for (let i = 0; i < arr.length; i++) {
    console.log("i = ", i);

    if (arr[i] % 2 > 0) {
      odd = arr[i];
      break;
    }
  }

  console.log("odd: ", odd);
}

// Посчитать сумму четных/нечетных элементов в массиве (использовать оператор continue)
function task7() {
  const arr = [1, 2, 3, 4, 15, 6, 7, 0, 11, -4, 10, 8];
  let oddSum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) continue;
    oddSum += arr[i];
  }

  console.log("oddSum = ", oddSum);
}

// Вывести первые n чисел Фибоначчи
function task8() {
  const n = 10;
  let arr = [0, 1];

  for (let i = 3; i <= n; i++) {
    arr[i - 1] = arr[i - 3] + arr[i - 2];
  }

  console.log(`First ${n} Fibonacci: `, arr);
}

// Отсортировать массив методом пузырька
function task9() {
  const arr = [1, 2, 3, 4, 15, 6, 7, 0, 11, -4, 10, 8];
  const length = arr.length;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  console.log(arr);

}

task9();
