import IconContainer from "./IconContainer";
import { Container } from "../styles/iconsPanel";


const IconsPanel = () => {
  const items = [{iconPath: '', description: 'Enter your park ticket #PIN number, then select the desired ride while noting the stated return time'}, 
  {iconPath: '', description: 'Press `submit` to cofirm and retreive your access code'},
  {iconPath: '', description: 'When the time comes, use the special FastRider time to cut out a considerable wait time'}];

  return (
    <Container>
      {items.map((item) => <IconContainer iconPath={item.iconPath} description={item.description} key={item.iconPath}/>)}
    </Container>
  );
}

export default IconsPanel;
