//1. 변수의 중복 선언을 암묵적으로 허용시킴.
// let x = 10;

// // .... 10만줄
// let x = `ddd`;
// console.log(x);

//2. 블록 레벨 스코프를 지원하지 않음.
var i = `메롱`;

for (var i = 0; i < 5; i++) {
  console.log(`for - i :${i}`);
}

console.log(`global-i : ${i}`);

// 3. 호이스팅 : 선언위치와 관계없이 참조가능
hobby = `댄스`;
