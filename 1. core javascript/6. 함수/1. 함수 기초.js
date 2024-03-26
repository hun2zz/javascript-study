// console.log(`김철수님 안녕하세요! 방가방가!!`);
// console.log(`오늘도 즐거운 하루 되세요!`);

// console.log(`박영희님 안녕하세요! 방가방가!!`);
// console.log(`오늘도 즐거운 하루 되세요!`);

//함수를 정의한다.
function sayHello(username) {
  console.log(`${username}님 안녕하세요! 방가방가!!`);
  console.log(`오늘도 즐거운 하루 되세요!`);
}

//함수의 호출 ( 사용한다)
sayHello(`진상훈`);

function cutline() {
  console.log(`========================================`);
}

sayHello(`진상훈`);
sayHello(`ㅎㅇ`);
sayHello(`ㅎㅇ3`);
cutline();
//나의 프로그램에서는 원의 넓이를 자주 구함
const PI = 3.14159265;
function calcAreaCircle(r) {
  return PI * r ** 2;
}

//반지름이 5인 원의 넓이
let circle1 = calcAreaCircle(5);
console.log(circle1);

//반지름이 17인 원의 넓이
