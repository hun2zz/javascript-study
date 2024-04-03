// 실행코드 ( 함수호출, 이벤트 등록..., 핸들러 정의)

$addBtn.addEventListener(`click`, (e) => {
  /*연산 처리 함수*/ calculate(e.target);
});
$subtractBtn.addEventListener(`click`, (e) => {
  calculate(e.target);
});
$multiplyBtn.addEventListener(`click`, (e) => {
  calculate(e.target);
});
$divideBtn.addEventListener(`click`, (e) => {
  calculate(e.target);
});
