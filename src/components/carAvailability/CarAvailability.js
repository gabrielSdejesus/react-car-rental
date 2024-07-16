import moment from 'moment';

import Style from "./CarAvailability.module.css";

import SelectCustom from '../selectCustom/SelectCustom';

function CarAvailability () {

    return (
        <div className={`${Style.container}`}>
            <h4 style={{paddingTop: '32px', paddingLeft: '30px'}}>Car Availability</h4>
            <div className={`${Style.containerInputs}`}>
                <SelectCustom/>
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