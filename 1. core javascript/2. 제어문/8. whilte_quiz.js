var x = +prompt(`1번쨰`);
var y = +prompt(`2번쨰`);

var total = 0;
var i = x;
while (i <= y) {
  total += i;
  i++;
}

alert(total);

// var num1 = +prompt(`숫자를 입력해주세요`);
// var i = 1;
// var sum = ``;

// while (i <= num1) {
//   if (i % 2 === 0) {
//     sum += `-`;
//   } else {
//     sum += `+`;
//   }
//   i++;
// }
// alert(sum);
