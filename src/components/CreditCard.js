import React from 'react';
import "../components/Components.css";

function CreditCard(props) {
    const {type,number,expirationMonth,expirationYear,bank,owner,bgColor,color} = props;
    return (
        //console.log('something')
        <div className="cc-container" style={{
            backgroundColor: `${bgColor}`,
            color: `${color}`
          }}>
            {type === "Visa" ? <img src="img/visa.png" alt={type} /> : <img src="img/master-card.svg" alt={type}/>}
            <div className="cc-number">•••• •••• •••• {number.substr(-4)}</div>
            <div className="cc-date-bank">
                <span>Expires {('0'+expirationMonth).substr(-2)}/{expirationYear.toString().substr(2)} </span>
                <span>{bank}</span>
            </div>
            <div className="cc-owner">{owner}</div>
        </div>
    )
}

export default CreditCard