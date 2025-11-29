export function totalIn(trackerIn) {
  let total = 0;
  trackerIn.forEach((trans) => {
    total += trans.money;
  });
  return total;
}
export function totalOut(trackerOut) {
  let total = 0;
  trackerOut.forEach((trans) => {
    total += trans.money;
  });
  return total * -1;
}
export function totalAll(trackerIn, trackerOut, totalMoney) {
  let totalIn = 0;
  let totalOut = 0;
  trackerIn.forEach((trans) => {
    totalIn += trans.money
  });
  trackerOut.forEach((trans) => {
    totalOut += trans.money;
  });
  const total = totalIn + totalOut;
  const totalMoneyNum = Number(totalMoney);
  return totalMoneyNum + total;
}
