import '../styles/globals.css'
import type {AppProps} from 'next/app'
import React from "react";
import Layout from "../src/App/components/Layout";
import {CssBaseline, ThemeProvider} from "@mui/material";
import theme from "../src/App/config/theme";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    );
}

export default MyApp
