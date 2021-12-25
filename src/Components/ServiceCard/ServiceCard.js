import './ServiceCard.css';
import React from "react";
import database from "../Database/Database";
import {useContext} from "react";
import {AuthContext} from "../../App";
import Link from "react-router-dom/es/Link";


function CardPiece(props) {

    const {isAuth, modalActivate} = useContext(AuthContext)

    return (
            <div className="service__card">
                    <img className={"profLogo"} src ={props.logo} alt=" "/>
                    <h3>{props.title}</h3>
                        <span>В пакет входит:</span>
                        <ul className='serviceDescription'>
                            {props.content.map((cardDescription) => {
                                return(
                                    <li>
                                        {cardDescription}
                                    </li>
                                )
                            })}
                        </ul>
                        <span>По итогам Вы получаете:</span>
                            <ul className='serviceDescription'>
                                {props.result.map((cardDescription) => {
                                    return(
                                        <li>
                                            {cardDescription}
                                        </li>
                                    )
                                })}
                            </ul>
                        <span>Стоимость пакета:{props.price}</span>
                        {isAuth && <button className='buyButton' onClick={() => modalActivate(true)}>Приобрести</button>}
                        {!isAuth && <Link to="/registration"><button className='buyButton'>Зарегистрируйтесь для приобретения пакета</button></Link>}
            </div>
    );
}

function ServiceCard () {
    return (
        <div className="serviceContainer">
            {database.map((serviceName) => {
                return (
                    <CardPiece 
                        key={serviceName.id}
                        title={serviceName.title}
                        description={serviceName.description}
                        logo={serviceName.logo}
                        price={serviceName.price}
                        content={serviceName.content}
                        result={serviceName.result}
                    />
                )
            })}
        </div>
    );
}

export default ServiceCard;