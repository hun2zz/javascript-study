alert(`재밌는 사칙연산 게임~`);

alert(`즐겁게 게임을 푸시다가 지루하면 0을 누르세요.`);

let sum = 0;
let nono = 0;
let qnum = 1;
while (true) {
  let randomNum = Math.floor(Math.random() * 100) + 1;
  let randomNum2 = Math.floor(Math.random() * 100) + 1;
  let randomPlus = Math.floor(Math.random() * 4) + 1;

  let plusMinus = ``;

  if (randomPlus === 1) {
    plusMinus = ` + `;
    result = randomNum + randomNum2;
  } else if (randomPlus === 2) {
    plusMinus = ` - `;
    result = randomNum - randomNum2;
  } else if (randomPlus === 3) {
    result = randomNum * randomNum2;
    plusMinus = ` X `;
  } else {
    result = randomNum / randomNum2;
    plusMinus = `%`;
  }
  // let result = randomNum + plusMinus + randomNum2;

  let wjdekq = +prompt(`${qnum}. ${randomNum + plusMinus + randomNum2} = ??`);
  qnum++;
  if (wjdekq === result) {
    alert(`정답입니다!!`);
    sum++;
  } else {
    alert(`틀렸어요~`);
    nono++;
  }
  if (qnum === 5) {
    alert(`게임을 종료합니당~`);
    break;
  } else {
    continue;
  }
}
alert(`정답횟수 ${sum}, 틀린횟수 ${nono}`);
