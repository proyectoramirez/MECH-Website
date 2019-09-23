import React from 'react';
import Hero from "./Hero"
import MainContent from "components/MainContent";
import Events from "containers/Events";
import AboutUs from "components/AboutUs";

export default function() {
    return (
        <>
            <Hero />
            <MainContent>
                <AboutUs />
                <Events />
            </MainContent>
        </>
    );
}