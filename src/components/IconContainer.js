import { Container, Description, StyledImg, StyledSpan } from '../styles/iconContainer';

const IconContainer = ({iconPath, description, index}) => {
  return (
    <Container haspadding={index === 1}>
      <StyledSpan><StyledImg src={iconPath} alt='icon' height='40vh' /></StyledSpan>
        <Description> {description} </Description>
    </Container>
  );
}

export default IconContainer;
