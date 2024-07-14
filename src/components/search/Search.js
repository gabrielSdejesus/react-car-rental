import Style from './Search.module.css';

import MagnifierSVG from '../../assets/svg/Magnifier.svg';
import BellYesNotificationSVG from '../../assets/svg/BellYesNotification.svg';
import BellNoNotificationSVG from '../../assets/svg/BellNoNotification.svg';
import { useState } from 'react';

function Search () {

    const [isNotification, setNotification] = useState(true);
    const [isChangeColorInputSearch, setIsChangeColorInputSearch] = useState(false);

    return (
        <div className={`${Style.container}`}>
            <img className={`${Style.bell}`} src={isNotification ? BellYesNotificationSVG : BellNoNotificationSVG} />
            
            <div className={`${Style.boxSearch}`}>
                <input className={`${Style.inputSearch} ${ isChangeColorInputSearch ? Style.colorBlack : '' }`} placeholder='Search here' name='search' onChange={(e) => { if(e.target.value ) { setIsChangeColorInputSearch(true) }}}/>
                <img className={`${Style.magnifierSVG}`} src={MagnifierSVG}/>
            </div>
        </div>
    )
}

export default Search;