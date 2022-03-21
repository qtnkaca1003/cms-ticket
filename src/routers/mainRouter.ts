import { routerPageError } from '@view/PageError/router';
import { routerHome } from '@view/Home/router';
import { routerSetting } from '@view/Setting/router'
import { routerTicker } from '@view/Ticker/router'
import { routerCheckSticket } from '@view/Checktickets/router'
import { routerViewProfile } from '@view/Profile/router';
import { IRouter } from './interface';
import { routerClasses } from '@view/Classes/router';
import { routerSchoolRegister } from '@view/SchoolRegister/router';

export const privatePage: IRouter[] = [
  // routerHome,
  // routerGlobalReport,
  // routerListOfField,
  // routerViewProfile,
  // routerBeat,
  // routerPageError,

];

export const publicPage: IRouter[] = [
  routerHome,
  routerClasses,
  routerCheckSticket,
  routerSetting,
  routerTicker,
  routerSchoolRegister,
  routerViewProfile,
  routerPageError,
];


