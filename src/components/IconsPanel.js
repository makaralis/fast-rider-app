import IconContainer from "./IconContainer";
import { Container } from "./styles/iconsPanel";


const IconsPanel = () => {
  const items = [{iconPath: '', description: ''}, {iconPath: '', description: ''},{iconPath: '', description: ''}];


  return (
    <Container>
      {items.map((item) => <IconContainer iconPath={item.iconPath} description={item.description} key={item.iconPath}/>)}
    </Container>
  );
}

export default IconsPanel;
