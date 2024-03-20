/*

랜덤점수 생성하기 : Math.random()
Math.fllor() : 소수점이하 버림
Math.floor(9.989) ===> 9 
랜덤 범위 정수값 공식
x이상 y이하의 랜덤정수 생성
Math.floore(MAth.random() * (y - x _+1)) + x

#117~142
Math.floore(MAth.random() * (142 - 117 + 1)) + 117
26+117이 된다.
큰수 빼기 작은수 더하기 작은 수.

*/

var randomNum = Math.floor(Math.random() * 10) + 1;
console.log(`랜덤값 : ${randomNum}`);

var score = Math.floor(Math.random() * 101);
console.log(`점수 : ${score} 점`);

if (score >= 60) {
  console.log(`합격하셨어요~`);
  console.log(`ㅅㄱㄹ`);
}

if (score < 60) {
  console.log(`시험 탈락~`);
}
