import React from 'react';
import Hero from "./Hero"
import MainContent from "components/MainContent";
import Events from "containers/Events";
import AboutUs from "components/AboutUs";
import { Helmet } from 'react-helmet';

export default function() {
    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Hero />
            <MainContent>
                <AboutUs />
                <Events />
            </MainContent>
        </>
    );
}