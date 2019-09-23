import React from 'react';
import styled from "styled-components";

import Nav from "components/Nav";
import Container from "components/Container";

const HeaderNav = styled(Nav)`
    ${ p => p.hideLogo ? "width: 100%;" : "width: 750px;" }
    transition: width 0.5s;
    transition-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);

    & > *:not(last-child) {
        margin-right: 12px;
    }
`;

const HeaderWrapper = styled.header`
    height: 80px;
    padding: 16px;
    background-image: linear-gradient( 90.6deg,  rgba(77,34,109,1) -1%, rgba(90,142,253,1) 153.1% );
    flex: none;
    position: sticky;
    top: 0;
    border-bottom: solid white 2px;
`;

const HeaderContent = styled(Container)`
    display: flex;
    flex-direction: row;
    height: 100%;
    justify-content: space-between;
`;

const Logo = styled.img`
    height: 100%;
    object-fit: scale-down;
    object-position: left;

    transition: width 0.3s, margin 0.3s, opacity 0.3s;
    transition-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);

    ${ p => p.hideLogo ? "width: 0; margin-right: 0px; opacity: 0;" : "width: 200px; margin-right: 20px; opacity: 1;" }


`;

export default function Header(e) {
    return (
        <HeaderWrapper>
            <HeaderContent>
                <Logo hideLogo={e.hideLogo} src="/MECH_Logo_Transparent.png" />
                <HeaderNav hideLogo={e.hideLogo} />
            </HeaderContent>
        </HeaderWrapper>
    );
}