import './Chart.css'
import React, { useState, useEffect, useContext } from 'react'
import { CurrentStock } from '../App'
import { Line } from 'react-chartjs-2'


function Chart() {

    const [stockName, setStockName] = useContext(CurrentStock)

    const [graphData, setGraphData] = useState([])


    // stockName이 변하면
    // 1. 차트 데이터 request
    // 2. 차트 다시 렌더링

    useEffect(() => {

    }, [stockName])

    /*
    graph data : dictionary
    { labels : [],
      datasets: [
          { label: String, data : Array, fill: boolean, backgroundColor: String(rgba), borderColor: String(rgba) }
      ]
    }
    <Line data={data} />
    */

    return (
        <>
            <div className="chart">
                <div className="chart__title">
                    <img src="" alt=""></img>
                    <p>{stockName}</p>
                    <p className="price">$121.00</p>
                </div>

                <div className="chart__chart">
                    <div className="chart__filter">
                        <div>1일</div>
                        <div>1주일</div>
                        <div>1개월</div>
                        <div>3개월</div>
                        <div>1년</div>
                        <div>5년</div>
                    </div>
                    <Line data={{}} />
                </div>
            </div>
        </>
    )
}

export default Chart
