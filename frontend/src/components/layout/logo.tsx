import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const StyledLogo = styled.div`
  img {
    display: block;
    width: 120px;
  }
  @media (max-width: 600px) {
    display: inline-block;
  }
`;

export const Logo = () => (
  <StyledLogo>
    <Link href="/">
      <a>Fi Studio</a>
    </Link>
  </StyledLogo>
);
