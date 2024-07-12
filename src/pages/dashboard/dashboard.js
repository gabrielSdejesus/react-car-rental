import { useEffect } from 'react';
import Style from './dashboard.module.css';
import StatusAmount from '../../components/statusAmount/statusAmount';
import CicleChart from '../../components/circleChart/circleChart';
import Search from '../../components/search/Search';

function DashBoard() {
    
    useEffect(() => {
        document.title = 'Dashboard';
      }, []);

    return (
        <div style={{width: '100vh', height: '100%', display: 'flex'}}>
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
            <Search/>
        </div>
    );
}

export default DashBoard;