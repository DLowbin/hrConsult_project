import React from 'react';
import './NavMenuStyle.css';
import {Link} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../App";


function NavMenu() {
    const {isAuth, logout} = useContext(AuthContext)
    return (
        <div className="header">
                <ul className="header-nav">
                    <li><Link to={'/'}>Главная</Link></li>
                    <li><Link to={'/articles'}> Статьи</Link></li>
                    <li><Link to='/about'>Обо мне</Link></li>
                    <li><Link to={'/services'}>Услуги</Link></li>
                    {!isAuth && <li><Link to={'/registration'}>Войти</Link></li>}
                    {isAuth && <li onClick={logout}>Выйти</li>}
                </ul>
        </div>
    );
}

export default NavMenu;