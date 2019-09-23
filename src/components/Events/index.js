import React from 'react';
import styled from "styled-components";
import Title from "components/Title";
import Section from "components/Section";
import Event from "./Event";

const EventCarrousel = styled.div`
    display: flex;
    
    overflow-x: auto;

    & > * {
        flex: none;

        :not(:last-child) {
            margin-right: 20px;
        }
    }
`;

export default function(p) {
    return (
        <Section>
            <Title>Upcoming Events</Title>
            <EventCarrousel>
                {p.events && p.events.map((e, i) => <Event {...e} key={i} />)}
            </EventCarrousel>
        </Section>
    );
}