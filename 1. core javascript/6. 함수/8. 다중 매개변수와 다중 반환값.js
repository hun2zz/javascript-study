function add2(n1, n2) {
  return n1 + n2;
}
function add3(n1, n2, n3) {
  return n1 + n2 + n3;
}

// 만약 n개의 정수 합을 구해주는 함수를 만들어야 한다면
// 파라미터에 집합자료형(배열, 객체)를 전달한다.
function addAll(numbers) {
  let total = 0;
  for (let n of numbers) {
    total += n;
  }
  return total;
}
// 여기서 매개변수에 괄호를 뺄 순 없을까 ? 해서 나온게
// ES6에서 나온 스프레드 문법이다.
function addAllES6(...numbers) {
  console.log(numbers);
  let total = 0;
  for (let n of numbers) {
    total += n;
  }
  return total;
}

let r1 = addAll([1, 2, 5]);
console.log(r1);

let r2 = addAllES6(10, 20, 30);
console.log(`=========================================`);
// 다중 반환값
// 함수의 반환값은 언제나 하나다.
function arithmeticOperate(n1, n2) {
  let addResult = n1 + n2;
  let subREsult = n1 - n2;
  let multiREsult = n1 * n2;
  let divREsult = n1 / n2;
  return {
    add: addResult,
    sub: subREsult,
    multi: multiREsult,
    div: divREsult,
    other: subREsult ** divREsult,
  };
}

let r3 = arithmeticOperate(20, 10);
console.log(`덧셈결과 : ${r3.add}`);
console.log(`빼기결과 : ${r3.sub}`);
console.log(`곱셈결과 : ${r3.multi}`);
console.log(`나누기결과 : ${r3.div}`);

let r4 = arithmeticOperate(20, 10).multi;
