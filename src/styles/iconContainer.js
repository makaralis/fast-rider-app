import styled from "styled-components";

export const Description = styled.h4`
    color: #656565;
`
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 180px;
    text-align: center;
    padding: ${props => props.haspadding ? '0 100px' : ''}
`;
