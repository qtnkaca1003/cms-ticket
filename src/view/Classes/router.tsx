import { IRouter } from '@routers/interface';
import { UnorderedListOutlined } from '@ant-design/icons';
import React from 'react';

export const routerClasses: IRouter = {
  path: '/stickx',
  loader: import('./index'),
  exact: true,
  name: 'fieldPage.name', //translate here for breadcrumb and sidebar
  menu: {
    icon: <UnorderedListOutlined/>,
    activePath: /\/classes/,
  },
};
