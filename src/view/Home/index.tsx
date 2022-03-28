import React, { forwardRef } from 'react';
import MainTitleComponent from '@shared/components/MainTitleComponent';
import ChartsLine from '@shared/components/Charts/ChartLine';
import { PieChart } from 'react-minimal-pie-chart';
import DateTimePicker from '@shared/components/DatePicker';
import Calenda from '@shared/components/Icon/calenda';
const Home = () => {
  const date = new Date();
  const data = [
    { title: 'One', value: 56024, color: '#4F75FF' },
    { title: 'Two', value: 13568, color: '#FF8A48' },

  ];
  const data1 = [
    { title: 'One', value: 56024, color: '#4F75FF' },
    { title: 'Two', value: 13568, color: '#FF8A48' },

  ];
  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <>
      <button className='button-datepicker' onClick={onClick} ref={ref}>
        Tháng {value}  <Calenda />
      </button>
    </>



  ));
  return <div className="home">
    <div className="main-card">
      <MainTitleComponent title={"Thống kê"} />
      <div className='d-flex justify-content-md-between'>
        <p className="secondary-title">Doanh thu</p>
        <div className="date-pickerd-flex align-self-center ">
          <DateTimePicker value={date} dateFormat={"MM,yyyy"} custom={<CustomInput />} />
        </div>
      </div>
      <ChartsLine />
      <div className='cricle-charts'>
        <p className='text '>Tổng doanh thu theo tuần</p>
        <p className="total">
          525.145.000 <span className='text'>đồng</span>
        </p>
        <div className='warp-piechart'>
          <div className="date-picker ">
          <DateTimePicker value={date} dateFormat={"MM,yyyy"} custom={<CustomInput />} />
          </div>
          <div className="piechart">
            <p className='text-main-bold'>Gói gia đình</p>
            <PieChart
              data={data}
              lineWidth={45}
            />
          </div>
          <div className="piechart">
            <p className='text-main-bold'>Gói sự kiện</p>
            <PieChart
              data={data1}
              lineWidth={45}
            />
          </div>
          <div className='warp-note'>
            <div className='note'>
              <span className='ticket --blue'></span>
              <p className='text' style={{ marginRight: "0px", lineHeight: "26px" }}>Vé đã sử dụng</p>
            </div>
            <div className='note'>
              <span className='ticket --organe'></span>
              <p className='text' style={{ marginRight: "0px", lineHeight: "26px" }}>Vé chưa sử dụng</p>
            </div>

          </div>

        </div>


      </div>

    </div>
  </div>



};

export default React.memo(Home);
