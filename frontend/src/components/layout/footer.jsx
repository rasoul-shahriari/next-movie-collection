import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  text-align: center;
  margin-top: 80px;
  padding: 80px 30px;
  div {
    margin-bottom: 20px;
  }
`;

export const Footer = () => (
  <StyledFooter>
    <div className="copyright">© {new Date().getFullYear()} Fi Studio.</div>
  </StyledFooter>
);
