const employee = {
  empName: `뽀로로`,
  age: 12,
  hireDate: `2020-01-30`,
  birthDate: `2015-12-31`,
};

const name = employee.empName; // 객체에서 이름만 뽑기.

const hire = employee.hireDate;
// 하지만 이렇게 뽑는 건 귀찮다.
//이럴 때 디스트럭쳐링을 사용.

const { empName, hireDate } = employee;
console.log(`name : ${empName}, hire: ${hireDate}`);

function foo({ empName, age }) {
  // const { empName, age } = employee;
  console.log(`내 이름은 ${empName}`);
  console.log(`내 이름은 ${age}`);
}
const age = 10;
const { age: empAge, birthDate } = employee;
// employeed에서 age라는 키를 추출할건데 이름을 empAge로 사용하겠다.
console.log(empAge);

console.log(`================`);

const dog = {
  kind: `말티즈`,
  name: `해피`,
  age: 3,
  // injection: false,
};

const { kind, age: petAge, ...rest } = dog;
// console.log(kind);
// console.log(petAge);
// console.log(rest);

// 객체 완전 복사
const copyDog = { ...dog };
copyDog.age = 10;
const copyDog2 = {
  ...dog,
  age: 20,
};
console.log(copyDog2);
console.log(dog);
