import { IRouter } from '@routers/interface';
import { Dropdown, Menu } from 'antd';
import React, { useMemo, memo } from 'react';
import { FormattedMessage } from 'react-intl';
import { matchPath, useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { UilEllipsisV } from '@iconscout/react-unicons';
const { SubMenu } = Menu

interface IMenu {
  data: any;
  activePath?: string
}

const SubItem: React.FC<IMenu> = (props: IMenu) => {
  const item = props.data;
  const history = useHistory();
  return (
    <Menu mode='vertical' /* className="dropdown-3dot" */ >
      {item.routes!.length > 0 &&
        item.routes?.map((linkNav: IRouter, index) => {
          //console.log('linkNav:',linkNav);
          let active = '';
          if (linkNav.menu?.activePath != null) {
            const activeMenu = props.activePath?.match(linkNav.menu.activePath);
            if (activeMenu) {
              active = 'ant-menu-item-selected';
            }
          }

          let path = linkNav.path;
          if (linkNav.menu?.generatePath) {
            path = linkNav.menu.generatePath(undefined);
          }
          return (
            
            <Menu.Item className={active} key={index} onClick={() => {
              history.push(path);
            }}>
              <FormattedMessage
                id={linkNav.name}
                defaultMessage={linkNav.name}
              />
            </Menu.Item>
          );
        })}
    </Menu>
  );
};

const Item: React.FC<IMenu> = (props: IMenu) => {
  const item = props.data;
  const location = useLocation();
  const activePath = item.menu?.activePath;
  console.log(item);
  const active = useMemo(() => {
    if (activePath) {
      const activeMenu = location.pathname.match(activePath);
      return activeMenu ? 'menu-active' : '';
    }
    return matchPath(location.pathname, { path: item.path, exact: item.exact }) ? 'menu-active' : '';
  }, [item.exact, activePath, item.path, location.pathname]);
  let path = item.path;
  if (item.menu?.generatePath) {
    path = item.menu.generatePath(undefined);
  }
  if (item.routes && item.routes.length > 0) {
    return (
      <div className={`menu--component--item three-dot ${active}`} key={item.path}>
        <div className="item-label">
          <span>

            {item.menu?.icon && <span className="item-hover__icon"></span>}
            <a className="item__nav">
              <FormattedMessage

                id={item.name}
                defaultMessage={item.name}
              />
            </a>
          </span>
          <SubItem data={item} activePath={location.pathname} />
         
        </div>
      </div>
    );

  }

  return (
    <div className={`menu--component--item ${active}`}>
      <Link to={path} className="item-label">
        <span>
          {console.log(typeof (item.menu?.icon))
          }
          {item.menu?.icon && <span className="item-hover__icon">{item.menu.icon}</span>}
          <span className="item__nav">
            <FormattedMessage
              id={item.name}
              defaultMessage={item.name}
            />
          </span>
        </span>
      </Link>
    </div>
  );
};

export default memo(Item);
