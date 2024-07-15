
import { useEffect } from 'react';
import moment from 'moment';

import Style from "./CarAvailability.module.css";

function CarAvailability () {

    const dataSelect = [
        {name: 'Car Number 1', value: 1},
        {name: 'Car Number 2 Without 20', value: 2},
        {name: 'Car Number 3', value: 3},
        {name: 'Car Number 4', value: 4},
        {name: 'Car Number 5', value: 5}
    ]

    useEffect(() => {

    })

    return (
        <div className={`${Style.container}`}>
            <h4 style={{paddingTop: '32px', paddingLeft: '30px'}}>Car Availability</h4>
            <div className={`${Style.containerInputs}`}>
                <select className={`${Style.pL40PX}`}>
                    <option value="">Car Number</option>
                    {dataSelect.map((dado) => (
                        <option key={dado.value} value={dado.value}>{dado.name}</option>
                    ))}
                </select>
                <div>
                    <input
                        className={`${Style.dateInput}`}
                        type="date"
                        defaultValue={moment().format("YYYY-MM-DD")}
                        min="2020-01-01"
                        max="2030-01-01"/>
                    <input
                        className={`${Style.timeInput}`}
                        type="time"
                        defaultValue={moment().format("HH:mm")}
                    />
                </div>
                <button className={`${Style.buttonCheck}`}>Check</button>
            </div>
        </div>
    )
}

export default CarAvailability;