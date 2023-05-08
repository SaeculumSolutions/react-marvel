import { createGlobalStyle } from 'styled-components';
import Variables from './Variables';
import { device } from '../config/constants/media-sizes';

export const GlobalStyles = createGlobalStyle`
  ${Variables};

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
    box-sizing: inherit;
    width: 100%;
  }

  // Scrollbar styles 
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--black);
  }

  html:has(.prevent-scroll) {
    overflow: hidden;
  }

  * {
    font-family: var(--font-main);
  }

  body {
    background-color: var(--black);
    color: var(--black);
    min-height: 100vh;
  }

  ul, li, ol {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: var(--black);
    transition: var(--transition);

    :hover {
      color: var(--blue)
    }
  }

  img{
    display: block;
    max-width: 100%;
    background-size:cover;
  }

  .container {
    @media ${device.maxMobileStart} {
      padding: 0 30px;
    }
  }

  .row {
    padding: 30px 0px 0px;
  }
  
  .pagination-container {
    @media ${device.minMobileStart} {
      padding-left: 0;
      padding-right: 0;
    }
    padding-top: 20px;
    padding-bottom: 30px;
  }

  .link {
    position: relative;

    :hover::after {
      width: 100%;
    }

    ::after {
      position: absolute;
      content: '';
      left: 0;
      bottom: 0;
      height: 2px;
      border-radius: 1px;
      width: 0px;
      background-color: var(--blue);
      transition: var(--transition);
    }
  }
  /* width */
  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background-color: #1D1D1F;
    border-radius: 10px;
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background-color: var(--primary); 
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background-color: var(--primary); 
  }
`;
