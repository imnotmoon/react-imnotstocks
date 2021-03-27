import './List.css'
import React, { useState, useEffect } from 'react'
import Table from '../Table/Table'

function List() {

    const [searchbox, setSearchbox] = useState("")
    const [stockList, setStockList] = useState([])

    const onInputHandler = (event) => {
        setSearchbox(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault()

        // redux 사용해서 현재 주식 종목 정보 저장 && 그 redux 기준으로 업데이트

    }

    return (
        <div className="list">
            <div className="list__title">
                <p>주식목록</p>
            </div>
            <div className="list__searchbox">
                <input type="text" placeholder="종목 검색" onChange={onInputHandler} />
                <button>GO</button>
            </div>
            <div className="list__table">
                <Table />
            </div>

        </div>
    )
}

export default List
