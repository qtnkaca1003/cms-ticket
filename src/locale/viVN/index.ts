import viVN from 'antd/lib/locale/vi_VN';
import auth from './auth';
import common from './common';
import server from './server';
import pageError from './pageError';
import accounts from './accounts';
import Form from './form';
import roles from './roles';
import reportList from './reportList';
import registerLearning from './registerLearning';
import field from './listfield';
import globalreport from './globalreport';
import projects from './projects';
import beat from './beat';

export default {
  ...viVN,
  ...common,
  ...server,
  ...auth,
  ...pageError,
  ...accounts,
  ...roles,
  ...reportList,
  ...registerLearning,
  ...field,
  ...globalreport,
  ...projects,
  ...beat,
  Form,
};
