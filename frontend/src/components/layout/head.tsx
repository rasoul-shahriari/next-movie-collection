import getConfig from 'next/config';
import HtmlHead from 'next/head';
import React, { memo, FC } from 'react';

interface IHeadProps {
    title: string;
}

export const Head: FC<IHeadProps> = memo(({ children, title }) => (
    <HtmlHead>
        <title>{title ? `${title} - movie collection` : 'movie collection'}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        {children}
    </HtmlHead>
));
