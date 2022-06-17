import React, { useEffect, useState } from 'react'
import { stochastic } from 'technicalindicators';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import { rsi, rsiCheck, stochasticrsi } from 'trading-indicator';
import axios from 'axios';

const Indicators = (props) => {
  const [resultStochasti, setResultStochastic] = useState({ k: 0, d: 0 });
  const [payLoding, setPayLoding] = useState(false);

  // flashing
  const [valueA, setValueA] = useState(0);
  const [valueB, setValueB] = useState(0);

  useEffect(() => {
    //START PAGE
    STOonPayLoad();
    lineNotify();

    setInterval(() => {
      STOonPayLoad();
    }, 300000)

  }, [])

  const lineNotify = (text = 'START STO') => {
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

        if (valueA <= 30) {
          lineNotify(`STO ${parseFloat(data.k).toFixed(2)} is Oversold`)
        } else if (valueA >= 70) {
          lineNotify(`STO ${parseFloat(data.k).toFixed(2)} is Overbought`)
        }
      });
  }

  const renderIndicator = () => {
    return (
      <>
        <h1 onClick={() => STOonPayLoad()}>{`k: ${valueA} d: ${valueB}`}</h1>
      </>
    )
  }

  const flashingText = (name) => {
    return (
      <>
        <h1 style={{ color: 'red' }}>{`k: ${valueA} d: ${valueB}`}</h1>
      </>
    )
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