import React, { useEffect, useRef, useState } from 'react';
import Doughnut from '../../classes/chartDoughnut';
import Style from './circleChart.module.css';

function CircleChart() {

    useEffect(() => {
        const ctx = document.getElementById('chart');
        
        let data = {
            labels: ['Hired', 'Canceled', 'Pending'],
            datasets: [{
              label: '# of Votes',
              data: [54, 20, 26],
              backgroundColor: [
                  'rgb(0, 106, 255)',
                  'rgb(82, 201, 63)',
                  'rgb(255, 39, 39)'
                ]
            }]
        }
        
        new Doughnut (ctx, data, 'doughnut', '');

    }, []);

    return (
        <div className={`${Style.dflexCenter}`}>
            <div className={`${Style.container}`}>
                <div className={Style.top}>
                    <b className={Style.subTitle}>Hire vs Cancel</b>
                    <span className={Style.topToday}>Today</span>
                </div>
                <div>
                    <canvas id="chart"></canvas>
                </div>
            </div>
        </div>
    );
}

export default CircleChart;