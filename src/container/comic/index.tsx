import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Redux Setup
import {
  setComicsList,
  setComicsFavourite,
  updateComicsFavourite,
} from '../../store/home/action';

// Components
import Header from './components/header';
import List from './components/list';
import Modal from './components/modal';
import Drawer from './components/drawer';

// Services
import ApiCall from '../../service/api';

// Constants
import { TABLE_CONFIG } from '../../config/constants/table-constant';
import API_ENDPOINT from '../../config/api-endpoints';

// Interfaces
import { ComicCardProps } from '../../interfaces/comic';

// Utils
import { replaceDoubleBraces } from '../../utils/common';

const Comic = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getComicListByPaging();
  }, [searchQuery]);

  const comics = useSelector((state: any) => state.home.comicList);

  const dispatch = useDispatch();

  // get comic api
  const getComicListByPaging = async (offset: number = 1) => {
    setLoading(true)
    const response = await ApiCall({
      method: 'GET',
      url: `${replaceDoubleBraces(API_ENDPOINT.COMIC.GET_COMIC_LIST, {
        limit: TABLE_CONFIG.COMIC.TABLE_LIMIT,
        offset,
        orderBy: '-modified',
      })}${searchQuery ? `&titleStartsWith=${searchQuery}` : ''}`
    });
    setLoading(false)
    if (response) {
      dispatch(setComicsList(response.data));
    }
  };

  // header search change
  const handleSearch = (query: string) => setSearchQuery(query);

  // comic card fav icon click handler
  const handleFavorite = (item: ComicCardProps) => {
    if (!item.isFavorite) dispatch(setComicsFavourite({ ...item }));
    else dispatch(updateComicsFavourite({ ...item }));
  };

  // comic card click to open modal
  const onItemClick = (item: any) => setSelectedCard({ ...item });

  // open close Fav drawer
  const handleDrawer = () => setDrawerOpen(prev => !prev);

  // handle list paging event
  const onPaginationClick = (isNext: boolean) => {
    getComicListByPaging(comics.offset + (isNext ? comics.limit : -(comics.limit)));
    window.scrollTo(0, 0);
  };

  // handle modal close event
  const onRequestCloseModal = () => setSelectedCard(null);

  return (
    <>
      <Header
        searchQuery={searchQuery}
        onChangeSearchQuery={handleSearch}
        handleDrawer={handleDrawer}
      />
      <List
        paging={true}
        data={comics}
        onFavouriteClick={handleFavorite}
        loading={loading}
        onPaginationClick={onPaginationClick}
        onItemClick={onItemClick}
      />
      <Drawer
        open={isDrawerOpen}
        handleDrawer={handleDrawer}
        position='right'
        size='250px'
      />
      {selectedCard && (
        <Modal data={selectedCard} onRequestClose={onRequestCloseModal} />
      )}
    </>
  );
};

export default Comic;
