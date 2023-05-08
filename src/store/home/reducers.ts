import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import {
  SET_COMIC_LIST,
  SET_COMIC_FAV,
  UPDATE_COMIC_FAV,
  CLEAR_COMIC_FAV,
} from './types';

interface homeData {
  comicList: Object;
  comicFavourite: Array<Object>;
}

const initialState: homeData = {
  comicList: {},
  comicFavourite: [],
};

const Home = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_COMIC_LIST:
      return { ...state, comicList: action.payload };
    case SET_COMIC_FAV:
      return {
        ...state,
        comicFavourite: [...state.comicFavourite, action.payload],
      };
    case UPDATE_COMIC_FAV:
      let selectedItemId = state.comicFavourite.findIndex(
        (ele: any) => ele.id === action.payload.id,
      );
      if (selectedItemId < 0) {
        return { ...state };
      }
      state.comicFavourite.splice(selectedItemId, 1);
      return { ...state, comicFavourite: [...state.comicFavourite] };
    case CLEAR_COMIC_FAV:
      return { ...state, comicFavourite: [] };
    default:
      return state;
  }
};

const persistConfig = {
  key: 'auth',
  storage: storage,
  blacklist: ['comicList'],
};

export default persistReducer(persistConfig, Home);
