import './Detail.css'
import btc from '../../res/BTC.png'
import React, { useState, useEffect } from 'react'

function Detail() {

    const [price, setPrice] = useState(0)

    return (
        <div className="detail">

            <div className="detail__title">
                <div className="detail__title__name">
                    <img src={btc} alt="" className="icon"></img>
                    <strong className="coinName">비트코인</strong>
                    <p style={{ 'padding': "12px 20px 0px 5px" }}>BTC/KRW</p>
                    <a href="#" style={{ 'padding': "12px 20px 0px 0px" }} >></a>
                </div>
                <div className="detail__title__tab">
                    <dd className="tab__selected"><a href="#">시세</a></dd>
                    <dd><a href="#">정보</a></dd>
                    <a href="#">set</a>
                </div>
            </div>

            <div className="detail__market">
                <div className="price">
                    <div className="price__price">
                        <span>{price}</span>
                        <p>KRW</p>
                    </div>
                    <div className="price__contrast">
                        전일대비
                        <span className="price__contrast__percentage">
                            +2.01% ^ +1,348,000
                        </span>
                    </div>
                    <div className="price__chart">

                    </div>
                </div>
                <div className="price__highlowvolume">
                    <div>
                        <div className="price__high">
                            <p>고가</p>
                            <strong>65,305,000</strong>
                        </div>
                        <div className="price__low">
                            <p>저가</p>
                            <strong>62,500,000</strong>
                        </div>
                    </div>
                    <div>
                        <div className="price__volume">
                            <p>거래량(24H)</p>
                            <span><strong>12,464.823</strong></span>
                            <p>BTC</p>
                        </div>
                        <div className="price__volumecost">
                            <p>거래대금(24H)</p>
                            <span><strong>802,124,291,499</strong></span>
                            <p>KRW</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="detail__foreign">
                <div className="foriegn__bitfinex">
                    <strong>Bitfinex</strong>
                    <span><strong>58,930,308</strong></span>
                    <span>($51,943.86)</span>
                </div>
                <div className="foriegn__kraken">
                    <strong>Kreaken</strong>
                    <span><strong>58,930,308</strong></span>
                    <span>($51,943.86)</span>
                </div>
                <div className="foriegn__liquid">
                    <strong>Liquid</strong>
                    <span><strong>58,930,308</strong></span>
                    <span>($51,943.86)</span>
                </div>
            </div>

            <div className="detail__chart">
                <div className="chart__settings">

                </div>
                <div className="chart__chart">

                </div>
            </div>
        </div >
    )
}

export default Detail
