import React from 'react';
import '../Main/Main.css'
import Setificate from '../../img/Main/certificate.png'
import Exdir from '../../img/Main/exdirector.png'
import Expert from '../../img/Main/expert.png'
import Audience from '../Audience/Audience';


const Main = () => {
    return (
        <div className='main__wrapper'>
            <h1>Авдеева Ангелина</h1>
            <h2>Ваш карьерный консультант</h2>
            <div className='regals'>
                <ul>
                    <li><img src={Setificate} alt="" /> Сертифицированный карьерный консультант</li>
                    <li><img src={Exdir} alt="" />Ex-Директор по персоналу международных строительных компаний</li>
                    <li><img src={Expert} alt="" />Эксперт по карьере в Госкорпорации «Росатом»</li>
                </ul>
            </div>
            <Audience/>
        </div>
    );
};

export default Main;