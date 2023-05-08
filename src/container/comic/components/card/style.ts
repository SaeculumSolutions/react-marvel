import styled from 'styled-components';

const Overlay = styled.div`
  cursor: pointer;
  display: none;
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75);
`;

const Card = styled.div`
  position: relative;
  /* height: 100%; */
  height: 275px;
  width: 190px;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 5px 10px;
  &:hover ${Overlay} {
    display: block;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: left;
`;

const HeartIcon = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding-top: 10px;
  padding-right: 10px;
  z-index: 9;
  color: white;
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
  font-family: 'Montserrat', sans-serif;
`;

const CardContainer = styled.div`
position: relative;
border-radius: 8px;
overflow: hidden;
width: 100%;
height: 100%;
`

export default {
  Card,
  Image,
  Overlay,
  HeartIcon,
  NameBox,
  CardContainer
};
