stockList = [45,24,35,31,40,38,11]; // returns 16


function getHighestPrice(arr){
  var highestPrice = 0;

  arr.forEach( (el) => {
    if (el > highestPrice) {highestPrice = el}
  });
  // console.log(highestPrice);
  return highestPrice;
}


function maxProfit(stockList){
  // returns the maximum profit that could have been made
  // by buying a stock at the given price and then selling the stock later
  var buyPrice;
  var sellPrice;
  var maxProfit;
  var flag = 0

  stockList.forEach( (el,i) => {

  if ( (stockList[i - 1] > stockList[i]) && flag === 0 ) {
    // BUY IT
    buyPrice = el;
    var stockListForRestDay = stockList.slice(i + 1);
    console.log(stockListForRestDay);
    sellPrice = getHighestPrice(stockListForRestDay);
    // console.log(sellPrice, 'sell');
    flag++
  }
});
  console.log(sellPrice, 'sell');
  console.log(buyPrice, 'buy');
  maxProfit =  sellPrice - buyPrice;
  console.log(maxProfit,'max');
  return maxProfit;
}


maxProfit(stockList);