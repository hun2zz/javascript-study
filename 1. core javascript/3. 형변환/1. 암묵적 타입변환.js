let n1 = 10;

let n2 = `20`;

console.log(n1 + n2);
// string

let n3 = n1 + ``;
console.log(typeof n3);
// string

let n4 = n2 - n1 - 5 - `3`;
console.log(n4);
// 텍스트 내부에 있는 게 순수한 숫자라면 진행해줌. 문자가 숫자로 바뀐 것.

let n5 = n1 * n2;
console.log(n5);

let n6 = `hello` * 3;
console.log(n6);
console.log(`=============================`);

var n7 = +`99`;
console.log(true + true);
console.log(true + false);
console.log(false + false);
console.log(`=============================`);
// falsy 한 값들.
if (0) console.log(`Hello-1`);
if ("") console.log(`Hello-2`);
if (null) console.log(`Hello-3`);
if (undefined) console.log(`Hello-4`);
if (NaN) console.log(`Hello-5`);
// true한 값들.
if (99) console.log(`Hello-6`);
if (-85858182) console.log(`Hello-7`);
if (`안녕`) console.log(`Hello-8`);
if ([10, 20, 30]) console.log(`Hello-9`);

for (let i = 1; i <= 10; i++) {
  if (i % 2) {
    console.log(`${i}는 홀수입니다.`);
  } else {
    console.log(`${i}는 짝수입니다.`);
  }
}

var apple = 10;
if (apple > 0) {
  console.log(`사과가 있습니다.`);
} else {
  console.log(`사과가 없습니다.`);
}

