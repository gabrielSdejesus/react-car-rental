import React, { useEffect, useRef } from 'react';
import Style from './CircleChart.module.css';
import Chart from 'chart.js/auto';

const CircleChart = () => {
    const myChartRef = useRef(null);

    const mockDados = [
        { id: 1, name: 'Total Hired', percentage: 54, color: '#006AFF', isUp: true },
        { id: 2, name: 'Total Canceled', percentage: 20, color: '#52C93F', isUp: true },
        { id: 3, name: 'Total Pending', percentage: 26, color: '#FF2727', isUp: false }
    ];

    useEffect(() => {
        const ctx = document.getElementById('chart');

        let data = {
            labels: ['Hired', 'Canceled', 'Pending'],
            datasets: [{
                label: ' Percentage',
                data: [54, 20, 26],
                backgroundColor: ['#006AFF', '#52C93F', '#FF2727']
            }]
        };

        myChartRef.current = new Chart(ctx, {
            type: 'doughnut',
            data: data,
            options: {
                plugins: {
                    legend: { display: false }
                },
                cutout: '68%'
            }
        });

        return () => {
            if (myChartRef.current) {
                myChartRef.current.destroy();
            }
        };
    }, []);

    return (
        <div className={Style.dflexCenter}>
            <div className={Style.container}>
                <div className={Style.top}>
                    <b className={Style.subTitle}>Hire vs Cancel</b>
                    <span className={Style.topToday}>Today</span>
                </div>
                <div className={`${Style.mT30px} ${Style.dflexCenter}`}>
                    <canvas id="chart" className={Style.chartCanvas}></canvas>
                </div>
                <div className={Style.dataList}>
                    {mockDados.map((dado) => (
                        <div key={dado.id} className={Style.dataItem}>
                            <div className={Style.dataDetails}>
                                <div className={`${Style.smallCircle}`} style={{ backgroundColor: dado.color }}></div>
                                <span className={Style.smallText}>{dado.name}</span>
                            </div>
                            <div className={Style.dataDetails}>
                                <span>{`${dado.percentage}%`}</span>
                                <div className={`${Style.arrow} ${dado.isUp ? Style.green : Style.red}`}>
                                    {dado.isUp ? '↑' : '↓'}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CircleChart;