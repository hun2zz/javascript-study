// x부터 y까지의 누적합을 구해야 함.

function calcRangeTotal(x, y) {
  let total = 0;
  for (let i = x; i <= y; i++) {
    total += i;
  }
  return total;
}

let result1 = calcRangeTotal(1, 10);

console.log(result1);
//매개변수의 기본값
function sayHello(language) {
  // language = language || `한국어`;
  switch (language) {
    case `한국어`:
      console.log(`안녕하세요`);
    case `영어`:
      console.log(`hello`);
    case `일본`:
      console.log(`오하요`);
  }
}
sayHello(`한국어`);

// 매개변수가 없는 함수
function selectRandomPet() {
  let pets = [`멍멍이`, `야옹이`, `짹짹이`, `고라니`, `노루루`];
  let rn = Math.floor(Math.random() * pets.length);
  return pets[rn];
}

let r1 = selectRandomPet();
let r2 = selectRandomPet();
let r3 = selectRandomPet();
console.log(r1);
console.log(r2);
console.log(r3);
