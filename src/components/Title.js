import styled from "styled-components";

export default styled.h1`
    text-align: ${p => p.align || "center"};
    font-weight: 600;
`;