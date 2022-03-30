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

task3_1();
