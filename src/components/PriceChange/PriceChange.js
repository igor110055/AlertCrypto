import React, { useState, useContext, useEffect, useRef } from 'react';
import { WebSocketContext } from '../../context/context';

let price = 0;
export const PriceChange = () => {
    const priceRef = useRef(null);
    const { priceChange } = useContext(WebSocketContext);

    useEffect(() => {
        if (priceChange !== null) {
            price = priceChange
        }
    }, [priceChange]);

    const checkChangePrice = () => {
        if (priceRef.current === null) return;
        if (parseFloat(price).toFixed(2) > parseFloat(priceRef.current.innerText).toFixed(2)) {
            return (
                <div style={{ display: 'flex' }}>
                    <h1 ref={priceRef} style={{ color: 'green' }}>BTC :  {parseFloat(price).toFixed(1)}</h1>
                    <i className="pi pi-arrow-circle-up" style={{ color: 'green', 'fontSize': '25px', marginTop: '9px', marginLeft: '5px' }}></i>
                </div>
            )
        } else {
            return (
                <div style={{ display: 'flex' }}>
                    <h1 ref={priceRef} style={{ color: 'red' }}>BTC :  {parseFloat(price).toFixed(1)}</h1>
                    <i className="pi pi-arrow-circle-down" style={{ color: 'red', 'fontSize': '25px', marginTop: '9px', marginLeft: '5px' }}></i>
                </div>
            )
        }
    }

    return (
        <h1 ref={priceRef}> {checkChangePrice()}</h1>
    )
}
