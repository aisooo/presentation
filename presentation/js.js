// метод PUSH
// добавляет элементы в конец

// let arr2 = ["Pete", "Jb", "cat"];
// arr2.push("ananas", "jyp");

// console.log(arr2);

// метод POP
//извлекает элемент из конца

// let Arr = [1, 4, 6];
// let one = Arr.pop();
// console.log(one);
// console.log(Arr);

// метод SHIFT
// извлекает элемент из начала

// var arr = [1, 2, 3, 4, 5];
// arr.shift();
// console.log(arr);

//метод UNSHIFT
//добавляет элементы в начало

// let arr = ['Jane', 'Sasha', 'js'];
// arr.unshift('oil');
// console.log(arr);

// метод SPLICE
// добавляет, удаляет и заменяет элементы

// let arr = ["pizza", "blue", "JavaScript"];
// arr.splice(1, 1);
// console.log( arr );

// let arr = ["google", "baki", "Java"];
// arr.splice(0, 2, "сложный", "omaeww");
// console.log( arr );

// let arr = ["Я", "обажаю", "JavaScript", "хехе", "да"];
// arr.splice(0, 3, "правду", "гаваришь?");
// console.log(arr);

//метод SLICE
//создает новый массив, в который капирует часть либо весь массив

// let arrone = ["hero", "class", "joy"];

// let arrtwo = arrone.slice(1, 2);
// console.log(arrtwo);

// let arrthree = arrone.slice(-2, -1);
// console.log(arrthree);

// let arrFour = arrone.slice();
// console.log(arrFour);

//метод CONCAT
//Создает новый массив в который копирует данные из других массивов
//дополнительные зна-я в конец массива

// let arr = [1, 2];

// let arrtwo = arr.concat(3, 4);
// console.log(arrtwo);

//метод FILTER
//позволяет отфильтровать массив по определенным критериям

// let array = [13, 45, 33, 12, 4];

// let newarray = array.filter(function(element){
//     return element >20;
// });
// console.log(newarray);

//метод REDUCE
//используется для вычисления какого нибудь единого значения
//на основе всего массива

//синтаксиз
// callback(previousValue, currentItem, index, arr)

// let arr = [1, 2, 3, 4, 5];
// let reduce = arr.reduce(function (previousValue, currentItem, index, arr) {
//   return item + previousValue;
// }, 0);
// console.log(reduce);

//метод MAP
// Он создаёт новый массив, который будет
// состоять из результатов вызова callback(item, i, arr)
// вызывает фукцию для каждого элемента

// let n = [12, 22, 2, 11];

// let result = n.map(function (elements) {
//   return elements * 2;
// });
// console.log(result);

//метод FOREACH
//СИНТАКСИЗ arr.forEach(function(item, index, array)
// запускает функцию для каждого элемента массива

// const items = ["item1", "item2", "item3"];
// const a = [];

// items.forEach(function (elemenet, index, array) {
//     a.push(index + 'New' + elemenet)

// });
// console.log(a);

//EVERY
// позволяет проверять элементы на какие-нибудь условия
// let n = [
//   { name: "May", age: 22 },
//   { name: "Sam", age: 23 },
//   { name: "David", age: 24 },
// ];
// let res = n.every((item) => {
//   if (item.age >= 15) {
//     return true;
//   }
// });
// console.log(n);
// SOME
