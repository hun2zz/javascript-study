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
