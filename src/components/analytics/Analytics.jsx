import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import './Analytics.scss'

ChartJS.register(ArcElement, Tooltip, Legend);
 const data = {
  labels: ["90-100%", "80-90%", "70-80%"],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)'
      ],
      borderWidth: 1,
    },
  ],
};

const english = {
  labels: ["90-100%", "80-90%", "70-80%"],
  datasets: [
    {
      label: '# of Votes',
      data: [4, 19, 8],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 1,
    },
  ],
};
const hindi = {
  labels: ["90-100%", "80-90%", "70-80%"],
  datasets: [
    {
      label: '# of Votes',
      data: [5, 6, 7],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)'
      ],
      borderWidth: 1,
    },
  ],
};

const math = {
  labels: ["90-100%", "80-90%", "70-80%"],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)'
      ],
      borderWidth: 1,
    },
  ],
};

const science = {
  labels: ["90-100%", "80-90%", "70-80%"],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const social = {
  labels: ["90-100%", "80-90%", "70-80%"],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 1,
    },
  ],
};
export const Analytics = () => {
  return (
    <div className='analytics-cont'>
      <h1>Analytics</h1>
      <p>Detailed analysis of our outstanding 10th and 12th board results</p>
      <div className='tenth-analysis'>         
        <div className="chart-box">
          <h1>Overall</h1>
          <Doughnut data={data} />
        </div>
        
        <div className="chart-box">
          <h1>English</h1>
          <Doughnut data={english} />
        </div>
        
        <div className="chart-box">
          <h1>Hindi</h1>
          <Doughnut data={hindi} />
        </div>
        
        <div className="chart-box">
          <h1>Math</h1>
          <Doughnut data={math} />        
        </div>
         
        <div className="chart-box">
          <h1>Science</h1>
          <Doughnut data={science} />        
        </div>
        <div className="chart-box">
          <h1>Social Science</h1>
          <Doughnut data={social} />
        </div>
      </div>
    </div>
    
  )
}
