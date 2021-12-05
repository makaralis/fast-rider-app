import styled from 'styled-components';

export const StyledCard = styled.div`
    border-top: 3px solid ${props => props.bordercolor};
    min-width: 120px;
    padding: 10px;
    margin: 10px;
    cursor: pointer;
    background: #373737;
    color: #656565;
`;