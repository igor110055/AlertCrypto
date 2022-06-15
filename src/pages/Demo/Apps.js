import React, { useEffect, useState } from 'react';
import WebSocketDemo from './WebSocketDemo';
import { rsi, rsiCheck, stochasticrsi } from 'trading-indicator';
import RsiChart from './RsiChart';

const Apps = () => {
    const [rsiData, setRsiData] = useState([])
    const [rsiCheckData, setRsiCheckData] = useState({rsiVal:0})

    let basicData = {
        labels: rsiData,
        datasets: [
            {
                label: 'RSI',
                data: rsiData,
                fill: false,
                borderColor: '#42A5F5',
                tension: .4
            }
        ]
    }

    const getLightTheme = () => {
        let basicOptions = {
            maintainAspectRatio: false,
            aspectRatio: .6,
            plugins: {
                legend: {
                    labels: {
                        color: '#495057'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                },
                y: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                }
            }
        };

        let multiAxisOptions = {
            stacked: false,
            maintainAspectRatio: false,
            aspectRatio: .6,
            plugins: {
                legend: {
                    labels: {
                        color: '#495057'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                },
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        drawOnChartArea: false,
                        color: '#ebedef'
                    }
                }
            }
        };

        return {
            basicOptions,
            multiAxisOptions
        }
    }

    const { basicOptions, multiAxisOptions } = getLightTheme();

    useEffect(() => {
        // https://www.npmjs.com/package/trading-indicator
        // rsi(14, "close", "binance", "BTC/USDT", "15m", true)
        //     .then(function (result) {
        //         setRsiData(result)
        //     });
        // stochasticrsi(3, 3, 14, 14, 'close', 'binance', 'BTC/USDT', '5m', false)
        //     .then(function (result) {
        //         console.log(result);
        //     });
        setInterval(() => {
            rsiCheck(14, 75, 25, 'binance', 'BTC/USDT', '15m', false)
                .then(function (result) {
                    setRsiCheckData(result)
                    console.log('result', result)
                });
        }, 10000)
        return () => {

        }
    }, [])


    return (
        <div className="layout-dashboard">
            <div className="grid">
                <div className="col-12 pb-0">
                    <div className="grid">
                        <div className="col">
                            <div className="card overview-box white">
                                <div className="overview-info">
                                    <h6>BTC/USDT</h6>
                                    <WebSocketDemo />
                                </div>
                                <i className="pi pi-image"></i>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card overview-box blue">
                                <div className="overview-info">
                                    <h6>Relative Strength Index (RSI)</h6>
                                    <h1>{`RSI : ${rsiCheckData.rsiVal}`}</h1>
                                </div>
                                <i className="pi pi-users"></i>
                            </div>
                        </div>
                        {/* <div className="col">
                            <div className="card overview-box gray">
                                <div className="overview-info">
                                    <h6>Uptime</h6>
                                    <h1>5h12m</h1>
                                </div>
                                <i className="pi pi-globe"></i>
                            </div>
                        </div> */}
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
