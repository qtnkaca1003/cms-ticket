import ISelect from '@core/select';

export const LANGUAGE: ISelect<string>[] = [
  { value: 'en', label: 'ENG' },
  { value: 'vi', label: 'VNM' },
];
console.log(process.env);
const CONFIG = {
  API_BASE_URL: 'https://erudite-descent-233113-default-rtdb.firebaseio.com/',
  GAME_URL:'https://erudite-descent-233113-default-rtdb.firebaseio.com/',
  API_LISTTICKET: 'https://erudite-descent-233113-default-rtdb.firebaseio.com/',
  APP_NAME: process.env.APP_NAME,
  LOGIN_PAGE: '/#',
  SSO_PAGE: '/#',
};

export default CONFIG;
