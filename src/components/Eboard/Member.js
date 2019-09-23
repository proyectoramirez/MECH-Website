import React from 'react';
import styled from "styled-components";
import Card from "components/Card";
import Title from "components/Title";
import Description from "components/Description";

const MemberCard = styled(Card)`
    & > * {
        text-align: center
    };
`;

export default function(p) {
    return (
        <MemberCard thin>
            <img css="margin-bottom: 0.7rem; width: 100%; height: 350px; object-fit: cover" src={p.picture} />
            <div css="> * {margin: 0.5rem 0}">
                <Title as="h2">{p.name}</Title>
                <Description as="h2">{p.title}</Description>
                <p>{p.major}</p>
            </div>
        </MemberCard>
    );
}