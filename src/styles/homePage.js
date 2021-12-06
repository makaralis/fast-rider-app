import styled from "styled-components";


export const AppTitle = styled.h2`
    padding-top: 40px;
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


export const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 97.5%;
    padding-bottom: 12px;
    @media only screen and (max-width: 550px) {
        display: none;
    }
`;

export const StyledButton = styled.button`
    background: #4c4c4b;
    color: #fff;
    border: none;
    min-width: 180px;
    height: 50px;
    font-weight: bold;
    cursor: pointer;
`

export const StyledInput = styled.input`
    padding: 0 0 0 10px;
    border: none;
    height: 50px;
    color: black;
    font-weight: bold;
    :focus {
        outline: none;
    } 
    ::placeholder { 
        color: black;
        opacity: 1;
        font-weight: bold;
    }   
`