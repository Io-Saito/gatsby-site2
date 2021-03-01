import React from 'react';
import {Radar} from 'react-chartjs-2';



/*propsの中身→data[{subject:JS dataKey:5 fullmark:5},{subject:Vue dataKey:5 fullmark:5}],
stroke:"HEX",fill:"Hex"
*/
const RaderChart=(props)=> {
    const options= {
  scale: {
    ticks: { beginAtZero: false,
    suggestedMin: 0,
            suggestedMax:10},
  },
  legend:{ 
      display: false
  },
}
    return (
    <div >
      <Radar data={props} options={options} />
    </div>
    );
  }
export default RaderChart;
