import { createStore, combineReducers, Reducer } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import home from './home/reducers';

const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2,
};

let rootReducer: Reducer = combineReducers({
  home,
});

export const store = createStore(persistReducer(persistConfig, rootReducer));
export const persistor = persistStore(store);
