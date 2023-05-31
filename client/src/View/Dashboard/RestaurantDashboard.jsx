import axios from 'axios';
import { useEffect, useState } from 'react';
import style from './RestaurantDashboard.module.css';
import ValorationsMonth from './dashComponents/ValorationsMonth';
import TopUsers from './dashUsers/topUsers';
import Deliverys from './raiting/Deliverys';

const Dashboards = () => {
    const [dataDhas, setDataDhas] = useState(null);
    

    useEffect(() => {
        const fetchData = () => {
            // const response = await axios.get(`http://localhost:3001/restaurants/dashboard/${id}`);
            axios.get(`http://localhost:3001/restaurants/dashboard/646e81029abe7c82fd16942b`)
                .then((response) => {
                    console.log(response.data);
                    setDataDhas(response.data)
                })
                .catch((error) => {
                    console.log(error);
                })
        };

        fetchData();
    }, []);
    console.log(dataDhas)

    return (
        <>
            <div className={style.banerCont}>
                <h1>Pepito's Restaurant</h1>
            </div>
            <div className={style.container}>
                <ValorationsMonth data={dataDhas ? dataDhas : []} />
                <Deliverys data={dataDhas ? dataDhas : []} />
                {/* <ResMensual /> */}
            </div>
            <div className={style.banerCont}>
                <h1>Clientes Destacados</h1>
            </div>
            <div className={style.container}>
                {
                    dataDhas 
                    ? dataDhas.topFiveUsers.map((user) => {
                        return <TopUsers data={user} />
                    })
                    : <h2>Loading...</h2>
                }
            </div>
        </>
    );
}

export default Dashboards;