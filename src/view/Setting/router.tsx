import { IRouter } from '@routers/interface';
import { UnorderedListOutlined } from '@ant-design/icons';


export const routerSetting: IRouter = {
  path: '/cai-dat',
  loader: import('./index'),
  exact: true,
  name: 'fieldPage.name', //translate here for breadcrumb and sidebar
  menu: {
    icon: <UnorderedListOutlined/>,
    activePath: /\/classes/,
  },
};
