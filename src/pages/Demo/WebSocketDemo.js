import React, { useState, useCallback, useEffect, useRef } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';


const WebSocketDemo = () => {
    //Public API that will echo messages sent to it back to the client
    //https://github.com/binance/binance-spot-api-docs/blob/master/web-socket-streams.md#general-wss-information
    const [socketUrl, setSocketUrl] = useState('wss://stream.binance.com:9443/ws/btcusdt@depth20@1000ms');
    const { lastMessage } = useWebSocket(socketUrl);
    const [payload, setPayload] = useState({
        "lastUpdateId": 160,  // Last update ID
        "bids": [             // Bids to be updated
            [
                "0.0024",         // Price level to be updated
                "10"              // Quantity
            ]
        ],
        "asks": [             // Asks to be updated
            [
                "0.0026",         // Price level to be updated
                "100"            // Quantity
            ]
        ]
    });

    const [price1, setPrice1] = useState(0)
    const [colorChange, setColorChange] = useState({ color: 'red', fontWeight: true })
    const price_ref = useRef(null);

    useEffect(() => {
        if (lastMessage !== null) {
            let data = JSON.parse(lastMessage.data)
            setPayload(data);
            setPrice1(parseFloat(payload.c).toFixed(1))
            // parseFloat(payload.c).toFixed(1)
        }
    }, [lastMessage]);


    const checkChangePrice = () => {
        if (price_ref.current === null) return;
        var current_price = payload.asks[0][0];
        if (parseFloat(current_price).toFixed(2) > parseFloat(price_ref.current.innerText).toFixed(2)) {
            return (
                <h1 ref={price_ref} style={{ color: 'green' }}> {parseFloat(current_price).toFixed(1)}</h1>
            )
        } else {
            return (
                <h1 ref={price_ref} style={{ color: 'red' }}> {parseFloat(current_price).toFixed(1)}</h1>
            )
        }
    }


    return (
        <div className="grid">
            <div className="col-12">
                <div className="card">
                    <h5>webSocketDemo</h5>
                    <h1 ref={price_ref}> {checkChangePrice()}</h1>
                </div>
            </div>
        </div>
    );

}

const comparisonFn = function (prevProps, nextProps) {
    return prevProps.location.pathname === nextProps.location.pathname;
};

export default React.memo(WebSocketDemo, comparisonFn);