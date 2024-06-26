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
      city: "부산",
    },
    year: 2022,
    value: 600000,
  },
  {
    trader: {
      name: "김철수",
      city: "대전",
    },
    year: 2023,
    value: 1200000,
  },
  {
    trader: {
      name: "박영희",
      city: "서울",
    },
    year: 2023,
    value: 6500000000,
  },
  {
    trader: {
      name: "뽀로로",
      city: "부산",
    },
    year: 2023,
    value: 111111100000,
  },
  {
    trader: {
      name: "루피",
      city: "대전",
    },
    year: 2022,
    value: 2333333330,
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

const total = traders
  .filter((trs) => trs.trader.city === `서울`)
  .reduce((total, trs) => total + trs.value, 0);
console.log(total);
console.log(`===================5`);
/*

1. **2023년에 대전에서 발생한 모든 거래의 총액을 계산해주세요.** 0 

2. **부산에서 거래한 모든 거래자의 이름을 배열에 담아 출력해주세요.**

3. **모든 거래 중 가장 높은 거래액을 가진 거래의 거래자 정보(이름, 도시)와 거래액을 출력해주세요.**

4. **각 도시별로 발생한 총 거래액을 객체 형태로 매핑해주세요. 예를 들어, `{서울: 총거래액, 부산: 총거래액}`과 같은 형태입니다.**

5. **거래액이 700000원 이상인 거래를 모두 찾아, 해당 거래의 연도별로 분류해주세요. 결과는 `{2022: [...거래정보], 2023: [...거래정보]}`와 같은 형태가 되어야 합니다.**

6. **각 거래자별로 그들이 진행한 거래의 평균 거래액을 계산해주세요. 결과는 `{거래자이름: 평균거래액}` 형태의 객체가 되어야 합니다.**

7. **2022년과 2023년 각각에서 가장 많은 거래를 한 거래자의 이름과 그 거래 횟수를 출력해주세요.**

8. **모든 거래 중 거래액이 중간값인 거래의 정보(거래자 이름, 도시, 연도, 거래액)를 출력해주세요.**

9. **각 도시에서 진행된 거래의 수를 계산해주세요. 결과는 `{도시이름: 거래수}` 형태의 객체여야 합니다.**

10. **거래액을 기준으로 모든 거래를 오름차순으로 정렬한 후, 정렬된 리스트를 출력해주세요. 각 거래 정보는 거래자 이름, 도시, 연도, 거래액을 포함해야 합니다.**

*/
let sumbdj = 0;
const sumName1 = traders
  .filter((user) => user.trader.city === `대전` && user.year === 2023)
  .map((user) => +user.value)
  .forEach((user) => (sumbdj += user));
console.log(sumbdj);
console.log(`===================gpt 1`);

const sumbusan = traders
  .filter((user) => user.trader.city === `부산`)
  .map((user) => user.trader.name);
console.log(sumbusan);
console.log(`===================gpt 2`);
// 3. **모든 거래 중 가장 높은 거래액을 가진 거래의 거래자 정보(이름, 도시)와 거래액을 출력해주세요.**
const high = traders.reduce(
  (max, current) => (current.value > max.value ? current : max),
  traders[0]
);
console.log(high);
console.log(`===================gpt 3`);
// 4. **각 도시별로 발생한 총 거래액을 객체 형태로 매핑해주세요.
// 예를 들어, `{서울: 총거래액, 부산: 총거래액}`과 같은 형태입니다.**
const countByColor = traders.reduce((count, win) => {
  if (win.trader.city in count) {
    count[win.trader.city] += win.value;
  } else {
    count[win.trader.city] = win.value;
  }
  return count;
}, {});

console.log(countByColor);
console.log(`===================gpt 4`);
// 5. **거래액이 700000원 이상인 거래를 모두 찾아, 해당 거래의 연도별로 분류해주세요.
//  결과는 `{2022: [...거래정보], 2023: [...거래정보]}`와 같은 형태가 되어야 합니다.**
const countBytrade = traders
  .filter((n) => n.value >= 700000)
  .reduce((count, win) => {
    if (win.trader.city in count) {
      count[win.trader.city].push(win);
    } else {
      count[win.trader.city] = [win];
    }
    return count;
  }, {});
console.log(countBytrade);
console.log(`===================gpt 5`);

// 6. **각 거래자별로 그들이 진행한 거래의 평균 거래액을 계산해주세요.
// 결과는 `{거래자이름: 평균거래액}` 형태의 객체가 되어야 합니다.**
/*
    {
      '김철수`: {
        `총액`: 3000000,
        `거래횟수`: 5
      },
    }
  */
const trsDAtaByName = traders.reduce((averageList, trs) => {
  //평균을 구하려면 각자의 거래액 총합들과 거래 횟수를 구해야 한다.
  const name = trs.trader.name;
  if (!averageList[name]) {
    // 이 사람 이름이 처음 등장했으면,
    averageList[name] = { total: trs.value, count: 1 };
  } else {
    averageList[name].total += trs.value;
    averageList[name].count++;
  }
  return averageList;
}, {});
// console.log(trsDAtaByName);
//평균 구하기 진행.
for (const key in trsDAtaByName) {
  trsDAtaByName[key] = trsDAtaByName[key].total / trsDAtaByName[key].count;
}
console.log(trsDAtaByName);
console.log(`===================gpt 6`);
// 7. **2022년과 2023년 각각에서 가장 많은 거래를 한 거래자의 이름과 그 거래 횟수를 출력해주세요.**
const result = traders.reduce((acc, trs) => {
  //연도별 거래자 거래 횟수 집계
  const key = `${trs.year}_${trs.trader.name}`;
  if (!acc[key]) {
    acc[key] = 1;
  } else {
    acc[key]++;
  }

  // 연도별 최대 거래 횟수 찾기
  const yearMaxkey = `max_${trs.year}`;
  if (!acc[yearMaxkey] || acc[key] < acc[yearMaxkey.count]) {
    acc[yearMaxkey] = { name: trs.trader.name, count: acc[key] };
  }
  return acc;
}, {});

console.log(result);
// 8. **모든 거래 중 거래액이 중간값인 거래의 정보(거래자 이름, 도시, 연도, 거래액)를 출력해주세요.**
// 거래액 오름차로 정렬
// 정렬은 원본을 손상시킨다. - 안전하게 하려면 복사 후 정렬
console.log(`================================`);
const sortedTrader = traders.slice().sort((a, b) => a.value - b.value);
// console.log(sortedTrader);
// 중간 값 거래 정보 찾기

// 배열의 요소 수가 홀 수면 정확한 중간 인덱스가 나오지만,
// 짝수면 중앙 두 값의 평균을 중간값으로 한다.
const middleIndex = Math.floor(sortedTrader.length / 2); // 가운데 인덱스를 찾기
let middleTradeInfo;
if (sortedTrader.length % 2 === 1) {
  // 배열의 요소 수가 홀수인 경우
  //정확한 중간 인덱스를 지정해주면 된다.
  middleTradeInfo = sortedTrader[middleIndex];
} else {
  // 값이 짞수인 경우
  middleTradeInfo = [sortedTrader[middleIndex - 1], sortedTrader[middleIndex]];
}
// 9. **각 도시에서 진행된 거래의 수를 계산해주세요. 결과는 `{도시이름: 거래수}` 형태의 객체여야 합니다.**

console.log(`================================`);

const cityValue = traders.reduce((acc, { trader }) => {
  const { city } = trader;
  if (!acc[city]) {
    acc[city] = 1;
  } else {
    acc[city]++;
  }
  return acc;
}, {});

console.log(cityValue);
// 10. **거래액을 기준으로 모든 거래를 오름차순으로 정렬한 후, 정렬된 리스트를 출력해주세요.
// 각 거래 정보는 거래자 이름, 도시, 연도, 거래액을 포함해야 합니다.**
console.log(`================================`);
const sortedTrs = traders.slice().sort((a, b) => a.value - b.value);
console.log(sortedTrs);
