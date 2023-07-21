import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';
import Img from './components/img';
import { useState, useEffect } from 'react';

const config: DocsThemeConfig = {
    logo: <h1>幻非</h1>,
    project: {
        link: 'https://github.com/huanfe1/docs',
    },
    docsRepositoryBase: 'https://github.com/huanfe1/docs',
    footer: {
        text: (
            <span>
                MIT {new Date().getFullYear()} ©{' '}
                <a href="https://nextra.site" target="_blank">
                    幻非
                </a>
                .
            </span>
        ),
    },
    nextThemes: {
        defaultTheme: 'dark',
    },
    useNextSeoProps() {
        return {
            titleTemplate: '%s - 幻非',
        };
    },
    components: {
        img: Img,
    },
    navigation: false,
    editLink: {
        text: '编辑此页',
    },
};

export default config;
