import React from 'react';
import './NavMenuStyle.css';
import Link from "react-router-dom/Link";
import {useContext} from "react";
import {AuthContext} from "../App";


function NavMenu() {
    const {isAuth, logout} = useContext(AuthContext)
    return (
        <div className="header">
            <nav>
                <ul className="header-nav">
                    <li><Link to={'/'}>Главная</Link></li>
                    <li><Link to={'/articles'}> Статьи</Link></li>
                    <li><Link to='/about'>Обо мне</Link></li>
                    <li><Link to={'/services'}>Услуги</Link></li>
                    {!isAuth && <li><Link to={'/registration'}>Войти</Link></li>}
                    {isAuth && <li onClick={logout}>Выйти</li>}
                </ul>
            </nav>
        </div>
    );
}

export default NavMenu;