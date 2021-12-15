import './ServiceCard.css';
import Logo from './profession.png';
import React from "react";


const database =[
    'Service 1',
    'Service 2',
    'Service 3',
    'Service 4',
    'Service 5',
    'Service 6',
    'Service 7',
    'Service 8',
    'Service 9'
]

function CardPiece(props) {
    return (
            <div className="card center">
                <div className="front">
                    <img className={"profLogo"} src={Logo} />
                </div>
                <div className="back">
                    <div className="back-content center">
                        <h2>{props.title}</h2>
                        <span>Content</span>
                        <span>Price</span>
                    </div>
                </div>
            </div>
    );
}
function ServiceCard () {
    return (
    <div className="serviceContainer">
        {database.map((cardElement) => {
            return (<CardPiece title={cardElement}/>)
        })}

    </div>
    );
}


export default ServiceCard;