var begin = 8,
  end = 3,
  step = 1;

var n = begin;

while (n >= end) {
  console.log(`${n}!!`);
  n -= step;
}

console.log("===============");

var n = 1;
while (n <= 9) {
  console.log(`2 X ${n} = ${2 * n} `);
  n++;
}
console.log("===============");
// 10~34까지의 정수를 1씩 증가하면서 출력 // 홀수일때 출력
var m = 10;

while (m <= 34) {
  if (m % 2 === 1) {
    console.log(m);
  }
  m++;
}
console.log("===============");
var total = 0;
var i = 1;
while (i <= 10) {
  total += i;
  i++;
}

console.log(total);
