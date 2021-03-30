import './Table.css'
import TableCell from './TableCell'
import React, { useState } from 'react'

function Table() {

    const [searchResult, setSearchResult] = useState([
        {
            title: "APPL",
            price: "$121.00"
        },
        {
            title: "GOOGL",
            price: "$63.12"
        },
        {
            title: "COUP",
            price: "$167.50"
        },
        {
            title: "MSFT",
            price: "$423.70"
        },
        {
            title: "TSLA",
            price: "$733.70"
        }
    ])

    return (
        <table className="table">
            <div className="table__header">
                <th className="table__title">종목명</th>
                <th className="table__price">현재가</th>
                <th>...</th>
            </div>

            <div>
                {
                    searchResult.map((cell) => (
                        <TableCell title={cell.title} price={cell.price} />
                    ))
                }
            </div>

        </table>
    )
}

export default Table
