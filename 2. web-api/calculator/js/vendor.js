// 프로그램 전체에서 사용할 전역적인 변수, 상수와 함수를 정의
const $userInput = document.getElementById("input-number");

const $addBtn = document.getElementById("btn-add");
const $subtractBtn = document.getElementById("btn-subtract");
const $multiplyBtn = document.getElementById("btn-multiply");
const $divideBtn = document.getElementById("btn-divide");
const $log = document.querySelector(`.log-entries`);

// result 요소노드
const $currentResult = document.getElementById("current-result");
// 계산 로그 요소노드
const $currentCalculation = document.getElementById("current-calculation");

// result에 그려질 숫자
let currentResult = 0;
let countLog = 1;
//=============== 함수 정의 영역 =================//
// 계산 기능 헬퍼 함수
const calculate = (e) => {
  const prevResult = currentResult; // 계산기 전 백업 값.
  const enteredNumber = +$userInput.value;
  let descriptionLog = ``;
  // 더하기를 해야 함
  // 1. 입력창에 입력한 숫자를 읽어와야 함.
  if (e.id === `btn-add`) {
    // const enteredNumber = +$userInput.value; // 값을 더한 것.
    // 2. 결과에 누적
    currentResult += enteredNumber;
    descriptionLog = `${prevResult} + ${enteredNumber}`;
  } else if (e.id === `btn-subtract`) {
    currentResult -= enteredNumber;
    descriptionLog = `${prevResult} - ${enteredNumber}`;
  } else if (e.id === `btn-multiply`) {
    currentResult *= enteredNumber;
    descriptionLog = `${prevResult} X ${enteredNumber}`;
  } else if (e.id === `btn-divide`) {
    currentResult /= enteredNumber;
    descriptionLog = `${prevResult} % ${enteredNumber}`;
  }
  // 3. 화면에 렌더링
  $currentResult.textContent = currentResult;
  // 계산 로그 생성
  $currentCalculation.textContent = descriptionLog;
  //================더하기 끝 ===================//
  const $newText = document.createElement("li");
  $newText.classList.add(`log-entries__item`);
  $newText.textContent = `${countLog}# ${descriptionLog} = ${currentResult}`;
  countLog++;

  $log.appendChild($newText);
};
