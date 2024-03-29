/*
const increase = (() => {
  let count = 0;
  return () => ++count;
})();

console.log(`=============`);
const decrease = (() => {
  let count = 0;
  return () => --count;
})();
console.log(increase());
console.log(increase());
console.log(increase());
console.log(decrease());
console.log(decrease());
*/

const countClosure = () => {
  let count = 0;
  const increase = () => ++count;
  const decrease = () => --count;
  return { increase, decrease }; // 키랑 변수랑 이름이 같기 때문에 한 번만 쓴 것.
};

const { increase, decrease } = countClosure();

console.log(increase());
console.log(increase());
console.log(decrease());
