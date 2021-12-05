import styled from 'styled-components';

export const StyledCard = styled.div`
    border-top: 3px solid ${props => props.bordercolor};
    min-width: 80px;
    max-width: 150px;
    padding: 10px;
    margin: 10px;
    cursor: pointer;
    background: #373737;
    color: #656565;
    display: flex;
    flex-direction: column;
    font-weight: bold;
`;