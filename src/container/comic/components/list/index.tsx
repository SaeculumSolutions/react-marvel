import React from 'react';
import { Container, Row } from 'styled-bootstrap-grid';
import { useSelector } from 'react-redux';

// Components
import ComicCard from '../card';
import Loader from '../loader';
import Pagination from '../../../../components/base/pagination';
import LoaderGrid from '../../../../components/base/skeleton';

// Styles
import style from './style';

// Constants
import { TABLE_CONFIG } from '../../../../config/constants/table-constant';

interface ComicProps {
  paging: Boolean;
  data: any;
  onFavouriteClick: Function;
  onPaginationClick: Function;
  onItemClick: Function;
  loading: boolean;
}

const List = ({
  paging,
  data,
  onFavouriteClick,
  onPaginationClick,
  onItemClick,
  loading,
}: ComicProps) => {
  const comicFavourite = useSelector((state: any) => state.home.comicFavourite);

  return (
    <>
      <Container className='container'>
        <Row className='row'>
          {loading ? (
            <LoaderGrid
              count={TABLE_CONFIG.COMIC.TABLE_LIMIT}
              Loader={Loader}
            />
          ) : (data.results || []).length > 0 ? (
            data.results.map((item: any) => (
              <ComicCard
                key={item.id}
                data={item}
                onFavouriteClick={onFavouriteClick}
                onClick={onItemClick}
                isFavorite={(comicFavourite || []).find(
                  (ele: any) => ele.id === item.id,
                )}
              />
            ))
          ) : (
            <style.NoDataImage src='https://cdn-icons-png.flaticon.com/512/6134/6134065.png' />
          )}
        </Row>
      </Container>

      {paging && (data.results || []).length > 0 && (
        <Pagination
          prevVisible={data.offset != 1}
          nextVisible={data.offset + data.limit < data.total}
          onPaginationClick={onPaginationClick}
        />
      )}
    </>
  );
};

export default List;
