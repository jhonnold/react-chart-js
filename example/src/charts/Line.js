import React from 'react';
import { LineChart } from '@jhonnold/react-chart.js';

const data = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
        },
    ],
};

const options = {
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                },
            },
        ],
    },
};

const Line = () => (
    <>
        <div className="header">
            <h1 className="title">Line Chart</h1>
            <div className="links">
                <a
                    class="btn btn-gh"
                    href="https://github.com/jhonnold/react-chart.js/blob/master/example/src/charts/Line.js"
                >
                    Github Source
                </a>
            </div>
        </div>
        <LineChart data={data} options={options} />
    </>
);

export default Line;
