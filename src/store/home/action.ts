import {
  SET_COMIC_LIST,
  SET_COMIC_FAV,
  UPDATE_COMIC_FAV,
  CLEAR_COMIC_FAV,
} from './types';

const setComicsList = (data: any) => {
  return {
    type: SET_COMIC_LIST,
    payload: data,
  };
};

const setComicsFavourite = (data: any) => {
  return {
    type: SET_COMIC_FAV,
    payload: data,
  };
};

const updateComicsFavourite = (data: any) => {
  return {
    type: UPDATE_COMIC_FAV,
    payload: data,
  };
};

const clearComicsFavourite = () => {
  return {
    type: CLEAR_COMIC_FAV,
  };
};

export {
  setComicsList,
  setComicsFavourite,
  updateComicsFavourite,
  clearComicsFavourite,
};
