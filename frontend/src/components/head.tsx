
import React, { FC } from 'react';
import HtmlHead from 'next/head';

interface IHeadProps {
    title: string;
}

const Head: FC<IHeadProps> = ({ children, title }) =>
    (
        <div>
            <HtmlHead key="main">{
                title && <title>{title}</title>
            }
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </HtmlHead>
            <p>Hello world!</p>
        </div>
    )

export default Head;