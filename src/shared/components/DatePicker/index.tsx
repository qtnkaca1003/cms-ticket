import React, { forwardRef, ReactNode, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker'
import Calenda from '../Icon/calenda';
import './style.scss';
export interface IDateTimePicker {
  value?: any;
  onChange?: (value) => void;
  dateFormat?: string;
  custom?: ReactNode
}
const DateTimePicker = (props: IDateTimePicker) => {
  const [startDate, setStartDate] = useState(new Date());
  useEffect(() => {
    setStartDate(props.value);
  }, [props.value]);
  /*  const onChange = (pValue) => {
     setValue(pValue);
     if (props.onChange)
       props.onChange(pValue);
   }; */
  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <>
      <button className='button-datepicker' onClick={onClick} ref={ref}>
        Tháng {value}  <Calenda />
      </button>
    </>



  ));
  return (
    <DatePicker selected={startDate} dateFormat={props.dateFormat} customInput={props.custom} />
  )


}
export default DateTimePicker