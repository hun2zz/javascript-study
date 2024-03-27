const NOT_FOUND = -1;
// 배열안에 특정 요소의 인덱스를 찾아 변환하는 함수
function myIndexOf(array, searchElement) {
  for (let i = 0; i < array.length; i++) {
    if (searchElement === array[i]) return i;
  }
  return NOT_FOUND;
}

function myINcludes(array, searchElement) {
  return myIndexOf(array, searchElement) !== NOT_FOUND;
}

let foods = [`족발`, `피자`, `파스타`, `김치찌개`];

let idx = myIndexOf(foods, `파스타`);
console.log(idx);

let flag = myINcludes(foods, `족발`);
console.log(flag);
