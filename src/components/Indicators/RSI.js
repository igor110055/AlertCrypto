import React, { useEffect, useState } from 'react'
import { stochastic } from 'technicalindicators';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import { rsi, rsiCheck, stochasticrsi } from 'trading-indicator';
import axios from 'axios';


        // https://www.npmjs.com/package/trading-indicator


const Indicators = (props) => {
  const [resultRSI, setResultRSI] = useState({ rsiVal: 0 })
  const [payLoding, setPayLoding] = useState(false);

  // flashing
  const [valueA, setValueA] = useState(0);
  const [valueB, setValueB] = useState(0);

  useEffect(() => {
    //START PAGE
    RSIonPayLoad();
    lineNotify();

    setInterval(() => {
      RSIonPayLoad();
    }, 300000)

  }, [])

  const lineNotify = (text = 'START RSI') => {
    axios.post('http://localhost:4001/api/send_line', {
      // axios.post('/send_line', {
      text: text
    });
  }

  const RSIonPayLoad = () => {
    setPayLoding(true)
    rsiCheck(14, 75, 25, 'binance', 'BTC/USDT', '5m', false)
      .then(function (result) {
        setResultRSI(result)
        setValueA(parseFloat(result.rsiVal).toFixed(2))
        setPayLoding(false)
        if (result.rsiVal <= 30) {
          lineNotify(`RSI ${result.rsiVal} is Oversold`)
        } else if (result.rsiVal >= 70) {
          lineNotify(`RSI ${result.rsiVal} is Overbought`)
        }
      });
  }

  const renderIndicator = () => {
      return (
        <>
          <h1 onClick={() => RSIonPayLoad()}>{`RSI: ${valueA}`}</h1>
        </>
      )
  }

  const flashingText = (name) => {
    if (name === 'rsi') {
      return (
        <>
          <h1 style={{ color: 'red' }}>{`RSI: ${valueA}`}</h1>
        </>
      )
    }
  }

  return (
    <div>{payLoding === true ?
      flashingText(props.name)
      :
      renderIndicator(props.name)}
    </div>
  )
}

export default Indicators