import React from 'react';
import { Container } from 'styled-bootstrap-grid';

// Styles
import style from './style';

interface PaginationProps {
  prevVisible?: boolean;
  nextVisible?: boolean;
  onPaginationClick: Function;
}

const Pagination = ({
  prevVisible,
  nextVisible,
  onPaginationClick,
}: PaginationProps) => {
  return (
    <Container className='container pagination-container'>
      <style.PaginationContainer>
        <style.PrevNextBtn
          disabled={!prevVisible}
          onClick={() => onPaginationClick(false)}
        >
          PREVIOUS PAGE
        </style.PrevNextBtn>
        <style.PrevNextBtn
          disabled={!nextVisible}
          onClick={() => onPaginationClick(true)}
        >
          NEXT PAGE
        </style.PrevNextBtn>
      </style.PaginationContainer>
    </Container>
  );
};

export default Pagination;
