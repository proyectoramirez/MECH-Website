import React from 'react';
import styled from "styled-components";
import Title from "components/Title";
import Description from "components/Description";

const Wrapper = styled.div`
    height: 500px;
    background-image: linear-gradient( 90.6deg,  rgba(77,34,109,1) -1%, rgba(90,142,253,1) 153.1% );
    display: flex;
    flex-direction: row;
`;

const Side = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const HeroContent = styled.div`
    margin: 0 80px;
    color: white;
    font-size: larger;
    text-align: center;

    & > * {
        line-height: 1.5em;
    }
`;

const HeroImage = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`;

export default class PageHome extends React.Component {
    render() {
        return (
            <Wrapper>
                <Side>
                    <HeroContent>
                        <img src="/logo.png" />
                        <Title>Mechanical Electrical Computer Hub</Title>
                        <Description as="h3" align="center">Inspiring, encouraging and engaging engineering students through projects, workshops and research</Description>
                    </HeroContent>
                </Side>
                <Side>
                    <HeroImage src="https://mechusf.weebly.com/uploads/4/2/1/5/42155517/2593334-orig_orig.jpg" />
                </Side>
            </Wrapper>
        );
    }
}