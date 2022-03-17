import { ReactNode } from 'react';
export type IRouter = {
  loader?: Promise<object>;
  path: string;
  permissionCode?: string | 'ALLOW';
  component?: React.FC<any>;
  isPrivate?: boolean;
  exact?: boolean;
  name?: string;
  masterLayout?: boolean;
  menu?: {
    icon?: ReactNode;
    hideInNavbar?: boolean;
    exact?: boolean;
    activePath?: RegExp;
    generatePath?: (params: any) => string;
  };
  routes?: Array<IRouter>;
};