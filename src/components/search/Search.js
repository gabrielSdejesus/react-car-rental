import Style from './Search.module.css';

import MagnifierSVG from '../../assets/svg/Magnifier.svg';

function Search () {
    return (
        <div className={`${Style.container}`}>
            
            
            <div className={`${Style.boxSearch}`}>
                <input className={`${Style.inputSearch}`} placeholder='Search here' name='search'/>
                <img className={`${Style.magnifierSVG}`} src={MagnifierSVG}/>
            </div>
        </div>
    )
}

export default Search;