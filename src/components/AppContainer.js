import styled from "styled-components";

export default styled.div`
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: column;

    & > * {
        flex: none;
    }

    overflow-y: auto;

    background: linear-gradient(157deg, rgba(255,255,255,1) 0%, rgba(240,220,255,1) 80%, rgba(255,255,255,1) 100%);
`;