xdx
];
function find(condition) {
  for (const user of userList) {
    if (condition(user)) return user;
  }
}
function some(condition) {
  for (const user of userList) {
    if (condition(user)) return true;
  }
}
function every(condition) {
  for (const user of userList) {
    if (!condition(user)) {
      return false;
    }
  }
  return true;
}
// '서울'에 사는 첫 번째 사용자를 찾는 예시
const firstUserInSeoul = find((user) => user.address === "서울");
console.log("서울에 사는 첫 번째 사용자:", firstUserInSeoul);
// 급여 5,000,000 이상인 사용자가 하나라도 있는지 확인하는 예시
const hasHighEarningUser = some((user) => user.salary >= 5000000);
console.log("연봉이 5,000,000 이상인 사용자가 있는가?:", hasHighEarningUser);

// 모든 사용자가 '서울'에 사는지 확인하는 예시
const allUsersInSeoul = every((user) => user.address === "서울");
console.log("모든 사용자가 서울에 사는가?:", allUsersInSeoul);

// console.log("최소 salary를 가진 사용자:", min(userList, "salary"));
// console.log("최소 age를 가진 사용자:", min(userList, "age"));

function min(n, x) {
  minSalary = userList[0][x];
  let indexnum = 0;
  for (let i = 0; i < n.length; i++) {
    if (minSalary > userList[i][x]) {
      minSalary = userList[i][x];
      indexnum = i;
    }
  }
  return userList[indexnum];
}

console.log("최소 salary를 가진 사용자:", min(userList, "salary"));
console.log("최소 age를 가진 사용자:", min(userList, "age"));
