import Style from "./SelectCustom.module.css";

import VectorSVG from "../../assets/svg/Vector.svg";
import { useRef, useState } from "react";

function SelectCustom () {

    const [selectChecked, setSelectChecked] = useState (true);
    const optionsUl = useRef(null);
    const divDefaultSelected = useRef(null);
    
    const dataSelect = [
        {name: 'Car Number 1', value: 1},
        {name: 'Car Number 2 Without 20 asasasas', value: 2},
        {name: 'Car Number 3', value: 3},
        {name: 'Car Number 4', value: 4},
        {name: 'Car Number 5', value: 5}
    ]

    function changeOption () {
        setSelectChecked((c) => !c);

        if (selectChecked) {
            optionsUl.current.style.display = 'block';
        } else {
            optionsUl.current.style.display = 'none';
        }
    }

    function selectedOption (data) {
        divDefaultSelected.current.value = data.name;
    }

    return (
        <div className={`${Style.containerSelect}`} onClick={() => changeOption()}>
            <div id="category-select" style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                <div id="select-button" className={`${Style.selectButton}`}>
                    <input id="select-value" className={`${Style.selectValue}`} ref={divDefaultSelected} defaultValue="Car Number" readOnly/>
                    <div id="chevrons">
                        <img src={VectorSVG} className={`${Style.iconVectorSVG}`} style={{transform: selectChecked ? 'rotate(180deg)' : 'rotate(0deg)'}}/>
                    </div>
                </div>
                <ul id="options" ref={optionsUl} className={`${Style.optionsUl}`}>
                    {
                        dataSelect.map((dado) => (
                            <li key={dado.value} className={`${Style.optionsLi}`} onClick={() => selectedOption(dado)}>{dado.name}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default SelectCustom;