import React from 'react';

interface ISelect<T= React.Key>{
  value?: string;
  label:string;
  data?:T
}

export default ISelect;