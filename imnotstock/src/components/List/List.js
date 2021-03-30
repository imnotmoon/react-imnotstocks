import './List.css'
import React, { useState, useContext } from 'react'
import Table from '../Table/Table'
import { CurrentStock } from '../App'

function List() {

    const [searchbox, setSearchbox] = useState("")
    const [stockList, setStockList] = useState([])

    // useContext
    const [stockName, setStockName] = useContext(CurrentStock)

    const onInputHandler = (event) => {
        setSearchbox(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault()
        // redux 사용해서 현재 주식 종목 정보 저장 && 그 redux 기준으로 업데이트
        setStockName(searchbox)
    }

    return (
        <CurrentStock.Consumer>
            {() => (
                <div className="list">
                    <div className="list__title">
                        <p>주식목록</p>
                    </div>
                    <div className="list__searchbox">
                        <input type="text" placeholder={stockName} onChange={onInputHandler} />
                        <button onClick={onSubmitHandler}>GO</button>
                    </div>
                    <div className="list__table">
                        <Table />
                    </div>
                </div>
            )}
        </CurrentStock.Consumer>

    )
}

export default List
