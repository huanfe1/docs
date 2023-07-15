import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="zh-CN">
            <Head>
                <meta name="referrer" content="never" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
