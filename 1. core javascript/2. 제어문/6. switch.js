var season = `summer`;
// 조건을 판별한 변수 (비교식x, 문자값이나 숫자값만 써야함.)
switch (season) {
  case `봄`:
  case `spring`:
    console.log(`봄에는 여의도로 가세요`);
    break;
  case `여름`:
  case `summer`:
    console.log(`여름에는 해수욕장으로 가세요`);
    break;
  case `가을`:
  case `fall`:
    console.log(`가을에는 설악산으로 가세요`);
    break;
  case `겨울`:
  case `winter`:
    console.log(`겨울에는 스키장으로 가세요`);
    break;
  default:
    console.log(`봄,여름,가을,겨울 중 택1`);
}
