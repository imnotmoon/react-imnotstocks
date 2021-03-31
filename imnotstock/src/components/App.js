import './App.css';
import Navbar from './NavBar/NavBar'
import Chart from './Chart/Chart'
import List from './List/List'
import Trade from './Trade/Trade'
import News from './News/News'
import Talk from './Talk/Talk'
import React, { useState, createContext } from 'react'


// Context를 통해 하위 컴포넌트에 prop 전달
export const CurrentStock = React.createContext()

function App() {

  const [stockName, setStockName] = useState("APPL")

  return (
    <CurrentStock.Provider value={[stockName, setStockName]}>
      <div className="App">
        <Navbar />
        <div className="content">
          <div className="content-up">
            <div className="content__chart">
              <Chart />
            </div>
            <div className="content__list">
              <List />
            </div>
          </div>
          <div className="content-down">
            <div className="content__trade">
              <Trade />
            </div>
            <div className="content__news">
              <News />
            </div>
            <div className="content__talk">
              <Talk />
            </div>
          </div>
        </div>
      </div>
    </CurrentStock.Provider>
  );
}

export default App;
