import styled from "styled-components";


export const AppTitle = styled.h2`
    color: #fff;
`;

export const RidesContainer = styled.div`
    display: grid;
    grid-column-gap: 0.2rem;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    @media only screen and (max-width: 550px) {
        grid-template-columns: 1fr 1fr;
        padding: 0 10px;
    }
`;

