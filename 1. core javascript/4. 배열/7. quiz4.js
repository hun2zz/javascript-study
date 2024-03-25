var tvxq = ["유노윤호", "최강창민", "영웅재중", "믹키유천", "시아준수"];
let arrayValue = 0;
let input1 = ``;

while (tvxq.length > 0) {
  let input = prompt(`현재 멤버: ${tvxq}\n삭제할 이름을 입력하세요`);
  let input1 = prompt(`수정할 이름을 입력하세요`);

  if (tvxq.includes(input)) {
    arrayValue = tvxq.indexOf(input);
    tvxq.splice(arrayValue, 1, input1);
    alert(`수정 완료!\n현재 멤버: ${tvxq}`);
  } else {
    alert(`이름을 제대로 입력해주세요`);
  }
}
