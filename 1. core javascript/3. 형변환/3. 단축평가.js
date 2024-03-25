//or 연산 : 첫번째 truthy를 반환
console.log(`hello` || `bye`);
console.log(null || `안뇽`);

// and 연산 : 첫번재 falsy를 반환
console.log(`메롱` && `즐~~`);
console.log(0 && `룰루랄라`);

if (조건) {
  console.log(`blah blah~~~~`);
}

조건 && alert(`blah blah~~~~`);

/*
  <H1>안녕하세요</h1>
  login && <h2>xxx님 환영합니다</h2>

  쿠폰당첨여부 && sendCoupon();
  내게시물여부 && <button>삭제</button>;

  // 쿠폰이 당첨되면 위로 메세지 출력을 하지않고, 쿠폰이 당첨이면 위로 메세지 출력.
  쿠폰당첨여부 || sendMessage();
*/
