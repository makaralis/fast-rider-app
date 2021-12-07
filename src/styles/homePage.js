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
        height: calc(100% - 80px);
        padding-bottom: 60px;
    }
`;


export const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 97.5%;
    padding-bottom: 12px;
    @media only screen and (max-width: 550px) {
        justify-content: center;
    }
`;

export const StyledButton = styled.button`
    background: #4c4c4b;
    color: #fff;
    border: none;
    min-width: 180px;
    height: 50px;
    font-weight: bold;
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
    @media only screen and (max-width: 550px) {
        display: none;
    }
`

export const StyledInput = styled.input`
    padding: 0 0 0 10px;
    border: none;
    height: 50px;
    width: 100%;
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
    @media only screen and (max-width: 550px) {
        width: 89%;
    }
`

export const StyledMobileButton = styled.button`
    background: #4c4c4b;
    color: #fff;
    border: none;
    min-width: 180px;
    height: ${props => props.scrolleddown ? '50px' : '80px'};
    font-weight: bold;
    width: ${props => props.scrolleddown ? '89%' : '100%'};
    transition: width 1s, height 1s;
    @media only screen and (min-width: 550px) {
        display: none;
    }
    position: fixed;
    bottom: 0;

`
