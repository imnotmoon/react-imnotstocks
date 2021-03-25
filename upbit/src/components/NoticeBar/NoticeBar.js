import './NoticeBar.css'
import React from 'react'

function NoticeBar() {
    return (
        <div className="noticebar">
            <div className="noticebar__content">
                {/* <img src="" alt=""> */}
                <span><strong style={{ color: "#0b3687" }}>공지</strong></span>
                <span><strong>[마켓] 디지털 자산 거래 지원 종료 안내(8종)</strong></span>
            </div>
            <div>
                <button className="noticebar__clostBtn">X</button>
            </div>
        </div >
    )
}

export default NoticeBar
