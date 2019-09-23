import React from 'react';
import styled from "styled-components";
import Title from "components/Title";
import Description from "components/Description";
import Card from "components/Card";

const CustomCard = styled(Card)`
    height: 350px;
    width: 25%;

    & > * {
        display: flex;
        flex-direction: column;
    }
`;

const EventImage = styled.img`
    flex: 2;
    width: 100%;
    object-fit: cover;
`;

const EventInformation = styled.div`
    flex: 1;
`;

const Line = styled.div`
    line-height: 1.5em;
`;

export default function(e) {
    return (
        <CustomCard thin>
            <EventImage src={e.image || "/logo.png"} />
            <EventInformation>
                <Title as="h3">{e.title || "TBD"}</Title>
                
                <Line>
                    <Title as="span">Date:</Title> <Description as="span">{e.date || "TBD"}</Description>
                </Line>
                <Line>
                    <Title as="span">Location:</Title> <Description as="span">{e.location || "TBD"}</Description>
                </Line>
                <Line>
                    <Title as="span">Description:</Title> <Description as="span" align="justify">{e.description || "TBD"}</Description>
                </Line>
            </EventInformation>
        </CustomCard>
    );
}