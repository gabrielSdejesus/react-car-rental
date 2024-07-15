import Style from './Search.module.css';

import MagnifierSVG from '../../assets/svg/Magnifier.svg';
import BellYesNotificationSVG from '../../assets/svg/BellYesNotification.svg';
import BellNoNotificationSVG from '../../assets/svg/BellNoNotification.svg';
import { useEffect, useState } from 'react';

function Search () {

    const [isNotification, setNotification] = useState(null);
    const [isChangeColorInputSearch, setIsChangeColorInputSearch] = useState(false);

    /** Implementar lógica para setar se há ou não notificação (fica aberto para uma possível API com back-end) */

    useEffect(() => {
        setNotification(true);
    }, [])

    return (
        <div className={`${Style.container}`}>
            <img className={`${Style.bell}`} src={isNotification ? BellYesNotificationSVG : BellNoNotificationSVG} alt={ isNotification ? "You've notification" : "You haven't notification"}/>
            
            <div className={`${Style.boxSearch}`}>
                <input className={`${Style.inputSearch} ${ isChangeColorInputSearch ? Style.colorBlack : '' }`} placeholder='Search here' name='search' onChange={(e) => { if(e.target.value ) { setIsChangeColorInputSearch(true) }}}/>
                <img className={`${Style.magnifierSVG}`} src={MagnifierSVG} alt='Magnifier'/>
            </div>
        </div>
    )
}

export default Search;