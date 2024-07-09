
import Style from './miniStatus.module.css';

function MiniStatus (props) {
    
    const colorPercentMid = props.percentage > 0 ? Style.blue : Style.red; 
    const arrowMid = props.percentage > 0 ? '↑' : '↓';

    return (
        <div className={Style.firstDashboard}>
            {props.titlePrincipal && (
                <div className={Style.m35px}>
                    <b className={Style.title}>{props.titlePrincipal} </b><br/>
                    <span className={Style.subTitlePrincipal}> {props.dateNow} </span>
                </div>
            )} 
            <div className={Style.dflexCenter}>
                <div className={Style.sub}>
                    <div className={Style.top}>
                        <b className={Style.subTitle}>{ props.subTitle }</b>
                        <span className={Style.topToday}>Today</span>
                    </div>
                    <hr className={Style.fullWidthHr}/>
                    <div className={Style.mid}>
                        <b className={Style.amount}>$ {props.amount}</b>
                        <b className={`${Style.change} ${colorPercentMid}`}>{arrowMid} {props.percentage}%</b>
                    </div>
                    <div className={Style.bottom}>
                        <span className={Style.comparison}>Compared to ${props.amountYesterday} yesterday</span>
                        <div className={Style.lastWeek}>
                            <b>Last week {props.subTitle}</b> 
                            <b>${props.amountLastWeek}</b>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default MiniStatus;