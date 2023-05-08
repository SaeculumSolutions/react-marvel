import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Redux setup
import {
  updateComicsFavourite,
  clearComicsFavourite,
} from '../../../../store/home/action';

import { CrossFill, HeartSelected } from '../../../../assets';

// Styles
import style from './style';

// Interfaces
import { ComicCardProps } from '../../../../interfaces/comic';

interface DrawerProps {
  open: Boolean;
  size: Object;
  position: String;
  handleDrawer: Function;
}

const Drawer = ({ open, size, position, handleDrawer }: DrawerProps) => {
  const dispatch = useDispatch();

  const comicFavourite = useSelector((state: any) => state.home.comicFavourite);

  const onClickRemoveFav = (data: ComicCardProps) => {
    dispatch(updateComicsFavourite({ ...data }));
  };

  return (
    <>
      {open && <style.Drawer onClick={() => handleDrawer()}></style.Drawer>}
      <style.DrawerWrapper
        open={open}
        size={size}
        position={position}
        className={`${open ? 'opened prevent-scroll' : ''}`}
      >
        <style.DrawerHeader className=''>
          <style.DrawerTitle>My Favourites</style.DrawerTitle>
          <style.ClearContainer>
            {!!(comicFavourite || []).length && (
              <style.ClearAll onClick={() => dispatch(clearComicsFavourite())}>
                Clear All
              </style.ClearAll>
            )}
            <style.CrossBtn onClick={() => handleDrawer()}>
              <CrossFill />
            </style.CrossBtn>
          </style.ClearContainer>
        </style.DrawerHeader>
        <style.FavItemsContainer>
          {comicFavourite?.length ? (
            comicFavourite.map((data: ComicCardProps) => (
              <style.FavContainer key={data.id}>
                <style.FavImage src={data.image} />
                <style.FavTitle>{data.title}</style.FavTitle>
                <style.FavHeart onClick={() => onClickRemoveFav(data)}>
                  <HeartSelected />
                </style.FavHeart>
              </style.FavContainer>
            ))
          ) : (
            <style.NoDataImage src='https://cdn-icons-png.flaticon.com/512/6134/6134065.png' />
          )}
        </style.FavItemsContainer>
      </style.DrawerWrapper>
    </>
  );
};

export default Drawer;
