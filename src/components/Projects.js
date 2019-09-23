import React from 'react';
import { Helmet } from "react-helmet";
import styled from "styled-components";
import MainContent from "components/MainContent";
import Section from "components/Section";
import Title from "components/Title";
import Description from "components/Description";
import { NavLink } from 'react-router-dom';

const P = styled.p`
    font-size: large;
`;

const CenteredSection = styled(Section)`
    text-align: center;
`;

export default function() {
    return (
        <>
            <Helmet>
                <title>Projects</title>
            </Helmet>
            <MainContent>
                <CenteredSection>
                    <Title>Projects</Title>
                    <Description align="inherit">
                        We are working to get this year's projects posted!
                    </Description>
                    <P>
                        In the meantime, if you have any project ideas, fill out the <a href="https://forms.gle/awXYsPuH6xi4N5BM6">project interest form</a> and we'll get in touch with you soon!
                    </P>
                    <P>
                        Also, feel free to join us on our <NavLink to="contact">social media</NavLink>!
                    </P>
                    <img src="https://media0.giphy.com/media/Ae7SI3LoPYj8Q/giphy.gif?cid=790b7611678ce26c12057b1ff85b093a455535a758db69e9&rid=giphy.gif" />
                </CenteredSection>
            </MainContent>
        </>
    );
}