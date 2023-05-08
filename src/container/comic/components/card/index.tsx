import React from 'react';
import { Col } from 'styled-bootstrap-grid';

// Images
import { HeartBorder, HeartSelected } from '../../../../assets';

// Styles
import style from './style';

interface CardProps {
  data: any;
  onFavouriteClick: Function;
  onClick: Function;
  isFavorite: Boolean;
}

const ComicCard = ({
  data,
  onFavouriteClick,
  onClick,
  isFavorite,
}: CardProps) => {
  const onFavouriteClickBtn = (e: any) => {
    e.stopPropagation();
    onFavouriteClick({
      image: `${data?.thumbnail?.path}.${data?.thumbnail?.extension}`,
      id: data.id,
      title: data.title,
      isFavorite,
    });
  };

  return (
    <Col col={12} sm={4} md={3} lg={2} noGutter key={data.id}>
      <style.Card onClick={() => onClick(data)}>
        <style.CardContainer>
          <style.Image src={`${data?.thumbnail?.path}.${data?.thumbnail?.extension}`} alt={'alt'}></style.Image>
          <style.Overlay>
            <style.HeartIcon onClick={onFavouriteClickBtn}>
              {isFavorite ? (
                <HeartSelected />
              ) : (
                <HeartBorder />
              )}
            </style.HeartIcon>
            <style.NameBox title={data.title}>{data.title}</style.NameBox>
          </style.Overlay>
        </style.CardContainer>
      </style.Card>
    </Col >
  );
};

export default ComicCard;
