// Array.prototype.filter()
// Dizi içinde filtrelenen elemanlardan yeni bir dizi oluşturmak için kullanılır.
console.log("-------------FILTER------------------");
let arr = [
  "furkan",
  "zehra",
  "akif",
  "berk",
  "adana",
  "antalya",
  "sivas",
  "istanbul",
];

console.log(arr.filter((el) => el === "furkan")[0]);
console.log(
  arr.filter((item) => item.toUpperCase() === "ZEHRA")[0].toUpperCase()
);
console.log("-------------MAP------------------");
// Array.prototype.map()
// Dizi içerisindeki elemanları değiştirmek için kullanılır.
let arr2 = [
  { name: "Furkan" },
  { name: "Zehra" },
  { name: "Akif" },
  { name: "Fırat" },
  { name: "Berk" },
  { name: "Mertcan" },
];
arr2.map((item) => {
  console.log(item.name.split("").reverse().join(""));
});
console.log("-------------MAP2------------------");
let next = "";
arr2.map((item) => {
  item.name += next;
  next = item.name;
  console.log(item.name);
});

console.log("-------------SORT------------------");
// Array.prototype.sort()
// Dizi içerisindeki elemanları alfabetik sırayla sıralar.
arr.sort();
arr.map((item) => console.log(item));

console.log("-------------REDUCE------------------");
// Array.prototype.reduce()
// Dizi içerisindeki değerleri tek bir değere düşürmek için kullanılır

let sayilar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function topla(total, num) {
  return total + num;
}
console.log(sayilar.reduce(topla, 0));

console.log(
  arr.reduce((item, acc) => item + acc),
  ""
);
