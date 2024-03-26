let phone = {
  company: `삼성`,
  color: `펄 화이트`,
  model: `갤럭시 S24 Ultra`,
  price: 1200000,
};

// 값이 아닌 키가 반복됨
for (let data in phone) {
  // console.log(data);
  console.log(phone[data]);
  // console.log(typeof data);
}

// 객체 프로퍼티 유무 확인
// phone 에 새로운 프로퍼티 추가하고 싶음
if (!(`memory` in phone)) {
  phone.memory = `32GB`;
}
console.log(phone);
