import React from 'react';
import { publicRouter } from '../index';
import ShowRouter from './ShowRouter';
import { Switch } from 'react-router';
import DefaultLayout from 'src/layout/index';

const PublicPage: React.FC = () => {
  return (
    
    <Switch>
      {/* {ShowRouter({ routers: publicRouter, MasterLayout: AuthLayout })} */}
      <Switch>{ShowRouter({ routers: publicRouter, MasterLayout: DefaultLayout })}</Switch>
    </Switch>
  );
};
export default PublicPage;
