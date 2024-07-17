import Style from './LiveCarStatus.module.css';

function LiveCarStatus () {

    const datas = [
        {no: 1, carNo: 6465, img: 'url', name: 'Alex Noman', status: 'Completed', earning: 35.44},
        {no: 2, carNo: 6556, img: 'url', name: 'Purman Jorg', status: 'Completed', earning: 35.44},
        {no: 3, carNo: 1755, img: 'url', name: 'Kalengan Urit', status: 'Completed', earning: 35.44},
        {no: 4, carNo: 1252, img: 'url', name: 'Manuti Polr', status: 'Completed', earning: 35.44},
        {no: 5, carNo: 1856, img: 'url', name: 'Jamanz Kalirt', status: 'Completed', earning: 35.44},
        {no: 6, carNo: 2589, img: 'url', name: 'Nority Nurti', status: 'Completed', earning: 35.44},
        {no: 7, carNo: 2589, img: 'url', name: 'Nority Nurti', status: 'Completed', earning: 35.44},
        {no: 8, carNo: 2589, img: 'url', name: 'Nority Nurti', status: 'Completed', earning: 35.44},
        {no: 9, carNo: 2589, img: 'url', name: 'Nority Nurti', status: 'Completed', earning: 35.44},
        {no: 10, carNo: 2589, img: 'url', name: 'Nority Nurti', status: 'Completed', earning: 35.44}
    ]

    return (
        <div className={`${Style.container}`}>
            <div className={`${Style.topHead}`}>
                <span style={{fontWeight: '700'}}>Live Car Status</span>
                <span>Filter</span>
            </div>
            <div className={`${Style.divBody}`}>
                <table>
                    <thead>
                        <tr className={`${Style.head}`}>
                            <th align='left' style={{fontWeight: '400'}}>No.</th>
                            <th align='left' style={{fontWeight: '400'}}>Car no.</th>
                            <th align='left' style={{fontWeight: '400'}}>Driver</th>
                            <th align='left' style={{fontWeight: '400'}}>Status</th>
                            <th align='left' style={{fontWeight: '400'}}>Earning</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            datas.map((data) => 

                            <tr className={`${Style.body}`}>
                                <td style={{fontSize: '12px'}}>{data.no}</td>
                                <td style={{fontSize: '14px'}} align="center">{data.carNo}</td>
                                <td style={{fontSize: '16px'}}>{data.name}</td>
                                <td style={{fontSize: '16px'}}>{data.status}</td>
                                <td style={{fontSize: '16px'}}>$ {data.earning}</td>
                                <button className={`${Style.buttonDetail}`}>Details</button>
                            </tr>

                            )
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default LiveCarStatus;