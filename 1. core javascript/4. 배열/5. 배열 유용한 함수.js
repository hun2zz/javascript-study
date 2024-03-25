let foodList = [`닭꼬치`, `볶음밥`, `짜장면`, `족발`];

// indexOf(): 배열의 특정 요소가 몇 번 인덱스에 있는지 알려준다.
// 인덱스 오브로 가져오는 값에 동일한 값이 있다면 앞에 있는 값을 가져온다, 못 찾으면 -1을 가져오게 된다.

let target = `짜장면`;

let index = foodList.indexOf(target);

console.log(index);

//include() : 특정 데이터가 있는 지 없는 지 논리로 확인한다. 있으면 true 없으면 false
let flag = foodList.includes(`떡볶이`);
console.log(flag);

// slice() : 배열을 원하는 범위만큼 이상, 미만이므로 1이상 3미만이다 1~2까지 이다.
let sliced = foodList.slice(1, 3);
console.log(sliced);

// 3번부터 끝까지
let sliced2 = foodList.slice(3);
console.log(sliced2);
//전체 복사
let sliced3 = foodList.slice();
console.log(sliced3);

// slice를 해도 복사본에서 추출을 하는 개념이라 원본은 변하지 않음.
console.log(foodList);
console.log(`================`);

// reverse(): 배열을 역으로 정렬시킨다. 원본이 변경 됨
let nums = [10, 20, 30, 40, 50];
let numsCopy = nums.slice();

numsCopy.reverse();

console.log(nums);
console.log(numsCopy);
console.log(`====================`);
// concat():배열을 결합 시킴. / 배열을 결합한 사본을 갖다준다. 원본은 바뀌지 않음.
let arr1 = [10, 20, 30];
let arr2 = [99, 999];

let concated = arr1.concat(arr2);
console.log(concated);
console.log(`====================`);
// splice() : 배열의 삭제 및 삽입. / 원본에서 삭제 삽입을 진행하므로 원본이 손상될 수 있음.

console.log(foodList);
// 1번 인덱스부터 2개를 지우세요 라는 뜻이다. 1,1 이라고 하면 볶음밥만 지울 수 있다.
foodList.splice(1, 2);
console.log(foodList);

foodList.splice(0, 1, `파스타`);
console.log(foodList);
