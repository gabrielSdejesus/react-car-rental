import { useEffect } from 'react';
import Style from './dashboard.module.css';
import MiniStatus from '../../components/miniStatus/miniStatus';

function DashBoard() {
    
    useEffect(() => {
        document.title = 'Dashboard';
      }, []);

    return (
        <div className={Style.dashBoard}>
            <MiniStatus 
                percentage={-1.5} 
                titlePrincipal="Todays Statistics" 
                dateNow="Tue, 14 Nov, 2022, 11.30 AM"
                subTitle="Income"
                amount="9460.00"
                amountYesterday="9940.00"
                amountLastWeek="25658.00"/>
            <MiniStatus 
                percentage={2.5}
                subTitle="Expences"
                amount="5660.00"
                amountYesterday="5240.00"
                amountLastWeek="22658.00"/>
        </div>
    );
}

export default DashBoard;