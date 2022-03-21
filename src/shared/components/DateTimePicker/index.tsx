import React, { useEffect, useState } from 'react';
import { DatePicker } from 'antd';
import * as Unicons from '@iconscout/react-unicons';
export interface IDateTimePicker {
  value?: any;
  onChange?: (value) => void;
  defaultValue?: any;
  textLabel?: string;
  className?: string;
}

const DateTimePicker = (props: IDateTimePicker) => {
  const [value, setValue] = useState(props.value);

  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  const onChange = (pValue) => {
    setValue(pValue);
    if (props.onChange)
      props.onChange(pValue);
  };

  return (
    <DatePicker
      className={props.className || 'alta-calendar'}
      defaultValue={props?.defaultValue}
      id={props.textLabel}
      onChange={onChange}
      showToday={true}

      // onChange={(value) => props?.onChange(value)}
      value={value}
      format="DD/MM/YYYY"
      showTime
      suffixIcon={<Unicons.UilCalendarAlt size="27" className="icon-feather" />}
    >

    </DatePicker>
  );
};

export default React.memo(DateTimePicker);
