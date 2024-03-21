// var num = prompt("값을 입력해주세요.");
// let result = "";
// let square = 1;

// for (let i = 0; square < num; i++) {
//   result += square + ", ";
//   square *= 2;
// }

// alert(result);

// =======================
// 입력받은 숫자 이하의 2의 제곱수를 가로로 출력
// var n = +prompt('양의 정수를 입력하세요.'); 

// // 제곱수를 누적한 변수
// var accum = '';

// for (var i = 2; i <= n; i *= 2) {
//   accum += `${i} `;
// }
// alert(accum);
// =============================
// 2번문제.

var num = prompt("값을 입력해주세요.");
let result = ``;
let x = 0;
for (let i = 2; i < num; i++) {
  if (num % i === 0) {
    result = result + i + ` \n`;
    x++;
  }
}
alert(`${result}${num}의 약수의 갯수는 ${x}개 입니다.`);
