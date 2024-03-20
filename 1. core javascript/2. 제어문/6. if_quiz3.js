var first = +prompt(`첫번째 값을 입력해주세요.`);
var second = +prompt(`두번째 값을 입력해주세요.`);

if (first > second) {
  alert(`두 값의 차이는${first - second}입니다.`);
} else if (first < second) {
  alert(`두 값의 차이는 ${second - first} 입니다.`);
}
