// 자바스크립트의 함수는 함수를 리턴할 수 있음
function calculator(a) {
  return function (n1, n2) {
    return n1 + n2;
  };
}
const x = calculator();
console.log(typeof x);
const y = x(10, 20);
console.log(`y: ${y}`);

console.log(`=====================`);

const z = calculator()(6, 9);

const operate = () => (n1, n2) => n1 * n2;

const k = operate()(3, 7);
console.log(k);

console.log(`=====================`);

function bar() {
  function fas() {
    return 10;
  }
  return fas;
}

const h = bar()();

console.log(h);
console.log(`=====================`);

// 카운트를 증가시키는 함수
/*
let count = 0; //전역 변수로 만듦.

const increase = () => count++; // 단순히 incrase 함수내에선 전역변수 를 증가시킴.
console.log(increase());
console.log(increase());
count = 999; // increase를 호출하는 순간에 count를 바꿔버림.
console.log(increase());
console.log(count); // 단순히 increase를 3번호출하므로 값이 3이여야 하는데, 어디간에서 값이 조정되므로 1000,
*/

// const increase = () => {
//   let count = 0;
//   return count++;
// };

// increase(); // 함수가 실행되면 지역변수가 생성되고 1을 올린다음 함수가 끝나면 함수를 삭제시킴.
// increase(); // 함수가 실행되면 지역변수가 생성되고 1을 올린다음 함수가 끝나면 함수를 삭제시킴.
// const count = increase();
// console.log(`count : ${count}`);

//전역 변수를 안 쓰고 지역변수를 유지시키는 방법
// 클로저를 통해서 지역변수의 스코프를 늘려줄 수 있다.
const increaseClosure = () => {
  let count = 0; // 지역변수 count를 선언을 했기 때문에 밖에서 사용이 불가능한 변수인 count이다.

  return () => ++count; //함수 increaseClosure안에 있는 함수이기 때문에 count 변수에 접근 가능,
};
const increase = increaseClosure();

console.log(increase());
console.log(increase());
console.log(increase());

//즉시 실행 함수 : 함수를 1회성으로 사용할 목적으로 만드는 함수

(function () {
  console.log(`hello`);
}) /*함수 호출하듯이 소괄호를 써주는 것. = 이게 즉시실행 함수이다.*/();

const increase_ = (() => {
  let count = 0;
  return () => ++count;
})();

increase_();
increase_();
increase_();
