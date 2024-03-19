var a = 5;
var b = `5`;

console.log(a === b);

console.log(`=============`);
// == 비교는 결과 예측이 어려움
console.log(`0` == ``);
console.log(0 == ``);
console.log(`0` == 0);
console.log(false == `false`);
console.log(false == `0`);

console.log(`=============`);

//대소비교
// 아스키 코드를 비교해서 소문자 a의 값이 대문자 A보다 값이 크다.
// 아스키 코드에서 대문자가 소문자보다 일찍 출발한다.
console.log(`a` < `A`);
console.log(`c` > `a`);
// 아스키 코드에서 황이 더 큼. 사전에서 뒤에 있는 문자가 더 크다.
console.log(`강` < `황`);
       //  97      97 100 이렇게 한 글자씩 비교한다.
console.log(`ace` > `ade`);

