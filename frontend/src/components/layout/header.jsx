import { Menu, Logo } from '@frontend/components/layout';
import styled from 'styled-components';

const StyledHeader = styled.header`
    padding: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 600px) {
        display: block;
        text-align: center;
    }
`
export const Header = () => (
    <StyledHeader>
        <Logo />
        <Menu />
    </StyledHeader>
);