import styled from "styled-components";

export default styled.h1`
    text-align: ${p => p.align || "inherit"};
    font-weight: 300;
`;