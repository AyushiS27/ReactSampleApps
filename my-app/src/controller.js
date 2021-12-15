
var stockResult1 = [
    {
        id : "123", 
        name : 'Stock 1',
        price: 31
    },
    {
        id : "124", 
        name : 'Stock 2',
        price: 41
    },
    {
        id : "125", 
        name : 'Stock 3',
        price: 51
    }
]

export const stockResponse = (stockResult = stockResult1) =>{

    let newStocks = stockResult.map((stock) => {
        
        stock.oldPrice = stock.price;
        stock.price = Math.floor((Math.random() * 100) + 1);
        //stock.percent =  ((stock.price - stock.oldPrice)/stock.oldPrice) * 100;

        if(stock.isAdded){
            stock.percent =  ((stock.price - stock.currPrice)/stock.currPrice) * 100;
        }
        return stock;
    })
    
    console.log("result", newStocks);
    return newStocks;
}

// export const calcPercent = (holdingList) => {
//     if(holdingList.indexof(stock.id) > -1){
//         stock.oldPrice = stock.oldPrice;
//         stock.percent =  ((stock.price - stock.oldPrice)/stock.oldPrice) * 100;
//     }
// }