import React from 'react';
import ContentLoader from 'react-content-loader';
import style from './style';

const Loader = (props: any) => (
  <style.LoaderContainer>
    <ContentLoader
      speed={2}
      width={180}
      height={280}
      viewBox='0 0 180 280'
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'
      style={{ marginBottom: "-8px", marginTop: "-2px" }}
      {...props}
    >
      <rect x='1' y='1' rx='0' ry='0' width='190' height='275' />
    </ContentLoader>
  </style.LoaderContainer>
);

export default Loader;
