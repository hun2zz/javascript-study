const traders = [
  {
    trader: {
      name: "김철수",
      city: "대전",
    },
    year: 2023,
    value: 500000,
  },
  {
    trader: {
      name: "박영희",
      city: "서울",
    },
    year: 2022,
    value: 600000,
  },
  {
    trader: {
      name: "김철수",
      city: "대전",
    },
    year: 2022,
    value: 1200000,
  },
  {
    trader: {
      name: "박영희",
      city: "서울",
    },
    year: 2023,
    value: 650000,
  },
  {
    trader: {
      name: "뽀로로",
      city: "부산",
    },
    year: 2023,
    value: 800000,
  },
  {
    trader: {
      name: "루피",
      city: "대전",
    },
    year: 2022,
    value: 780000,
  },
];

// traders 의 lenght는 6 , traders[0].trader.name : 김철수이다.

// 연습 1: 2022년에 발생한 모든 거래를 찾아
//   거래자 정보(이름, 도시)를 배열에 매핑해주세요

// 연습 2: 거래자가 근무하는 모든 도시이름을 배열에 담아주세요.

// 연습 3: 대전에 근무하는
// 모든 거래자를 찾아 거래자정보(이름, 도시)를 배열에 매핑해주세요.

// 연습 4: 모든 거래자의 이름을 배열에 모아주세요.

// 연습 5: 서울에 사는 거래자의 모든 거래액의 총합 출력.

// 연습1 :
const filterTraders = traders
  .filter((n) => n.year === 2022)
  .map((n) => n.trader);

console.log(filterTraders);
console.log(`===================1`);

const filterCity = traders.map((user) => user.trader.city);
let objectqe = {};
filterCity.forEach((user) => (objectqe[user] = true));
const arr = Object.keys(objectqe);

console.log(arr);
console.log(`===================2`);

const filterCityTrader = traders
  .filter((user) => user.trader.city === `대전`)
  .map((user) => user.trader);

console.log(filterCityTrader);
console.log(`===================3`);

const mapName = traders.map((user) => user.trader.name);
console.log(mapName);
console.log(`===================4`);

const sumName = traders
  .filter((user) => user.trader.city === `서울`)
  .map((user) => +user.value);

let sum = 0;
for (let i = 0; i < sumName.length; i++) {
  sum += sumName[i];
}

console.log(sum);
console.log(`===================5`);
/*
6. **각 거래자별로 그들이 진행한 거래의 평균 거래액을 계산해주세요. 결과는 `{거래자이름: 평균거래액}` 형태의 객체가 되어야 합니다.**

7. **2022년과 2023년 각각에서 가장 많은 거래를 한 거래자의 이름과 그 거래 횟수를 출력해주세요.**

8. **모든 거래 중 거래액이 중간값인 거래의 정보(거래자 이름, 도시, 연도, 거래액)를 출력해주세요.**

9. **각 도시에서 진행된 거래의 수를 계산해주세요. 결과는 `{도시이름: 거래수}` 형태의 객체여야 합니다.**

10. **거래액을 기준으로 모든 거래를 오름차순으로 정렬한 후, 정렬된 리스트를 출력해주세요. 각 거래 정보는 거래자 이름, 도시, 연도, 거래액을 포함해야 합니다.**

*/
