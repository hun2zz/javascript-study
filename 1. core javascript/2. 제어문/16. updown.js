let countChance = 0;
while (true) {
  while (true) {
    var sksdleh = prompt(
      `난이도를 입력해주세요~ \n 난이도 상:3번의 기회 \n 난이도 중 \ 5번의 기회 \n 난이도 하: 10번의 기회`
    );
    if (sksdleh === `상`) {
      countChance = 3;
    } else if (sksdleh === `중`) {
      countChance = 5;
    } else if (sksdleh === `하`) {
      countChance = 10;
    } else {
      alert(`난이도를 제대로 입력해주세요.`);
      continue;
    }
    break;
  }

  var rn = Math.floor(Math.random() * 50) + 1;
  let sum = 0;
  var min = 1,
    max = 100;

  while (true) {
    let numval = +prompt(`${min} ~ ${max}`);
    if (numval < min || numval > max) {
      alert(`범위 안의 값을 입력`);
      continue;
    }
    if (rn < numval) {
      alert(`DOWN!`);
      max = numval - 1;
      sum++;
    } else if (rn === numval) {
      alert(`${rn}값 정답입니다.`);
      break;
    } else {
      alert(`up!`);
      min = numval + 1;
      sum++;
    }
    if (sum === countChance) {
      alert(`${countChance}번의 기회를 모두 소진하였습니다`);
      break;
    }
  }

  let exit = confirm(`한판 더 하실?`);
  if (!exit) {
    alert(`ㅂㅇ`);
    break;
  } else {
    continue;
  }
}
