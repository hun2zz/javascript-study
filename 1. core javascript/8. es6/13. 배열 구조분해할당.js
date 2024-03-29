const userNames = [`김철수`, `강감찬`, `박영희`];

//userNames에서 각각의 요소들을 다시 변수에 집어넣고 싶다.
// const lim = userNames[0]; // 김철수
// const kang = userNames[1]; // 강감찬
// const park = userNames[2]; // 박영희

const [kim, kang, park] = userNames;
console.log(`a : ${kim}, b: ${kang}, c: ${park}`);

const example = [``, [], () => {}];

let first = 10,
  second = 20;

[first, second] = [second, first];

console.log(`first : ${first}, second : ${second}`);

//배열 안에서 맨 앞에 2개만 각각의 변수에 저장하고
//나머지는 다시 배열에 묶고 싶을 때,

const numbers = [1, 3, 5, 7, 9, 11, 13];

const [one, three, ...numsCopy] = numbers;
//여기서 numscopy는 나머지의 값 전부임.
console.log(`====================`);

//스프레드를 통한 배열 간편 복사
const foods = [`감튀`, `햄버거`, `콜라`];
const copyFoods = [...foods];

foods[0] = `치킨너겟`;
copyFoods.push(`밀크쉐이크`);

console.log(foods);
console.log(copyFoods);

console.log(`==================`);

const newFoods = [`소다리`, ...foods, `닭다리`];
console.log(newFoods);
