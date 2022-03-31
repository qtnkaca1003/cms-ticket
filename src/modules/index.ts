import { combineReducers } from '@reduxjs/toolkit';
import profileStore from './authentication/profileStore';
import translateStoreRedux from './setting/settingStore';
import ticketReducer from './ticket/Reducer/TicketReducer';

const appReducer = combineReducers({
  profile: profileStore.reducer,
  settingStore: translateStoreRedux.reducer,
  allTicket : ticketReducer
});

export type RootState = ReturnType<typeof appReducer>;
export default appReducer;
