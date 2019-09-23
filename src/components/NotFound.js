import React from 'react';
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Title from "components/Title";
import Description from "components/Description";
import MainContent from "components/MainContent";

const FullContainer = styled(MainContent)`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;

    text-align: center;

    & > * > * {
        line-height: 1em;
    }
`;

export default function() {
    return (
        <>
            <Helmet>
                <title>Not Found</title>
            </Helmet>
            <FullContainer>
                <Title>We're sorry, but we really cannot find this page</Title>
                <Description align="center" as="h2">We tried =(</Description>
                <Description align="center" as="h4" css="margin-bottom: 2em">Error 404</Description>
                <img src="https://media.giphy.com/media/gCANwADwdazG8/giphy.gif" height="300" />
            </FullContainer>
        </>
    );
};