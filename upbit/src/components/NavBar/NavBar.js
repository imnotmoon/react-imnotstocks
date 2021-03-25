import './NavBar.css'
import React from 'react'
import logo from '../../res/logo.png'

function NavBar() {
    return (
        <div className="navbar">
            <img src={logo} alt="" className="logo"></img>
            {/* menus */}
            <div className="navbar__menu">
                <div className="navebar__menuItem focus">
                    거래소
                </div>
                <div className="navebar__menuItem">
                    입출금
                </div>
                <div className="navebar__menuItem">
                    투자내역
                </div>
                <div className="navebar__menuItem">
                    코인동향
                </div>
                <div className="navebar__menuItem">
                    고객센터
                </div>
            </div>
            <div className="navbar__myMenu">

                <div className="navbar__myMenu__Item">
                    로그인
                </div>
                <div className="navbar__myMenu__Item">
                    회원가입
                </div>
                <div className="navbar__myMenu__Item">
                    {/* <img src="#" alt="">ㅁ</img> */}
                </div>
            </div>
        </div>
    )
}

export default NavBar
