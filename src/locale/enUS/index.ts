import enUS from 'antd/lib/locale/en_US';
import account from './account';
import pageError from './pageError';
import common from './common';
import auth from './auth';
import server from './server';
import reportList from './reportList/reportListTable';
import RegisterLearning from './registerLearning';
import field from './listfield';
import globalreport from './globalreport';
import projects from './projects';
import beat from './beat';

export default {
  ...enUS,
  ...common,
  ...server,
  ...auth,
  ...account,
  ...pageError,
  ...reportList,
  ...RegisterLearning,
  ...field,
  ...globalreport,
  ...projects,
  ...beat,
};
