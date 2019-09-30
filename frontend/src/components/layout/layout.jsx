import { Header, Footer } from '@frontend/components/layout';

import styled from 'styled-components';

const StyledLayout = styled.div`
    min-height: 600px;
    text-align: center;
`

export const Layout = props => (
    <StyledLayout>
        <Header />
        <div className="content-wrapper">{props.children}</div>
        <Footer />
    </StyledLayout>
);