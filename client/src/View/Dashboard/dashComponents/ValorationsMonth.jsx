import { Bar } from 'react-chartjs-2';
import style from './ValorationsMonth.module.css';

{/* INFORMACION DEL DASHBOARD */}

const data = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Sptiembre', 'Octubre', 'Noviembre', 'diciembre'],
    datasets: [
        {
            label: 'Reseñas',
            data: [12, 19, 6, 0, 2, 10, 5, 9, 10, 3, 1, 4],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
        },
        {
            label: 'Rating',
            data: [1, 9, 16, 10, 22, 13, 5, 15, 1, 4, 6, 4],
            backgroundColor: 'rgba(58, 80, 107, 0.5)',
            borderColor: 'rgba(58, 80, 107, 1)',
            borderWidth: 1,
        },
    ],
};

{/* CONFIGURACION DEL DASHBOARD */}
    
const options = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
};


const ValorationsMonth = () => {
    return(
        <div style={{ width: '800px', height: '400px' }} className={style.container}>
            <center style={{height: '300px' }}>
                <h2>Reseñas por mes</h2>
                <Bar data={data} options={options} />
            </center>
        </div>
    );
}

export default ValorationsMonth;