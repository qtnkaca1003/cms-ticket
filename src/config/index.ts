import ISelect from '@core/select';

export const LANGUAGE: ISelect<string>[] = [
  { value: 'en', label: 'ENG' },
  { value: 'vi', label: 'VNM' },
];
console.log(process.env);
const CONFIG = {
  API_BASE_URL: process.env.API_BASE_URL,
  GAME_URL:'https://mizuku.dev.altasoftware.vn',
  APP_NAME: process.env.APP_NAME,
  LOGIN_PAGE: '/#',
  SSO_PAGE: '/#',
};

export default CONFIG;
