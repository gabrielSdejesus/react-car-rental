import { useEffect } from 'react';

import Style from './Dashboard.module.css';

import StatusAmount from '../../components/statusAmount/StatusAmount';
import CicleChart from '../../components/circleChart/CircleChart';
import Search from '../../components/search/Search';
import CarAvailability from '../../components/carAvailability/CarAvailability';
import LiveCarStatus from '../../components/liveCarStatus/LiveCarStatus';

function DashBoard() {
    
    useEffect(() => {
        document.title = 'Dashboard';
      }, []);

    return (
        <div style={{display: 'flex'}}>
            <div className={Style.dashBoard}>
                <StatusAmount 
                    percentage={-1.5} 
                    titlePrincipal="Todays Statistics" 
                    dateNow="Tue, 14 Nov, 2022, 11.30 AM"
                    subTitle="Income"
                    amount="9460.00"
                    amountYesterday="9940.00"
                    amountLastWeek="25658.00"/>
                <StatusAmount 
                    percentage={2.5}
                    subTitle="Expences"
                    amount="5660.00"
                    amountYesterday="5240.00"
                    amountLastWeek="22658.00"/>
                <CicleChart/>
            </div>
            <div>
                <LiveCarStatus/>
                <Search/>
                <CarAvailability/>
            </div>
        </div>
    );
}

export default DashBoard;