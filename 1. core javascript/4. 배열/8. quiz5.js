var tvxq = ["유노윤호", "최강창민", "영웅재중", "믹키유천", "시아준수"];
let arrayValue = 0;

while (tvxq.length > 0) {
  let input = +prompt(
    `현재 멤버: ${tvxq}\n메뉴를 선택하세요.\n1. 새로운 이름 추가\n2. 기존 이름 삭제\n3. 이름 수정\n4. 프로그램 종료`
  );
  if (input === 1) {
    let inputMember = prompt(`추가할 새로운 멤버의 이름을 입력하세요`);
    tvxq.push(inputMember);
    alert(`${inputMember}이(가) 추가되었습니다.`);
  } else if (input === 2) {
    let removeMember = prompt(`삭제할 멤버의 이름을 입력하세요`);
    if (tvxq.includes(removeMember)) {
      arrayValue = tvxq.indexOf(removeMember);
      tvxq.splice(arrayValue, 1);
      alert(`${removeMember}이(가) 삭제되었습니다.`);
    } else {
      alert(`이름을 정확하게 입력해주세요.`);
    }
  } else if (input === 3) {
    let removeMember = prompt(`수정할 멤버의 이름을 입력하세요\n[${tvxq}]`);
    let replaceMember = prompt(`수정 이름을 입력하세요`);
    if (tvxq.includes(removeMember)) {
      arrayValue = tvxq.indexOf(removeMember);
      tvxq.splice(arrayValue, 1, replaceMember);
      alert(`${removeMember}를 ${replaceMember}으(로) 변경 완료하였습니다.`);
    } else {
      alert(`이름을 정확하게 입력해주세요.`);
    }
  } else if (input === 4) {
    alert(`프로그램을 종료합니다.`);
    break;
  } else {
    alert(`제대로 입력해주세요.`);
  }
}
