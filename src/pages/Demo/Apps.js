import React, { useEffect, useState, useContext } from 'react';
// import WebSocketDemo from './WebSocketDemo';
import { PriceChange } from '../../components/PriceChange/PriceChange';
import { rsi, rsiCheck, stochasticrsi } from 'trading-indicator';
import RsiChart from './RsiChart';
// import Indicators from './Indicators';
import RSI from '../../components/Indicators/RSI'
import STO from '../../components/Indicators/STO'

const Apps = () => {
    const [rsiData, setRsiData] = useState([])
    const [rsiCheckData, setRsiCheckData] = useState({ rsiVal: 0 })


    useEffect(() => {
        // https://www.npmjs.com/package/trading-indicator

    }, [])


    return (
        <div className="layout-dashboard">
            <div className="grid">
                <div className="col-12 pb-0">
                    <div className="grid">
                        <div className="col">
                            <div className="card overview-box white">
                                <div className="overview-info">
                                    <h6>Symbol</h6>
                                    <PriceChange />
                                </div>
                                <i><img src='assets/symbol/btc.png' width={'42px'} /></i>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card overview-box blue">
                                <div className="overview-info">
                                    <h6>Relative Strength Index (RSI)</h6>
                                    <RSI />
                                </div>
                                <i className="pi pi-chart-line" style={{ fontSize: '32px' }}></i>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card overview-box gray">
                                <div className="overview-info">
                                    <h6>Stochastic</h6>
                                    <STO />
                                </div>
                                <i className="pi pi-globe"></i>
                            </div>
                        </div>
                        {/* <div className="col">
                            <div className="card overview-box darkgray">
                                <div className="overview-info">
                                    <h6>Text coverage</h6>
                                    <h1>96%</h1>
                                </div>
                                <i className="pi pi-th-large"></i>
                            </div>
                        </div> */}
                        {/* <div className="col">
                            <div className="card overview-box orange">
                                <div className="overview-info">
                                    <h6>Cloud users</h6>
                                    <h1>4216</h1>
                                </div>
                                <i className="pi pi-cloud"></i>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );

}

const comparisonFn = function (prevProps, nextProps) {
    return prevProps.location.pathname === nextProps.location.pathname;
};

export default React.memo(Apps, comparisonFn);
