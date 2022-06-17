import { createContext, useState, useEffect } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';

export const WebSocketContext = createContext();
let priceChange = 0;
export const WebSocketProvider = ({ children }) => {
    //Public API that will echo messages sent to it back to the client
    //https://github.com/binance/binance-spot-api-docs/blob/master/web-socket-streams.md
    const [socketUrl, setSocketUrl] = useState('wss://stream.binance.com:9443/ws/btcusdt@depth20@1000ms');
    const { lastMessage, lastJsonMessage } = useWebSocket(socketUrl);
    const [payload, setPayload] = useState();

    useEffect(() => {
        if (lastJsonMessage !== null) {
            priceChange = parseFloat(lastJsonMessage.asks[0][0]).toFixed(1)
        }
    }, [lastJsonMessage]);


    return (
        <WebSocketContext.Provider
            value={{
                priceChange
            }}
        >
            {children}
        </WebSocketContext.Provider>
    )
}