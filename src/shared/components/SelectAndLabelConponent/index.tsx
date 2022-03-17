import React, { useEffect, useState } from 'react';
import { Select } from 'antd';
import { FormattedMessage, useIntl } from 'react-intl';
import lodash from 'lodash';
import ISelect from '@core/select';

const { Option } = Select;


export interface ISelectAndLabel {
  textLabel?: any;
  defaultValue?: any;
  dataString?: Array<ISelect>;
  // xử dụng dataString dưới dạng array với interface đã tạo (quan trọng value và label)
  onChange?: any;
  placeholder?: string;
  style?: any;
  value?: any;
  className?: string;
  dropdownClassName?: string;
  name?: string;
}

const SelectAndLabelComponent = (props: ISelectAndLabel) => {
  const intl = useIntl();
  const [value, setValue] = useState(props.value);

  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  const onChange = (paramValue) => {
    setValue(paramValue);
    if (props.onChange)
      props.onChange(paramValue);

  };
  const className = props.className ? props.className : '';
  const all = intl.formatMessage({ id: 'common.all' });

  return (
    <div className={`select-label-component ${className}`}>
      <div className="label-select">
        {props?.textLabel && (
          <div>
            <FormattedMessage
              id={props.textLabel}
              defaultMessage={props.textLabel}
            />
          </div>
        )}
        <Select
          className="select-custom"
          style={{ ...props?.style }}
          value={value == undefined ? all : value}
          defaultValue={props?.defaultValue ? props?.defaultValue : all}
          onChange={onChange}
          placeholder={props?.placeholder}
          dropdownClassName={props?.dropdownClassName}
        >
          {!lodash.isEmpty(props?.dataString) &&
            props?.dataString &&
            props.dataString.map((item, index) => {
              return (
                <Option value={item.value} key={index}>
                  <FormattedMessage id={item?.label} />
                </Option>
              );
            })}
        </Select>
      </div>
    </div>
  );
};

export default React.memo(SelectAndLabelComponent);
