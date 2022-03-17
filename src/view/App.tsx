import React, { Suspense, useMemo, memo } from 'react';
import PublicPage from '../routers/component/PublicPage';
import { useSelector } from 'react-redux';
import { ConfigProvider } from 'antd';
import '@shared/assets/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import '@styles/styles.scss';
import '@ant-design/icons';
import locale from '@locale/index';
import { IntlProvider } from 'react-intl';
import {
  TokenSelector,
} from '@modules/authentication/profileStore';
import { LanguageSelector } from '@modules/setting/settingStore';
import PrivatePage from '@routers/component/PrivatePage';

const MainView = memo(({ statusLogin }: { statusLogin: boolean }) => {
  return (
    <>
      {statusLogin ? (
        <Suspense fallback={<></>}>
          <PrivatePage />
        </Suspense>
      ) : (
        <Suspense fallback={<></>}>
          <PublicPage />
        </Suspense>
      )}
    </>
  );
});

// For Test
const App: React.FC = () => {
  const { status } = useSelector(TokenSelector);
  const { language } = useSelector(LanguageSelector);

  const memoLangData = useMemo(() => {
    return locale[language];
  }, [language]);

  return (
  
    
    <IntlProvider locale={language} messages={memoLangData}>
      <ConfigProvider locale={memoLangData}>
        <MainView statusLogin={status} />
      </ConfigProvider>
    </IntlProvider>
  );
};


export default App;
