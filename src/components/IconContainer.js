import { Container, Description } from '../styles/iconContainer';

const IconContainer = ({iconPath, description}) => {
  return (
    <Container>
      <img src={iconPath} alt='icon' />
        <Description> {description} </Description>
    </Container>
  );
}

export default IconContainer;
