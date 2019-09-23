import React from 'react';
import styled from "styled-components";
import MainContent from "components/MainContent";
import Section from "components/Section";
import Title from "components/Title";
import Description from "components/Description";
import Member from "./Member"

const MemberCarrousel = styled.div`
    display: grid;
    flex-wrap: wrap;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px 25px;
`;

export default function(p) {
    return (
        <MainContent>
            <Section css="text-align: center; padding-bottom: 1rem">
                <Title>Our E-Board</Title>
                <img css="text-align: center" src={p.mainPicture} />
                <Description align="center">
                    We are the E-Board for the 2019-2020 year, and we are passionate about making all your engineering projects real!
                </Description>
            </Section>
            <MemberCarrousel>
                {p.members.map((e, i) => <Member {...e} key={i} />)}
            </MemberCarrousel>
        </MainContent>
    );
}