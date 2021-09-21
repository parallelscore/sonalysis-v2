import React, { useState } from 'react'
// import { Line } from '@reactchartjs/react-chart.js'
// import VideoPlayBack from "../video-playback"



// const LineChart = (props) => {

//   const [playBackTime, setPlayBackTime] = useState(0)

//   const { distance, speed, playerIdx, totalTime } = props
//   const playerSpeed = speed[playerIdx]
  

// //   const xAxis = []
// //   for (let i = 0; i < playerSpeed.length - 1; i = i + 100){
// //     xAxis.push(i/25)
// //   }


// //   const getElementAtEvent = element => {
// //     if (!element.length) return
// //     const { _datasetIndex: datasetIndex, _index: index } = element[0]
// //     const speedPoint = data.datasets[datasetIndex].data[index]
// //     const speedPointIndex = playerSpeed.indexOf(speedPoint)
// //     const timeInSec  = xAxis[speedPointIndex]
// //     setPlayBackTime(timeInSec )
    
// //   }
//   const data = {
//     labels: [1,2,3,4],
//     datasets: [
//       {
//         label: 'Speed (killometre/seconds)',
//         data: [1,2,3,4,6,7],
//         fill: false,

//         pointBackgroundColor: "rgb(255, 99, 132)",
//         pointBorderColor: "rgb(255, 99, 132)",
//         borderColor: 'rgba(255, 255, 255)',
//         borderWidth: 0.2,
//       },
//     ],
//   }

//   const options = {
//     scales: {
//       yAxes: [
//         {
//           ticks: {
//             beginAtZero: true,
//           },
//           labelString: "speed"
//         },
//       ],
//     },
//   }

//   return (
//     <>
//       <Line data={data} options={options} />
      
//     </>
//   )
// }

// export default LineChart




import { Line } from 'react-chartjs-2';



const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
        labelString: "speed"
      },
    ],
  },
};

const LineChart = ({speed}) =>{
    const data = {
        labels: Object.keys(speed),
        datasets: [
          {
              label: 'Speed (killometre/seconds)',
            data: Object.values(speed).map(key=>Number(key)),
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
               pointBackgroundColor: "rgb(255, 99, 132)",
               pointBorderColor: "rgb(255, 99, 132)",
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
    <Line data={data} options={options} height={100}/>
  </>
);}
export default LineChart;