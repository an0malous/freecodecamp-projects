function checkCashRegister(price, cash, cid) {
  let change = cash - price;
  if (price === cash) {
    return { status: "CLOSED", change: [change] };
  };

  let acc = 0;
  for (let i = 0; i < cid.length; i++) {
    acc = acc + cid[i][1];
  };
  acc = Math.round((acc + Number.EPSILON) * 100) / 100;

  if (acc === change) {
    return { status: "CLOSED", change: cid };
  };

  const unitTable = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    "ONE HUNDRED": 100,
  };

  let filterChange = [];
  for (let i = cid.length - 1; i >= 0; i--) {
    if (unitTable[cid[i][0]] <= change) {
      let remainder;
      
      if (change / unitTable[cid[i][0]] <= cid[i][1] / unitTable[cid[i][0]]) {
        remainder = Math.floor(change / unitTable[cid[i][0]]);
      } else {
        remainder = Math.floor(cid[i][1] / unitTable[cid[i][0]]);
      };

      cid[i][1] = cid[i][1] - remainder * unitTable[cid[i][0]];

      if (i <= 0 && cid[i][1] <= 0) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
      };

      filterChange.push([cid[i][0], remainder * unitTable[cid[i][0]]]);
      change = change - remainder * unitTable[cid[i][0]];
      change = Math.round((change + Number.EPSILON) * 100) / 100;
    };
  };
  return { status: "OPEN", change: filterChange };
};
