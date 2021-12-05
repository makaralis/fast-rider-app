import styled from "styled-components";


export const StyledDiv = styled.div`
    display: ${props => props.display};
    flex-direction: ${props => props.flexdirection};
    align-items: ${props => props.alignitems};
    justify-content: ${props => props.justifycontent};
    text-align: ${props => props.textalign};
    align-self: ${props => props.alignself};
    color: ${props => props.color};
    font-weight: ${props => props.fontweight};
    padding: ${props => props.padding};
    font-size: ${props => props.fontsize};
    padding-inline-end: ${props => props.paddingend};
    padding-inline-start: ${props => props.paddingstart};
`