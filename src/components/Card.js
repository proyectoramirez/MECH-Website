import React from "react";
import styled from "styled-components";

const Outside = styled.div`
    background: white;
    border: solid transparent 1px;
`;

const Inside = styled.div`
    margin: ${p => p.thin ? "0px" : "28px"};
`;

export default function(e) {
    return (
        <Outside className={e.className}>
            <Inside thin={e.thin}>
                {e.children}
            </Inside>
        </Outside>
    );
}