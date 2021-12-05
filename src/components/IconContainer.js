import { Container, Description } from '../styles/iconContainer';

const IconContainer = ({iconPath, description, index}) => {
  return (
    <Container haspadding={index === 1}>
      <img src={iconPath} alt='icon' />
        <Description> {description} </Description>
    </Container>
  );
}

export default IconContainer;
