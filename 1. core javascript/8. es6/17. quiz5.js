// createCounter라는 클로저함수를 만드세요
// 파라미터로 전달받은 숫자부터 시작하고 반환받은 헬퍼함수를 작동하면
// 해당 숫자부터 카운트가 증가합니다.

// const counterFromFive = createCounter(5);
// console.log(counterFromFive()); // 6
// console.log(counterFromFive()); // 7

const createCounter = (x) => {
  let count = x;
  const counterFromFive = () => ++count;
  return { counterFromFive };
};

const setCounter = createCounter(5);

console.log(setCounter.counterFromFive()); //
console.log(setCounter.counterFromFive()); //

console.log(`==========`);

const createCalculator = () => {
  let total = 0;
  const add = (addInput) => (total += addInput);
  const subract = (minusInput) => (total -= minusInput);
  const getTotal = (getTo) => total;
  return { add, subract, getTotal };
};
const { add, subract, getTotal } = createCalculator();

console.log(add(5));
console.log(subract(5));
console.log(add(5));
console.log(add(5));
console.log(add(5));
console.log(getTotal());
