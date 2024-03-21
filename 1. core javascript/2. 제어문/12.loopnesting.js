let hang = prompt(`첫 번째 변을 적어주세요.`);
let line = prompt(`두 번째 변을 적어주세요.`);
let ht = ``;

for (let i = 0; i < line; i++) {
  for (let j = 0; j < hang; j++) {
    ht += `*`;
  }
  ht += `\n`;
}

alert(ht);
