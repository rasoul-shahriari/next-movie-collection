import React from 'react'
import App from 'next/app'

import { Head } from '@frontend/components/layout/head';

import { Layout } from '@frontend/components/layout/layout';
import { GlobalStyle } from '@frontend/styles'

interface IMyAppProps {
    title: string;
}

export default class MyApp extends App<IMyAppProps> {

    public static async getInitialProps({
        Component,
        ctx,
    }: {
        Component: any;
        ctx: any;
    }) {

        const title = Component.getTitle
            ? await Component.getTitle()
            : Component.title;

        let pageProps: any = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);

            if (!pageProps) {
                pageProps = {};
            }
        }


        return { pageProps, title };
    }
    render() {
        const { Component, pageProps, title } = this.props;
        return (
            <>
                <GlobalStyle />
                <Head title={title}>{(Component as any).head}</Head>
                <Layout title={title}>
                    <Component {...pageProps} />
                </Layout>
            </>
        )
    }
}