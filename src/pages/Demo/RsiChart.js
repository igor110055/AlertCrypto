import React, { useEffect, useState } from 'react';
import { Chart } from 'primereact/chart';

const RsiChart = (props) => {
    const [datasets, setDatasets] = useState([])
    const [labels, setLabels] = useState([])

    useEffect(() => {
        if (props.labels === null || props.data === null) return;
        setDatasets(props.data)
        setLabels(props.labels)
    }, [props.data])

    let basicData = {
        labels: labels,
        datasets: [
            {
                label: 'RSI',
                data: datasets,
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

    return (
        <div>
            <Chart type="line" data={basicData} options={basicOptions} />
        </div>
    );

}

// const comparisonFn = function (prevProps, nextProps) {
//     return prevProps.location.pathname === nextProps.location.pathname;
// };

export default React.memo(RsiChart);
