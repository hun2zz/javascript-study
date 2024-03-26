// return은 함수의 탈출문(종료문) 이다.

function add(n1, n2) {
  // console.log(`n1: ${n1}, n2: ${n2}`);
  return n1 + n2;
}
// return 이 없는 함수
function multi(n1, n2) {
  console.log(`${n1} X ${n2} = ${n1 * n2}`);
}

// 반환값(return): 함수 호출부로 함수의 결과값을 전달해주는 것
// 여기서 add(10, 20)을 적어서 올려보내면 위에서 30이란 계산값을 return 해서 보내주는 것.
var result = add(10, 20) * add(add(1, 4), 2);
console.log(`result: ${result}`);
console.log(`================`);

let r1 = multi(3, 4);
console.log(r1);
// 리턴이 없는 함수는 변수에 저장하지말고, 다른 함수의 매개값으로도 쓰면 안됨.

// 예시 1 : 데이터베이스를 접속하는 합수
// function connectDatabase(id, pw, auth) {
//   let connect = getConnection();

// }

//return 이 없는 함수에서 return을 break처럼 사용하기
function callName(nickname) {
  var prohibits = [`바보`, `멍청이`, `메롱`];
  if (prohibits.includes(nickname)) {
    console.log(`나쁜말 쓰지 마세욤`);
    return;
  }
  console.log(`${nickname}님 안녕하세요`);
}

console.log(`=======================`);
callName(`QHfh`);
