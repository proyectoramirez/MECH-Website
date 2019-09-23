import React from "react";
import styled from "styled-components";
import Container from "components/Container";
import Card from "components/Card";

const CustomContainer = styled(Container)`
    margin-top: 2rem;
    margin-bottom: 2rem;
    flex-grow: 1;
`

export default function(e) {
    return (
        <CustomContainer className={e.className}>
            <Card>
                {e.children}
            </Card>
        </CustomContainer>
    );
};