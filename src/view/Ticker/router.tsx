import { IRouter } from '@routers/interface';
import { UnorderedListOutlined } from '@ant-design/icons';
import React from 'react';

export const routerSticker: IRouter = {
  path: '/ticker',
  loader: import('./index'),
  exact: true,
  name: 'fieldPage.name', //translate here for breadcrumb and sidebar
  menu: {
    icon: <UnorderedListOutlined/>,
    activePath: /\/classes/,
  },
};
