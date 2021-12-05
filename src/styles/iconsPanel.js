import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 50px;
    @media only screen and (max-width: 550px) {
        flex-direction: column;
        align-items: center;
    }
`;
