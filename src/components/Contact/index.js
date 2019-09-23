import React from 'react';
import styled from "styled-components";
import MainContent from "components/MainContent";
import Section from "components/Section";
import Title from "components/Title";
import Contact from "./Contact"

const ContactCarrousel = styled.div`
    display: grid;
    flex-wrap: wrap;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 35px;
`;

export default function(p) {
    return (
        <MainContent>
            <Section css="text-align: center;">
                <Title css="margin-bottom: 2rem">Contacts and Social Media</Title>
                <ContactCarrousel>
                    {p.contacts && p.contacts.map((e, i) => <Contact {...e} key={i} />)}
                </ContactCarrousel>
            </Section>
        </MainContent>
    );
}