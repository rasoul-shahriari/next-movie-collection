import Document, { Head, Main, NextScript } from 'next/document';
// Import styled components ServerStyleSheet
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
    static getInitialProps(ctx) {
        // Step 1: Create an instance of ServerStyleSheet
        const sheet = new ServerStyleSheet();
        // Step 2: Retrieve styles from components in the page
        const page = ctx.renderPage((App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        );

        const initialProps = await Document.getInitialProps(ctx);

        // Step 3: Extract the styles as <style> tags
        const styleTags = sheet.getStyleElement();
        // Step 4: Pass styleTags as a prop
        return {
            ...initialProps,
            styles: (
                <>
                    {page}
                    {styleTags}
                </>
            ),
        };
    }
}