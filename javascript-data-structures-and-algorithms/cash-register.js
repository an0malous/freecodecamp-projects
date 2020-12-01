

function checkCashRegister(price, cash, cid) {
  let currentChangeToGiveBack = cash - price;
  if (price === cash) {
    return { status: "CLOSED", change: [] };
  };

const totalCidVal = Math.round(cid.map(item=>item[1]).reduce((acc, curr)=>acc + curr))

  if (totalCidVal === currentChangeToGiveBack) {
    return { status: "CLOSED", change: cid };
  };

  const unitCurrencyTable = {
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

  let change = [];

  for (let i = cid.length - 1; i >= 0; i--) {
    if (unitCurrencyTable[cid[i][0]] <= currentChangeToGiveBack) {
      let numOfItem;
      const cidItemCurrencyVal = unitCurrencyTable[cid[i][0]];
      const cidItemTotal = cid[i][1];
      
      //Checks how many times currentChangeToGiveBack is evenly divisible by cidItemCurrencyVal by dividing
      //totals then flooring the decimal. Also Checks that the amount does not exceed what is the
      //the drawer. 
      if (currentChangeToGiveBack / cidItemCurrencyVal <= cidItemTotal / cidItemCurrencyVal) {
        numOfItem = Math.floor(currentChangeToGiveBack / cidItemCurrencyVal );
      } else {
        numOfItem = Math.floor(cidItemTotal / cidItemCurrencyVal);
      };

      const amount = numOfItem * cidItemCurrencyVal;

     const cidItemTotalRemaining = cidItemTotal - amount;
      if (cidItemTotalRemaining <= 0 && i <= 0) {
        console.log({ status: "INSUFFICIENT_FUNDS", change: [] })
        return { status: "INSUFFICIENT_FUNDS", change: [] };
      };

      change.push([cid[i][0], amount]);
      currentChangeToGiveBack = currentChangeToGiveBack - amount;
      currentChangeToGiveBack = Math.round((currentChangeToGiveBack  + Number.EPSILON) * 100) / 100;
    };
  };
  console.log(cid)
  console.log({ status: "OPEN", change })
  return { status: "OPEN", change };
};
