import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Style from './menu.module.css';

import DashBoardSVG from '../../assets/svg/Dashboard.svg';
import BellSVG from '../../assets/svg/Bell.svg';
import BookingSVG from '../../assets/svg/Booking.svg';
import CarSVG from '../../assets/svg/Car.svg';
import SettingsSVG from '../../assets/svg/Settings.svg';
import FrameSVG from '../../assets/svg/Frame.svg';
import ReportSVG from '../../assets/svg/Report.svg';
import TransactionSVG from '../../assets/svg/Transaction.svg';
import PaymentSVG from '../../assets/svg/Payment.svg';

const menuItems = [
    { name: "Dashboard", svg: DashBoardSVG, href: '/'},
    { name: "Drivers", svg: CarSVG , href: '/drivers'},
    { name: "Bookins", svg: BookingSVG },
    { name: "Notifications", svg: BellSVG },
    { name: "Settings", svg: SettingsSVG },
    { isDivider: true },
    { name: "Payment Details", svg: PaymentSVG },
    { name: "Transactions", svg: TransactionSVG },
    { name: "Car Report", svg: ReportSVG }
];

function Menu() {
    const [selectedItem, setSelectedItem] = useState(0);
    const navigate = useNavigate();

    const handleItemClick = (index, href) => {
        setSelectedItem(index);
        if (href) {
            navigate(href);
        }
    };

    return (
        <div id="menu" className={Style.menu}>
            <div className={`${Style.dFlex} ${Style.alignItemsCenter} ${Style.flexDirectionColumn}`}>
                <img src={FrameSVG} alt="Icon CarRent" className={Style.pT1Vh} />
                <h1 className={`${Style.fontDefault} ${Style.titleMenu} ${Style.dFlex}`}>CAR RENT</h1>
            </div>
            <div id="listItem">
                {menuItems.map((item, index) => 
                    item.isDivider ? (
                        <hr key={index} className={`${Style.w90} ${Style.hr}`} />
                    ) : (
                        <div 
                            key={index}
                            className={`${Style.item} ${Style.dFlex} ${Style.alignItemsCenter} ${selectedItem === index ? `${Style.blue} ${Style.op100}` : ''}`}
                            onClick={() => handleItemClick(index, item.href)}
                        >
                            <img src={item.svg} alt={item.name} className={Style.mR1Vh} />
                            <h4 className={Style.fontDefault}>{item.name}</h4>
                        </div>
                    )
                )}
            </div>
        </div>
    );
}

export default Menu;