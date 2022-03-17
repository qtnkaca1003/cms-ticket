import { IRouter } from '@routers/interface';
import React from 'react';
import { UnorderedListOutlined } from '@ant-design/icons';

export const routerSchoolRegister: IRouter = {
  path: '/schoolregister',
  loader: import('./index'),
  exact: true,
  name: 'RegisterLearning.name', //translate here for breadcrumb and sidebar
  menu: {
    icon: <UnorderedListOutlined />,
    activePath: /\/schoolregister/,
  },
};
