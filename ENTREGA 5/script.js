
// Datos inventados sobre huracanes por año
const hurricaneData = {
    labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021'],
    datasets: [{
        label: 'Número de Huracanes',
        data: [5, 7, 10, 6, 8, 12, 9], // Número de huracanes por año
        backgroundColor: 'rgba(0, 123, 255, 0.6)',
        borderColor: 'rgba(0, 123, 255, 1)',
        borderWidth: 1
    }]
};

// Configuración del gráfico
const config = {
    type: 'bar',
    data: hurricaneData,
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Número de Huracanes'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Año'
                }
            }
        }
    }
};

// Crear el gráfico
const ctx = document.getElementById('hurricaneChart').getContext('2d');
new Chart(ctx, config);