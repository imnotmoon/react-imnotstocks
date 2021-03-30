import React from 'react'

function TableCell({ title, price }) {
    return (
        <tr className="table__cell">
            <td className="table__cell__title">{title}</td>
            <td className="talbe__cell__price">{price}</td>
        </tr>
    )
}

export default TableCell