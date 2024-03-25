let pets = [`멍멍이`, `야옹이`, `쩝쩝이`];

console.log(pets);
pets[3] = `징징이`;
console.log(pets);

// push() 배열 맨 끝에 데이터를 추가해줌.
pets.push(`징징이`);
pets.push(`어흥이`, `거부긔`, `닭둘긔`);

console.log(pets);

//pop() : 배열 맨 끝 데이터 삭제

let myPet = pets.pop();
console.log(pets);
console.log(myPet);

// shift() : 배열의 맨 첫데이터 삭제
// unshift() : 배열의 맨 첫데이터 추가
pets.shift();

console.log(pets);
pets.unshift(`뽈뽈이`);

console.log(pets);
