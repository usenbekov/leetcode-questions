/**
 * @param {number[]} prices
 * @return {number}
 */
/*
noStock -> no stock in hand
inHand -> stock is bought but not sold
sold -> stock will be sold today

noStock  sold
     \   /
    noStock

inHand  noStock - prices[today]
     \   /
    inHand

inHand + prices[today]
    |
   sold
*/
var maxProfit = function(prices) {
  let noStock = 0;
  let inHand = Number.NEGATIVE_INFINITY;
  let sold = inHand;
  
  for (let price of prices) {
      const preSold = sold;
      sold = inHand + price;
      inHand = Math.max(inHand, noStock - price);
      noStock = Math.max(noStock, preSold);
  }
  
  return Math.max(noStock, sold);
};

