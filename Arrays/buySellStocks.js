// You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different in the future to sell that stock. Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

function buySellStocks(stocks) {
    let profit = 0;
    let minBuy = stocks[0];

    // Poor time complexity - O(n^2)
    // for(let i=0; i<stocks.length; i++){
    //     for(let j=i+1 ; j<stocks.length; j++){
    //         if((stocks[j]-stocks[i]) > profit){
    //             profit = stocks[j] - stocks[i];
    //         }
    //     }
    // }

    for(let i=0; i<stocks.length; i++){
        if(stocks[i] < minBuy){
            minBuy = stocks[i];
        }
        if((stocks[i] - minBuy) > profit){
            profit = stocks[i] - minBuy;
        }
    }

    return profit;
}

const result = buySellStocks([6, 4, 3, 2, 1]);
console.log(result)