import './NavBar.css'
import React from 'react'

function NavBar() {
    return (
        <div className="navbar">
            <div className="navbar__logo">
                <h2>카카오 모의투자</h2>
            </div>

            <div className="navbar__menus">
                <div className="navbar__menus__trading">
                    거래소
                </div>
                <div className="navbar__menus__trading">
                    투자내역
                </div>
                <div className="navbar__menus__trading">
                    고객센터
                </div>
            </div>

            <div className="navbar__buttons">
                <div className="signin">
                    로그인
                </div>
                <div className="signup">
                    회원가입
                </div>
            </div>
        </div>
    )
}

export default NavBar
