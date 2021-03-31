import './Trade.css'
import React from 'react'
import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom'

function Trade() {
    return (
        <div className="trade">
            <div className="trade__title">
                {/* <img src="" alt=""> */}
                <p>현재가격</p>
            </div>
            <div className="trade__trade">
                <Router>
                    <div className="trade__tab">
                        <div className="tab__buy tab__tab">
                            <Link to="/buy">매수</Link>
                        </div>
                        <div className="tab__sell tab__tab">
                            <Link to="/sell">매도</Link>
                        </div>
                    </div>
                    <Switch>
                        <Route path="/buy">
                            <div className="buy__content">
                                <p>주문가능</p>
                                <input type="text"></input>
                                <p>주문금액</p>
                                <input type="text"></input>
                                <div className="buyButton">매수하기</div>
                            </div>
                        </Route>
                        <Route path="/sell">
                            <div className="sell__content">
                                <p>매도수량</p>
                                <input type="text"></input>
                                <div className="sellButton">매도하기</div>
                            </div>
                        </Route>
                    </Switch>
                </Router>
            </div>

        </div>
    )
}

export default Trade
