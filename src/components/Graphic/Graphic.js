import React from 'react';
import {Bar} from 'react-chartjs-2';

function Graphic(props) {

    const {user} = props;

    const data = {
        labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
        datasets: [{
        label: 'Accesos',
        backgroundColor: 'rgba(0,255,0,1)',
        borderColor: 'black',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(0,255,0,0.2)',
        hoverBorderColor: '#FFFF00',
        data: user.data
        }]
    }

    const opciones = {
        maintainAspectRatio: false,
        responsive: true
    }

    return (
        <div style={{width: '100%', height: '400px', textAlign:'center'}}>
            <h3 className="mb-4">Cantidad de accesos por día en la última semana</h3>
            <Bar data={data} options={opciones} /> 
        </div> 
    )
}

export default Graphic;