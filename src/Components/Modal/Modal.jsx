import React from "react";
import './Modal.css';

const Modal = ({active, setActive, children}) => {
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <form className={active ? "modal__content active" : "modal__content"} onClick={(e) =>e.stopPropagation()}>
                <p>Заполните данные, и мы свяжемся с Вами</p>
                <div className="form__email-wrapper">
                    <input className="form__input-field" type="email"
                        placeholder="Введите адрес электронной почты"
                        autoComplete="off"
                    />
                </div>
                <div className="form__password-wrapper">
                    <input className="form__input-field" 
                            type="tel"
                            placeholder="Введите номер телефона"
                    />
                </div>
                <button className='buyButton' type='submit'>Отправить</button>
            </form>

            
        </div>
    );
};

export default Modal;