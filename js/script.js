let mass = [100, 55, 15, 300,20 ];

let body = document.querySelector("body");
let summ = 0;
let prev;
for (key in mass) {
  prev = summ;
  summ += mass[key];
  body.innerText += " " +`${prev} + ${mass[key]} = ${summ};`
}