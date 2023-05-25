import style from './RestaurantDashboard.module.css';
import ValorationsMonth from './dashComponents/ValorationsMonth';
import Rating from './raiting/Rating';
import ResMensual from './reservasMensuales/resMensual';

const Dashboards = () => {
    return(
        <>
            <div className={style.banerCont}>
                <h1>Pepito's Restaurant</h1>
            </div>
            <div className={style.container}>
                <ValorationsMonth />
                <Rating />
                <ResMensual />
            </div>
        </>
    );
}

export default Dashboards;