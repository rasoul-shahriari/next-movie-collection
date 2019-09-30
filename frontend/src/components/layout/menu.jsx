import Link from 'next/link';
import styled from 'styled-components';

const StyledMenu = styled.ul`
        margin: 5px 0 0;
        padding: 0;
        list-style: none;
        display: flex;

        li a {
            font-size: 22px;
            color: #111;
            font-weight: 300;
            padding: 5px 2px;
            margin: 0 10px;
            text-decoration: none;

            &:hover {
                padding-bottom: 3px;
                border-bottom: 2px solid #ffe525;
            }
        }

        @media (max-width: 600px) {
            display: block;
            margin-top: 20px;
            li {
                display: inline-block;
            }

            li a {
                font-size: 18px;
            }
        }   
    }
`;

export const Menu = () => (
    <StyledMenu>
        <li>
            <Link href="/">
                <a>Home</a>
            </Link>
        </li>
        <li>
            <Link href="/services">
                <a>Services</a>
            </Link>
        </li>
        <li>
            <Link href="/portfolio">
                <a>Portfolio</a>
            </Link>
        </li>
        <li>
            <Link href="/about">
                <a>About</a>
            </Link>
        </li>
    </StyledMenu>
);