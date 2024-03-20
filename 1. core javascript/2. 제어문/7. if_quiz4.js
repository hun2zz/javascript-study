var first = +prompt(`첫번째 값을 입력해주세요.`);
var second = +prompt(`두번째 값을 입력해주세요.`);
var third = +prompt(`세번째 값을 입력해주세요.`);

if (first > second) {
  if (first > third) {
    alert(`${first}`);
  } else {
    alert(`${third}`);
  }
} else {
  if (second > third) {
    alert(`${second}`);
  } else {
    alert(`${third}`);
  }
}
// // 문제 3 : 3개의 정수 중 최소값 구하기
// var a = +prompt('정수 A');
// var b = +prompt('정수 B');
// var c = +prompt('정수 C');

// // min : 최소값을 저장해 놓을 변수
// var min = a;                    //  a: 9 ,  b: 77,  c: 99
// if (b < min) min = b;           //  min : 9
// if (c < min) min = c;

// alert(`최소값은 ${min}입니다.`);
