let scores = [100, 100, 100, 100, 20];
let sum = 0;
let average = 0;

for (let i = 0; i < scores.length; i++) {
  sum += scores[i];
  average = sum / scores.length;
}

console.log(`총점 : ${sum} 평균 : ${average} 점`);
