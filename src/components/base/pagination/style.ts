import styled from 'styled-components';
import { device } from '../../../config/constants/media-sizes';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PrevNextBtn = styled.button`
  cursor: pointer;
  background-color: #fff;
  min-width: 150px;
  min-height: 38px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 80px;
  transition: 300ms background-color ease-in-out;
  outline: 0;
  border: 0;
  &:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }
  &:hover:not(:disabled) {
    background-color: #ccc;
  }
  @media ${device.maxMobileStart} {
    min-width: 120px;
    min-height: 30px;
    font-size: 12px;
  }
`;

const Div = styled.div``;

export default {
  PaginationContainer,
  PrevNextBtn,
  Div,
};
