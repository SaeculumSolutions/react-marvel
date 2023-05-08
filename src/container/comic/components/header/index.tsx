import React, { useRef } from 'react';
import { Container } from 'styled-bootstrap-grid';

import { AppLogo, CrossFill, HeartBorder } from '../../../../assets';

// Styles
import style from './style';

interface HeaderProps {
  searchQuery: String;
  onChangeSearchQuery: Function;
  handleDrawer: Function;
}

const Header = ({
  searchQuery,
  onChangeSearchQuery,
  handleDrawer,
}: HeaderProps) => {
  const inputRef: any = useRef();
  const searchTimeoutRef: any = useRef();

  const onChangeValue = (e: any) => {
    if (searchTimeoutRef.current) clearTimeout(searchTimeoutRef.current);
    searchTimeoutRef.current = setTimeout(
      () => onChangeSearchQuery(e.target.value),
      500,
    );
  };

  const onClickClear = () => {
    inputRef.current.value = '';
    onChangeSearchQuery('');
  };

  return (
    <>
      <style.Header>
        <Container>
          <style.HeaderContainer>
            <style.SerchWrapper>
              <style.LogoAnchor href='/'>
                <style.LogoImage src={AppLogo} />
              </style.LogoAnchor>
              <style.SerchInputWrapper>
                <style.Input
                  ref={inputRef}
                  id='search'
                  placeholder='Click to search movie'
                  onChange={onChangeValue}
                />
                {searchQuery && !!searchQuery.length && (
                  <style.CrossBtn onClick={onClickClear}>
                    <CrossFill color={'#da3832'} />
                  </style.CrossBtn>
                )}
              </style.SerchInputWrapper>
            </style.SerchWrapper>
            <style.Bookmark onClick={() => handleDrawer()}>
              Favourites
              <HeartBorder />
            </style.Bookmark>
          </style.HeaderContainer>
        </Container>
      </style.Header>
    </>
  );
};

export default Header;
