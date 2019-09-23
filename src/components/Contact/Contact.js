import React from 'react';
import styled from "styled-components";
import Card from "components/Card";
import Title from "components/Title";

const MemberCard = styled(Card)`
    & > * {
        text-align: center
    };
`;

export default function(p) {
    return (
        <MemberCard thin>
            <a href={p.link}>
                <img css="margin-bottom: 0.7rem; width: 100%; height: 200px; object-fit: contain" src={p.picture} />
            </a>
            <div css="> * {margin: 0.5rem 0}">
                <Title as="h2">{p.name}</Title>
                <p>{p.description}</p>
            </div>
        </MemberCard>
    );
}