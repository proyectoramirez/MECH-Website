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
                titleTemplate="%s - MECH"
                defaultTitle="MECH"
            >
                <meta name="description" content="Mechanical Electrical Computer Hub Student Organization at the University of South Florida, Tampa, Florida" />
            </Helmet>
            <Header />
            <Routes />
            <Footer />
        </AppContainer>
    );
}