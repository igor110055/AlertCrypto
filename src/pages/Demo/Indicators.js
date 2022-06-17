import React, { useEffect, useState } from 'react'
import { stochastic } from 'technicalindicators';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import { rsi, rsiCheck, stochasticrsi } from 'trading-indicator';
import axios from 'axios';

const Indicators = (props) => {
  const [resultRSI, setResultRSI] = useState({ rsiVal: 0 })
  const [resultStochasti, setResultStochastic] = useState({ k: 0, d: 0 });
  const [payLoding, setPayLoding] = useState(false);

  // flashing
  const [valueA, setValueA] = useState(0);
  const [valueB, setValueB] = useState(0);

  useEffect(() => {
    //START PAGE
    STOonPayLoad();
    RSIonPayLoad();
    lineNotify();

    setInterval(() => {
      STOonPayLoad();
      RSIonPayLoad();
    }, 300000)

  }, [])

  const lineNotify = (text = 'START') => {
    axios.post('http://localhost:4001/api/send_line', {
      // axios.post('/send_line', {
      text: text
    }).then(function (res) {
      // console.log('res', res)
    });
  }

  const STOonPayLoad = () => {
    let high = []
    let low = []
    let close = []
    setPayLoding(true)
    axios.get('https://api.binance.com/api/v3/klines?interval=5m&limit=500&symbol=BTCUSDT')
      .then(function (res) {
        res.data.forEach(element => {
          high.push(element[2]);
          low.push(element[3]);
          close.push(element[4]);
        });
        let data = stochastic({
          high: high,
          low: low,
          close: close,
          period: 14,
          signalPeriod: 3
        })[486]
        setResultStochastic(data)
        setValueA(parseFloat(data.k).toFixed(2))
        setValueB(parseFloat(data.d).toFixed(2))
        setPayLoding(false)
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

  const renderIndicator = (name = '') => {
    if (name === 'sto') {
      return (
        <>
          <h1 onClick={() => STOonPayLoad()}>{`k: ${valueA} d: ${valueB}`}</h1>
        </>
      )
    } else if (name === 'rsi') {
      return (
        <>
          <h1 onClick={() => RSIonPayLoad()}>{`RSI: ${valueA}`}</h1>
        </>
      )
    } else {
      return (
        <>input name Indicator</>
      )
    }
  }

  const flashingText = (name) => {
    if (name === 'sto') {
      return (
        <>
          <h1 style={{ color: 'red' }}>{`k: ${valueA} d: ${valueB}`}</h1>
        </>
      )
    } else if (name === 'rsi') {
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