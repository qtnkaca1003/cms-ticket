import { combineReducers } from '@reduxjs/toolkit';
import profileStore from './authentication/profileStore';
import translateStoreRedux from './setting/settingStore';

const appReducer = combineReducers({
  profile: profileStore.reducer,
  settingStore: translateStoreRedux.reducer,
});

export type RootState = ReturnType<typeof appReducer>;
export default appReducer;
