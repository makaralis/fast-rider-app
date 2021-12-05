import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 45px;
`;

export const AppTitle = styled.h2`
    color: #fff;
`;

export const RidesContainer = styled.div`
    display: grid;
    grid-column-gap: 0.2rem;
    grid-template-columns: auto auto auto auto;
`;