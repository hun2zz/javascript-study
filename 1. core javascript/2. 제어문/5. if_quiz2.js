var first = +prompt(`첫번째 값을 입력해주세요.`);
var second = +prompt(`두번째 값을 입력해주세요.`);
var third = +prompt(`세번째 값을 입력해주세요.`);

if (first === second && second === third && first === third) {
  alert(`같습니다.`);
} else if (first === second || second === first || first === third) {
  alert(`두 개의 값만 같습니다.`);
} else {
  alert(`값이 맞는 게 없습니다.`);
}
