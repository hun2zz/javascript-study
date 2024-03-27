function min2(x, y) {
  if (x > y) {
    return x;
  } else return y;
}
function min3(x, y, z) {
  let sum = x;
  // min : 최소값을 저장해 놓을 변수
  //  a: 9 ,  b: 77,  c: 99
  if (y < sum) sum = y; //  min : 9
  if (z < sum) sum = z;
  return sum;
}
function isEven(n) {
  if (n === 0) return true;
  if (n % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
//result에는 56이 리턴되어야 함.
var result1 = min2(10, 56);
console.log(`result1: ${result1}`);

// 셋중에 가장 작은 수 50이 result에 저장되어야 함.
var result2 = min3(120, 900, 99);
console.log(`result2: ${result2}`);

// 숫자 1개를 전달하면 해당 숫자가 짝수인지 판별하는 함수
// 24를 전달하면 true리턴, 홀수를 전달하면 false리턴,
// 단, 0은 짝수취급
var result3 = isEven(0);
console.log(`result3: ${result3}`);

// /
