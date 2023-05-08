import styled from 'styled-components';
import { device } from '../../../../config/constants/media-sizes';

const Input = styled.input`
  font-style: italic;
  padding-left: 40px;
  padding-right: 50px;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 14px;
  line-height: 19px;
  color: #495057;
  width: 500px;
  max-width: 100%;
  height: 44px;
  border-radius: 80px;
  background-color: #ffffff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border: 0;
  outline: 0;
  @media ${device.maxTablet} {
    padding-left: 20px;
  }
`;
const Header = styled.header`
  background-color: var(--primary);
  min-height: 204px;
`;

const HeaderContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 42px;
  padding-bottom: 42px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media ${device.maxTablet} {
    flex-wrap: wrap;
  }
`;
const CrossBtn = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  width: 50px;
  height: 100%;
  justify-content: center;
  align-items: center;
  color: var(--primary);
  svg {
    cursor: pointer;
  }
`;

const SerchWrapper = styled.div`
  text-align: center;
  width: 100%;
`;
const SerchInputWrapper = styled.div`
  position: relative;
  width: fit-content;
  max-width: 100%;
  margin: 0 auto;
`;

const Div = styled.div``;

const Bookmark = styled.div`
  position: absolute;
  right: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 15px;
  padding-top: 30px;
  color: white;
  font-size: 14px;
  font-weight: bold;
  font-family: 'Montserrat', sans-serif;
  @media ${device.maxTablet} {
    margin-left: auto;
    position: static;
  }
`;

const LogoImage = styled.img``;

const LogoAnchor = styled.a`
display: inline-block;
margin: 20px 0;
`

export default {
  Input,
  Header,
  Bookmark,
  LogoImage,
  Div,
  HeaderContainer,
  SerchWrapper,
  SerchInputWrapper,
  CrossBtn,
  LogoAnchor
};
