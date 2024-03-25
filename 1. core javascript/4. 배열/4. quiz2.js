let sum = [];
let sum2 = 0;
while (true) {
  let number = prompt(
    `숫자를 입력하세요. \n 그만하려면 '그만'이라고 입력해주세요!`
  );
  if (number === `그만`) {
    break;
  } else if (sum.length < 6) {
    sum.push(+number);
  } else {
    alert(`최대값을 초과하였습니다.`);
    break;
  }
  sum2 = sum2 + +number;
}
alert(`입력한 숫자 목록 : [${sum}] \n입력한 숫자 총합 ${sum2}`);
