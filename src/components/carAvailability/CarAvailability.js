
import Style from "./CarAvailability.module.css";

function CarAvailability () {

    const dadosSelect = [
        {name: 'Car Number 1', value: 1},
        {name: 'Car Number 2', value: 2},
        {name: 'Car Number 3', value: 3},
        {name: 'Car Number 4', value: 4},
        {name: 'Car Number 5', value: 5}
    ]

    return (
        <div className={`${Style.container}`}>
            <h4>Car Availability</h4>
            <div>
                <select className={`${Style.grey}`}>
                    <option value="">Car Number</option>
                    {
                        dadosSelect.map((dado) => (
                            <option value={dado.value}>{dado.name}</option>
                        ))
                    }
                </select>
            </div>
        </div>
    )
}

export default CarAvailability;