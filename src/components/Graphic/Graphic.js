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

    const data1 = {
        labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
        datasets: [{
        label: 'Accesos',
        backgroundColor: 'rgba(0,255,0,1)',
        borderColor: 'black',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(0,255,0,0.2)',
        hoverBorderColor: '#FFFF00',
        data: [4, 6, 8, 5, 10, 7, 16]
        }]
    };

    const opciones = {
        maintainAspectRatio: false,
        responsive: true
    }

    return (
        <div className="grephic" style={{width: '100%', height: '500px', textAlign:'center'}}>
            <h2>Cantidad de accesos por día en la última semana</h2>
            <Bar data={data} options={opciones} /> 
        </div> 
    )
}

export default Graphic;