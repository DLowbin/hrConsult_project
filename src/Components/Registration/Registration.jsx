import React from 'react';
import './Registration.css'

const Registration = () => {
    return (
        <form className="form" action="POST" method="" noValidate>
            <h1 className="form__title">Регистрация</h1>
            <div className="form__email-wrapper">
                <label className="form__input-label" htmlFor="email">Email</label>
                <input className="form__input-field" id="email" type="email" name="email_input"
                       placeholder="Введите адрес электронной почты" autoComplete="off"/>

            </div>
                <div className="form__password-wrapper">
                    <label className="form__input-label" htmlFor="password">Пароль</label>
                    <input className="form__input-field" id="password" type="password" name="password_input"
                           placeholder="Введите пароль"/>
                </div>
            <button>Войти</button>
            </form>
    );
};

export default Registration;