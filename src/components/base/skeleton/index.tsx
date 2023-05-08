import React from 'react';
import { Col } from 'styled-bootstrap-grid';

interface SkeletonProps {
  Loader?: any;
  count: number;
}

const Skeleton = ({ Loader, count }: SkeletonProps) => {
  return (
    <>
      {Array.from({ length: count }, (_, i) => (
        <Col
          key={i}
          col={12}
          sm={4}
          md={3}
          lg={2}
          noGutter
          style={{
            overflow: 'hidden',
            textAlign: 'center',
            padding: '0 5px 10px',
            maxWidth: '100%',
          }}
        >
          <Loader />
        </Col>
      ))}
    </>
  );
};

export default Skeleton;
