var userInfo = {
  userList: [
    {
      account: "kim1234",
      password: "kkk1234",
      username: "김두한",
    },
    {
      account: "park9876",
      password: "ppp9999",
      username: "박찬호",
    },
    {
      account: "hong7766",
      password: "hhh1234",
      username: "홍길동",
    },
  ],
};

// 위 객체에서 배열만 추출

let userList = userInfo.userList;

// 계정을 입력받고 해당 계정이 존재하는 계정인지를 확인한다.
let inputAccount = `hong7766`; // 사용자가 입력한 계정

//회원목록 배열을 반복 순회하여 입력한 계정명과 일치하는 계정이 있는지 체크
let founduser = null;
for (let user of userList) {
  if (inputAccount === user.account) {
    founduser = user;
    break;
  }
}
if (founduser !== null) {
  console.log(`아이디는 있네요`);
  // 사용자에게 비번검증.
  let inputpass = `hhh1234`;
  if (inputpass === founduser.password) {
    console.log(`${founduser.username}님 로그인 성공`);
  } else {
    console.log(`비번 틀림 ㅋ`);
  }
} else {
  console.log(`가입부터 ㄱ ㄱ `);
}
