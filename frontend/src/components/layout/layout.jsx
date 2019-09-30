import React from 'react';
import styled from 'styled-components';

import { Header, Footer } from '@frontend/components/layout';

const StyledLayout = styled.div`
  min-height: 600px;
  text-align: center;
`;

export const Layout = props => (
  <StyledLayout>
    <Header />
    <div className="content-wrapper">{props.children}</div>
    <Footer />
  </StyledLayout>
);
