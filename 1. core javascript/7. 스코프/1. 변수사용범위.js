var x = 99; // 전역 변수
function foo() {
  var x = `홍길동`; //지역 변수
  console.log(`foo x : ${x}`);
}
console.log(x);
foo();

console.log(`========================`);

//중첩 함수 : 함수 안에 함수를 정의 한다
function outer(m) {
  var n = `outer local n`;
  var v = `outer local v`;

  //헬퍼 함수 : 바깥쪽 함수 전용 함수
  function inner() {
    var m = `inner local m `;
  }
  inner();
}
