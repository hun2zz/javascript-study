var num = 90;
console.log(typeof num);

console.log(num / 12);

var element = "<nav>\n\t<ul>\n\t\t<li>딸기</li>\n\t</ul>\n</nav>";
console.log(element);

var elem = `
<nav>
  <ul>
    <li>메롱</li>
  </ul>
</nav>`;

console.log(elem);
console.log(`====================================`);

var month = 4;
var day = 5;
var anni = "식목일";

var sentence = month + "월 " + day + "일은 " + anni + "입니다";
console.log(sentence);

var sentence2 = `${month}월 ${day}일은 ${anni}입니다.`;

console.log(sentence2);

console.log(`-----===========-----------`);

var userAge = 30;

var flag = userAge > 19;
console.log(typeof flag);

//undefiend : 아직 값이 없는 상태 ( 고의가 아님 .)
// numm : 일부러 값을 없앤 상태

var petName;
console.log(petName);

var myHobby = `산책`;
myHobby = null;

function buyNewCar(money) {
  if (money > 5000) return `그랜저`;
  else if (money > 3000) return `아반떼`;
  else if (money >= 0) return null;
}
