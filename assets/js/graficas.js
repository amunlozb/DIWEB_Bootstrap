const ctx1 = document.getElementById('grafica1');
const ctx2 = document.getElementById('grafica2');

const data = {
    labels: [
        'Inicio',
        'Perfil',
        'Configuración',
        'Diseño',
        'Código',
        'Prototipo',
        'Pruebas'
    ],
    datasets: [{
        label: 'DAWEB',
        data: [65, 59, 50, 43, 26, 55, 40],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
    }, {
        label: 'DIWEB',
        data: [38, 78, 40, 59, 86, 57, 60],
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        pointBackgroundColor: 'rgb(54, 162, 235)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(54, 162, 235)'
    }]
};


new Chart(ctx1, {
    type: 'polarArea',
    data: {
        labels: [
            'JavaScript',
            'Python',
            'Java',
            'C++',
            'Ruby'
        ],
        datasets: [{
            label: 'Dataset Polar',
            data: [6, 5, 10, 5, 8],
            backgroundColor: [
                'rgb(255, 99, 132)',    
                'rgb(54, 162, 235)',   
                'rgb(255, 205, 86)',   
                'rgb(75, 192, 192)',   
                'rgb(153, 102, 255)'   
            ]
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


new Chart(ctx2, {
    type: 'radar',
    data: data,
    options: {
        elements: {
            line: {
                borderWidth: 3
            }
        }
    },
});
