import './App.css';
import {useEffect, useRef, useState, useCallback} from 'react';
import {stockResponse} from './controller';

function App() {

    const [stockList, setStockList] = useState(stockResponse());
    const [holding, setHolding] = useState([]);
    const [selectedStock, setSelectedStock] = useState('');

    const stockHoldingId = [];
    console.log("render App");
    const addStock = (stock) => {
        debugger;
        setSelectedStock(stock);
    }

    const addStockHolding = () => {
        let stock = selectedStock;
        stockHoldingId.push(stock.id);
        let stockEle = stockList.filter((obj) => {
            return obj.id === stock.id; 
        })
        let state;
        if(stockEle.length > 0 && !stockEle[0].isAdded){
            stockEle[0].isAdded = true;
            stockEle[0].currPrice = stock.price;
            stockEle[0].qty = 1;
            state = oldArr => {
                debugger;
                return  [...oldArr, stock];
            }
        }
        else if(stockEle.length > 0 && stockEle[0].isAdded){
            stockEle[0].qty = ++stockEle[0].qty;
            state = holding;
        }

        debugger;
        setHolding(state);
        setSelectedStock('');
    }

    useEffect(() => {
        console.log("USE Effect Response");

        // const func = useCallback(() => {
            
        // })
        setInterval(() => {
            console.log("Call Stock");
            setStockList(stockResponse(stockList));
        }, 30000);
    },[]);
  return (
    <div className={`App`}>
        
      <div className="stock-list">
        <div className = "pickStock">
            <div className="pickedStock">{selectedStock.name}</div>
            <button className="addBtn" onClick={addStockHolding}> ADD</button>
        </div>
        {stockList && stockList.map((stock) => {
            return <div className="stockObj">
                <div>{stock.name} &nbsp;</div>
                <button onClick={() => {console.log(stock); addStock(stock)}} className="addStock">+</button>
                <div>&nbsp;{stock.price}</div>
            </div>
        })}

      </div>
      <div>Holdings
          <div>
              {console.log("holdig ", holding)}
              <table>
                  <tr>
                      <th>Name</th>
                      <th>QTY</th>
                      <th>ID</th>
                      <th>Price</th>
                      <th>Percent %</th>
                  </tr>
              {holding && holding.map((stockObj) => {
                  return (<tr class="">
                      <td >{stockObj.name}</td>
                      <td >{stockObj.qty}</td>
                      <td>{stockObj.id}</td>
                      <td>{stockObj.price}</td>
                      <td>{(stockObj.percent).toFixed(2)}%</td>
                </tr>)
              })}
               </table>
            </div>
      </div>
      
    </div>
  );
}

export default App;
