import getConfig from 'next/config';
import HtmlHead from 'next/head';
import React, { memo, FC } from 'react';

interface IHeadProps {
    title: string;
}

const { publicRuntimeConfig } = getConfig();

export const Head: FC<IHeadProps> = memo(({ children, title }) => (
    <HtmlHead>
        <script
            dangerouslySetInnerHTML={{
                __html: `!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on"];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t,e){var n=document.createElement("script");n.type="text/javascript";n.async=!0;n.src="https://cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(n,a);analytics._loadOptions=e};analytics.SNIPPET_VERSION="4.1.0";
        analytics.load("${publicRuntimeConfig.segmentPublicKey}");
        analytics.page();
        }}();`,
            }}
        />
        <title>{title} - Ocean.io</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        {children}
    </HtmlHead>
));
