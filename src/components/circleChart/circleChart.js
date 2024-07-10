import React, { useEffect, useRef } from 'react';
import ChartDoughnut from '../../classes/chartDoughnut';
import Style from './circleChart.module.css';

function CircleChart() {
    const chartContainer = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        if (chartContainer && chartContainer.current) {
            const ctx = chartContainer.current.getContext('2d');

            const data = {
                datasets: [{
                    label: ['Value: '],
                    data: [54, 20, 26],
                    backgroundColor: [
                      '#006AFF',
                      '#52C93F',
                      'rgb(255, 205, 86)'
                    ],
                    hoverOffset: 4
                }]
            };

            chartInstance.current = new ChartDoughnut(
                ctx, 
                data, 
                'doughnut', 
                {
                    plugins: {
                        legend: {
                            position: 'bottom'
                        }
                    },
                    datalabels: {
                        formatter: (value, ctx) => {
                            let sum = 0;
                            let dataArr = ctx.chart.data.datasets[0].data;
                            dataArr.map(data => {
                                sum += data;
                            });
                            let percentage = (value*100 / sum).toFixed(2)+"%";
                            return percentage;
                        }
                    }
                },
            );

        }

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, []);

    return (
        <div className={`${Style.dflexCenter}`}>
            <div className={`${Style.container}`}>
                <div className={Style.top}>
                    <b className={Style.subTitle}>Hire vs Cancel</b>
                    <span className={Style.topToday}>Today</span>
                </div>
                <div>
                    <canvas ref={chartContainer} id="acquisitions"></canvas>
                </div>
            </div>
        </div>
    );
}

export default CircleChart;