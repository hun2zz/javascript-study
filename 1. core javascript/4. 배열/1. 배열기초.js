let arr = [10, 20, 30, 40];

console.log(typeof arr);

arr[1] = 999;
arr[3]++;

//배열 데이터 확인
console.log(arr.length);
console.log(`마지막 데이터 : ${arr[arr.length - 1]}`);

console.log(`==================`);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//for ~ of 반복문 ( 배열 전용 반복문.)
var weedDays = [`월`, `화`, `수`, `목`, `금`, `토`, `일`];
console.log(`===================`);

// for (let i = 0; i < weedDays.length; i++) {
//   console.log(`${weedDays[i]}요일!!`);
// }

for (let day of weedDays) {
  console.log(`${day}요일!!`);
}

//배열 생성 관례 : 이름 복수형, -list 어미

var fruits = [`자몽`, `딸기`, `오렌지`];
// 배열에는 fruit가 아니라 s 를 붙여서 복합데이터를 나타내야 한다.

var fruitList = [`자몽`, `딸기`, `오렌지`];
// list로 복합데이터 나타내기
var fruitArray = [`자몽`, `딸기`, `오렌지`];
// 배열이 영어로 Array 이다.

