import { IRouter } from '@routers/interface';
export const routerSentToParents: IRouter = {
  path: '/senttoparents',
  loader: import('./index'),
  exact: true,
  name: 'senttoparents.page', //translate here for breadcrumb and sidebar
  masterLayout: false,
};
