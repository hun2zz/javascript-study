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
