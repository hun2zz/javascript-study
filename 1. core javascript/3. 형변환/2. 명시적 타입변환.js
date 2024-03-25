let x = `30.5`,
  y = `40.5`;

let result = Number(x) + Number(y);

// parseint 주의 사항은 문자를 숫자로 바꿀 때 정수로 바꾼다.
let reuslt2 = parseInt(x) + parseInt(y);
let result3 = +x + +y;

console.log(result);
console.log(reuslt2);
console.log(result3);

console.log(`======================`);
console.log(!!`Hello`);

// 회원 로그인 여부 확인
function isLogin() {
  // const token = window.localStorage.getItem('LOGIN_ACCESS_TOKEN');
  // return token !== null;

  return !!window.localStorage.getItem("LOGIN_ACCESS_TOKEN");
}

const isLogin = () => !!window.localStorage.getItem("LOGIN_ACCESS_TOKEN");
