import React from 'react';
import { Helmet } from 'react-helmet';

import AppContainer from "components/AppContainer";
import Header from "containers/Header";
import Footer from "components/Footer";
import Routes from "./Routes";

export default function App() {
    return (
        <AppContainer>
            <Helmet
                titleTemplate="%s - React.js Boilerplate"
                defaultTitle="Works"
            >
                <meta name="description" content="A React.js Boilerplate application" />
            </Helmet>
            <Header />
            <Routes />
            <Footer />
        </AppContainer>
    );
}