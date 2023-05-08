import styled from 'styled-components';
import { device } from '../../../../config/constants/media-sizes';

const Modal = styled.div`
  /* background-color: #00000075; */
  height: 100vh;
  width: 100vw;
  position: fixed;
  inset: 0;
  z-index: 998;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  position: relative;
  padding: 20px;
  border-radius: 5px;
  background-color: #fff;
  z-index: 999;
  display: flex;
  gap: 20px;
  max-height: 98%;
  overflow: auto;
  @media ${device.minTablet} {
    width: 600px;
    max-width: 65%;
  }
  @media ${device.maxTablet} {
    flex-direction: column;
    gap: 10px;
    width: 80%;
  }
  @media ${device.maxMobileStart} {
    padding: 16px;
  }
`;

const ModalImg = styled.img`
  width: 240px;
  height: auto;
  min-height: 340px;
  object-fit: cover;
  object-position: left;
  @media ${device.maxTablet} {
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
  }
  @media ${device.maxMobileStart} {
    min-height: 290px;
    width: 85%;
  }
`;

const ModalClose = styled.button`
  position: absolute;
  height: 20px;
  width: 20px;
  top: 20px;
  right: 20px;
  background-color: transparent;
  border: 0;
  outline: none;
  display: flex;
  border-radius: 50%;
  cursor: pointer;
`;

const ModalTitle = styled.div`
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 30px;
  padding-right: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-family: 'Montserrat', sans-serif;
  @media ${device.maxTablet} {
    margin-top: 10px;
    font-size: 14px;
    margin-top: 0;
    margin-bottom: 12px;
  }
`;

const VerticalItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 16px;
  color: var(--black);
  margin-bottom: 30px;
  &:last-child {
    margin-bottom: 0;
  }
  @media ${device.maxTablet} {
    margin-bottom: 12px;
  }
`;

const InfoContainer = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
`;

const DescriptionContainer = styled.div``;

const BtnAndDescriptionContainer = styled.div``;

const VerticalItemLabel = styled.div`
  font-weight: 500;
  color: var(--gray);
  @media ${device.maxTablet} {
    font-size: 14px;
  }
`;

const VerticalItemValue = styled.div`
  font-weight: 500;
  color: var(--black);
  font-size: 15px;
  @media ${device.maxTablet} {
    font-size: 14px;
  }
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const StarsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Description = styled.div`
  color: var(--gray);
  /* display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden; */
  max-height: 80px;
  overflow-y: auto;
  @media ${device.maxTablet} {
    font-size: 14px;
  }
`;

const WatchNowBtn = styled.a`
  margin-top: 30px;
  display: inline-block;
  border-radius: 80px;
  text-align: center;
  color: #fff;
  width: 100%;
  padding: 8px 10px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  background-color: var(--primary);
  &:hover {
    color: #eee;
  }
  @media ${device.maxTablet} {
    margin-top: 10px;
    padding: 10px 8px;
  }
`;

const HorizontalItemsContainer = styled.div`
display: flex;
flex-wrap: wrap;
gap: 40px;
@media ${device.maxMobileStart} {
  gap: 15px;
}
`;

const HorizontalItem = styled.div`
display: flex;
flex-direction: column;
gap: 6px;
`

export default {
  Modal,
  ModalContainer,
  ModalImg,
  ModalClose,
  ModalTitle,
  VerticalItemsContainer,
  InfoContainer,
  DescriptionContainer,
  BtnAndDescriptionContainer,
  VerticalItemLabel,
  VerticalItemValue,
  Description,
  WatchNowBtn,
  RatingContainer,
  StarsContainer,
  HorizontalItemsContainer,
  HorizontalItem
};
