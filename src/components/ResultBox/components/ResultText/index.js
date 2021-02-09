import React from 'react';

function freeShippingText(hasFreeShipping) {
    return hasFreeShipping ? 'Llega gratis mañana' : ''
}

const ResultText = (props) => {
    return (
        <div className="text-container">
            <div className="text-former-price">{props.textData.symbol} {props.textData.formerPrice}</div>
            <div className="text-current-price">{props.textData.symbol} {props.textData.currentPrice}</div>
            <div className="text-payments">Hasta {props.textData.installments} cuotas sin interes</div>
            <div className="text-shipping">{freeShippingText(props.textData.hasFreeShipping)}</div>
            <div className="text-description">{props.textData.title}</div>
            <div className="text-store">{props.textData.manufacturer}</div>
        </div>
    )
};

export default ResultText; 