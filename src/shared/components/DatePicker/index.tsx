import { range } from 'lodash';
import React, { forwardRef, ReactNode, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker'
import Next from '@shared/components/Icon/Next'
import Previous from '@shared/components/Icon/Previous'
import './style.scss';
import vi from 'date-fns/locale/vi'
import { Radio } from 'antd';

export interface IDateTimePicker {
  value?: any;
  onChange?: (value) => void;
  dateFormat?: string;
  custom?: ReactNode
  renderCustomHeader?: any
}
const DateTimePicker = (props: IDateTimePicker) => {
  const [startDate, setStartDate] = useState(new Date());
  useEffect(() => {
    setStartDate(props.value);
  }, [props.value]);
  const years = range(1990, new Date().getFullYear() + 1, 1);
  const months = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
  ];
  const month = new Date().getMonth() + 1
  const year = new Date().getFullYear();
  return (
    <DatePicker
      renderCustomHeader={({
        date,
        changeYear,
        changeMonth,
      }) => (
        <>
          <div className='header-datepicker d-flex justify-content-start m-4'
          >
            <button className='button-datepicker btn-pre'>
              {<Previous />}
            </button>
            <select
              value={month}
              onChange={({ target: { value } }) =>
                changeMonth(months.indexOf(value))
              }
            >
              {months.map((option) => (
                option === month ? (<>
                  <option selected defaultValue={month} key={option} value={option}>
                    Tháng {option}
                  </option>

                </>) : (<>
                  <option defaultValue={month} key={option} value={option}>
                    Tháng {option}
                  </option>

                </>)

              ))}
            </select>
            <select
              onChange={({ target: { value } }) => changeYear(value)}
            >
              {years.map((option) => (
                option === year ? (<>
                  <option selected key={option} value={option}>
                    {option}
                  </option>
                </>) : (<>
                  <option key={option} value={option}>
                    {option}
                  </option>
                </>)

              ))}
            </select>
            <button className='button-datepicker btn-next'>
              {<Next />}
            </button>
          </div>
          <div className='datepicker-radio '>
            <Radio.Group className='d-flex justify-content-md-between' /* onChange={onChange} value={value} */>
              <Radio className='ml-3' checked value={1}>Theo ngày</Radio>
              <Radio value={2}>Theo tuần</Radio>

            </Radio.Group>
          </div>
        </>
      )}
      locale={vi}
      selected={startDate}
      dateFormat={props.dateFormat}
      customInput={props.custom} />
  )


}
export default DateTimePicker