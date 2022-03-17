import React, { memo, useState, useEffect, ReactNode } from 'react';
import { useHistory, useLocation } from 'react-router';
import { publicPage } from '@routers/mainRouter';
import { IRouter } from '@routers/interface';
import CheckPermission from '@shared/hoc/CheckPermission';
import { logo } from '@shared/assets/images';
import { UilAngleRight } from '@iconscout/react-unicons';
import MenuItem from './ItemMenu';
import { HomeOutlined, SettingOutlined } from '@ant-design/icons';
import Ticket from '@shared/components/Icon/ticket';
import CheckTicket from '@shared/components/Icon/checking-ticket'
type navType = {
  path: string
  name?: string
  menu?: {
    icon?: ReactNode,
    activePath:string
  }
  routes?: {
    path: string,
    name?: string,

  }
 
}
const nav: navType[] = [{
  path: '/',
  name: 'Trang chủ',
  menu: {
    icon: <HomeOutlined />,
    activePath:'/',
  }
},
{
  path: '/ticker',
  name: 'Quảng lý vé',
  menu: {
    icon: <Ticket />,
    activePath:'/ticker',
  }
},
{
  path: '/checking-tickets',
  name: 'Đối soát vé',
  menu: {
    icon: <CheckTicket />,
    activePath: '/checking-tickets',
  }
},
{
  path: '/cai-dat',
  name: 'Cài đặt',
  menu: {
    icon: <SettingOutlined />,
    activePath: '/cai-dat',
  },
  routes:{
    path: '/cai-goi-dich-vu',
    name: "Các gói dịch vụ"

  }

}]
interface IRenderMenuProps {
  listNav: Array<IRouter>;
  location: string;
}

const renderMenu: React.FC<IRenderMenuProps> = (props: IRenderMenuProps) => {
  const listNav = nav.slice(0, props.listNav.length + 1);
  console.log(listNav);
  return (
    <>
      {listNav.map((item: any, index) => {

        if (item.menu == null || item.menu?.hideInNavbar) {

          return <React.Fragment key={index}></React.Fragment>;
        } else if (item.permissionCode) {

          return (

            <CheckPermission permissionCode={item.permissionCode} key={index}>
              <MenuItem data={item} key={index} />
            </CheckPermission>
          );
        } else {
          return <MenuItem data={item} key={index} />;
        }
      })}
    </>
  );
};

const RenderMenu = memo(renderMenu);

const SiderComponent: React.FC<{
  className: string;
  setClassName: (className: string) => void;
}> = (props) => {
  const location = useLocation();
  const history = useHistory();
  const { className, setClassName } = props;
  const [width, setWidth] = useState<string | number>();
  const onClick = (e) => {
    setClassName('sider-component big');
    e.preventDefault();
    e.stopPropagation();
  };

  useEffect(() => {
    if (className == 'sider-component') {
      setWidth(0);
    } else {
      setWidth('100%');
    }
  }, [className]);

  return (
    <div className={className} onClick={onClick}>
      <div className="mask" style={{ width }}>
        <div className="logo">
          <img src={logo} alt="logo" onClick={() => history.push('/')} />
        </div>
        <div className="menu">
          <RenderMenu listNav={publicPage} location={location.pathname} />
        </div>
      </div>
    </div>
  );
};

export default SiderComponent;
