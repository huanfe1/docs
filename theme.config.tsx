import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';
import Img from './components/img';

const config: DocsThemeConfig = {
    logo: <span>My Project</span>,
    project: {
        link: 'https://github.com/shuding/nextra-docs-template',
    },
    docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
    footer: {
        text: '幻非的文档',
    },
    nextThemes: {
        defaultTheme: 'dark',
    },
    useNextSeoProps() {
        return {
            titleTemplate: '%s - 幻非',
        }
    },
    components: {
        img: Img,
    },
    head: (
        <>
            <meta name="referrer" content="never" />
        </>
    ),
};

export default config;
