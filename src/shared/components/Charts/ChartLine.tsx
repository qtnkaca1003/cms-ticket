import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Area } from '@ant-design/plots';


const ChartsLine =()=>{
   /*  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/360c3eae-0c73-46f0-a982-4746a6095010.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  }; */

  const data =[
    {
      "timePeriod": "Thứ 2",
      "value": 100
    },
    {
      "timePeriod": "Thứ 3",
      "value": 150
    },
    {
      "timePeriod": "Thứ 4",
      "value": 200
    },
    {
      "timePeriod": "Thứ 5",
      "value": 250
    },
    {
      "timePeriod": "Thứ 6",
      "value": 230
    },
    {
      "timePeriod": "Thứ 7",
      "value": 270
    },
    {
      "timePeriod": "Chủ nhật",
      "value": 150
    }]
  const config = {
    data,
    xField: 'timePeriod',
    yField: 'value',
    xAxis: {
      range: [0, 1],
    },
  };

  return <Area {...config} />;
}
export default ChartsLine