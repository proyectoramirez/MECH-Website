import React from 'react';
import styled from "styled-components";
import { NavLink } from 'react-router-dom';

const Wrapper = styled.nav`
    display: flex;
`;

const HeaderNavLink = styled(NavLink)`
    text-decoration: none;
    color: white;
    font-size: 1.2rem;

    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 12px 18px;
    background: rgba(0, 0, 0, 0.2);

    transition: background 0.4s;
    transition: flex-grow 0.4s;
    transition-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);

    flex: 4;

    &.active {
        flex: 5;
        background: rgba(255, 255, 255, 0.08);
    }
`;

export default function Nav({className}) {
    return (
        <Wrapper className={className}>
            <HeaderNavLink exact to="/">Home</HeaderNavLink>
            <HeaderNavLink to="/projects">Projects</HeaderNavLink>
            <HeaderNavLink to="/eboard">E-Board</HeaderNavLink>
            <HeaderNavLink to="/contact">Contact Us</HeaderNavLink>
        </Wrapper>
    );
}