import React from 'react';
import styled from "styled-components";
import Container from "components/Container";
import Description from "components/Description";

const FooterWrapper = styled.footer`
    padding: 16px;
    background-image: linear-gradient( 90.6deg,  rgba(77,34,109,1) -1%, rgba(90,142,253,1) 153.1% );
    flex: none;
    color: white;
`;

export default function(e) {
    return (
        <FooterWrapper>
            <Container css="opacity: 0.8; text-align: center;">
                <Description>Mechanical Electrical Computer Hub</Description>
                <Description>University of South Florida - Tampa, Florida</Description>
            </Container>
        </FooterWrapper>
    );
}