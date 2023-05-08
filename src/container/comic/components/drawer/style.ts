import styled from 'styled-components';
import { device } from '../../../../config/constants/media-sizes';

const Drawer = styled.div`
  /* background-color: #00000075; */
  height: 100vh;
  width: 100vw;
  position: fixed;
  inset: 0;
  z-index: 998;
  display: flex;
  justify-content: center;
  align-items: center;
`

const DrawerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 25px;
`;

const NameBox = styled.div`
  position: absolute;
  bottom: 0;
  background-color: #fff;
  width: 100%;
  padding: 15px 10px;
  font-size: 14px;
  color: #1d1d1f;
  font-weight: bolder;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: default;
`;

const ClearContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;

const DrawerTitle = styled.div`
  color: var(--primary);
  font-size: 18px;
  @media ${device.maxTablet} {
    font-size: 15px;
  }
`;

const CrossBtn = styled.div`
  background-color: transparent;
  display: flex;
  cursor: pointer;
  @media ${device.maxTablet} {
    svg {
      height: 18px;
      width: 18px;
    }
  }
`;

const ClearAll = styled.div`
  color: #1d1d1f;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  @media ${device.maxTablet} {
    font-size: 12px;
  }
`;

const FavContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  border-top: 1.5px solid #f1f1f3;
  padding-top: 15px;
  margin-bottom: 5px;
`;

const FavImage = styled.img`
  width: 70px;
  height: 100px;
  flex-shrink: 0;
`;

const FavHeart = styled.button`
  background-color: transparent;
  border: 0;
  outline: 0;
  cursor: pointer;
`;

const NoDataImage = styled.img`
  width: 40%;
  margin: auto;
`;

const DrawerWrapper: any = styled.div`
  width: 380px;
  height: 100%;
  position: fixed;
  background: white;
  right: 0;
  top: 0;
  transform: translateX(101%);
  transition: all 0.3s linear;
  z-index: 999;
  &.opened {
    transform: translateX(0%) !important;
    height: 100vh;
    display: flex;
    flex-direction: column;
    -webkit-box-shadow: -10px 0px 10px 0px rgba(0,0,0,0.5);
    -moz-box-shadow: -10px 0px 10px 0px rgba(0,0,0,0.5);
    box-shadow: -10px 0px 10px 0px rgba(0,0,0,0.5);
  }
  @media ${device.maxTablet} {
    width: 280px;
  }
`;

const FavItemsContainer: any = styled.div`
  padding: 20px;
  padding-top: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1 1 auto;
  height: 100%;
  overflow-y: auto;
`;

const FavTitle = styled.div`
  font-size: 14px;
  flex: 1 1 auto;
`;

export default {
  Drawer,
  DrawerHeader,
  NameBox,
  ClearContainer,
  DrawerTitle,
  CrossBtn,
  ClearAll,
  FavContainer,
  FavImage,
  FavHeart,
  NoDataImage,
  DrawerWrapper,
  FavItemsContainer,
  FavTitle,
};
