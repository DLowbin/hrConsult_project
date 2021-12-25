import React, { useState, useContext } from 'react';
import './Registration.css'
import ClientDataBase from '../Database/ClientDataBase'
import { AuthContext } from '../../App';
import { useHistory } from 'react-router-dom';


const Registration = () => {
    const {isAuth, login} = useContext(AuthContext)
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    function formSubmit (subm) {
        subm.preventDefault();
        const getUserList = ClientDataBase;
        const getCurrentUser = getUserList.find((user) => 
        (user.login === name && user.password === password))
        if  (getCurrentUser) {
            localStorage.setItem('isAuth', 'true')
            return login()
        }   else {
            return console.log('No such user')
        }
    }


    return (
        <form className="form" 
                noValidate
                onSubmit={formSubmit}
                >
            <h2 className="form__title">Регистрация</h2>
            <div className="form__email-wrapper">
                <input className="form__input-field" type="email" name="email_input"
                       placeholder="Введите адрес электронной почты"
                       autoComplete="off"
                       value={name}
                       onChange={(event)=>setName(event.target.value)}/>
            </div>
            <div className="form__password-wrapper">
                <input className="form__input-field" 
                        type="password" name="password_input"
                        placeholder="Введите пароль"
                        value={password}
                        onChange={(event)=>setPassword(event.target.value)}/>
            </div>
            <button className='submit__button' type='submit'>Войти</button>
            </form>
    );
};

export default Registration;