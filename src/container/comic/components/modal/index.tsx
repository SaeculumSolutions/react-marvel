import React from 'react';

import { CrossFill, PlayBtn, RatingStarFull, RatingStarHalf } from '../../../../assets';

// Styles
import style from './style';

interface ModalProps {
  data: any;
  onRequestClose: Function;
}

const Modal = ({ data, onRequestClose }: ModalProps) => {
  // close modal on click outside
  const overlayClick = (event: any) => {
    if (!event.target.closest('.modal-container')) onRequestClose();
  };

  return (
    <style.Modal className={"prevent-scroll"} onClick={overlayClick}>
      <style.ModalContainer className='modal-container'>
        <style.ModalImg
          src={`${data?.thumbnail?.path}.${data?.thumbnail?.extension}`}
        />
        <style.InfoContainer>
          <style.DescriptionContainer>
            <style.ModalTitle title={data.title}>
              {data.title}
            </style.ModalTitle>
            <style.VerticalItemsContainer>
              <style.HorizontalItemsContainer>
                <style.HorizontalItem>
                  <style.VerticalItemLabel>Gender</style.VerticalItemLabel>
                  <style.VerticalItemValue>
                    Animation
                  </style.VerticalItemValue>
                </style.HorizontalItem>
                <style.HorizontalItem>
                  <style.VerticalItemLabel>Price</style.VerticalItemLabel>
                  <style.VerticalItemValue>
                    {`$${(data.prices || []).reduce(
                      (a: Number, b: any) => (a += b.price),
                      0,
                    )}`}
                  </style.VerticalItemValue>
                </style.HorizontalItem>
                <style.HorizontalItem>
                  <style.VerticalItemLabel>Length</style.VerticalItemLabel>
                  <style.VerticalItemValue>
                    120 mins
                  </style.VerticalItemValue>
                </style.HorizontalItem>
              </style.HorizontalItemsContainer>
            </style.VerticalItemsContainer>
            <style.VerticalItemsContainer>
              <style.VerticalItemLabel>Public</style.VerticalItemLabel>
              <style.VerticalItemValue>
                <style.RatingContainer>
                  4.5
                  <style.StarsContainer>
                    <RatingStarFull />
                    <RatingStarFull />
                    <RatingStarFull />
                    <RatingStarFull />
                    <RatingStarHalf />
                  </style.StarsContainer>
                </style.RatingContainer>
              </style.VerticalItemValue>
            </style.VerticalItemsContainer>
          </style.DescriptionContainer>
          <style.BtnAndDescriptionContainer>
            {data.description && (
              <style.Description>{data.description}</style.Description>
            )}
            <style.WatchNowBtn
              target='_blank'
              href={
                (data.urls || []).find(
                  (item: any) => item.type === 'detail',
                )?.url || ''
              }
            >
              Watch now
              <PlayBtn />
            </style.WatchNowBtn>
          </style.BtnAndDescriptionContainer>
        </style.InfoContainer>
        <style.ModalClose onClick={() => onRequestClose()}>
          <CrossFill />
        </style.ModalClose>
      </style.ModalContainer>
    </style.Modal>
  );
};

export default Modal;
