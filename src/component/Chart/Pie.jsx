
import { Line } from 'react-chartjs-2';

const options = {
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                },
                labelString: 'speed',
            },
        ],
    },
};

const LineChart = ({ speed }) => {
    const data = {
        labels: Object.keys(speed),
        datasets: [
            {
                label: 'Speed (killometre/seconds)',
                data: Object.values(speed).map((key) => Number(key)),
                fill: false,
                backgroundColor: 'rgb(255, 99, 132)',
                pointBackgroundColor: 'rgb(255, 99, 132)',
                pointBorderColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 255, 255)',
                borderWidth: 0.2,
            },
        ],
    };
    return (
        <>
            <div className='header'>
                <h3 className='title'>Speed Graph (In Kilometer/second)</h3>
            </div>
            <Line data={data} options={options} height={100} />
        </>
    );
};
export default LineChart;
