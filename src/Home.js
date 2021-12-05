import IconsPanel from "./components/IconsPanel";
import { AppTitle, MainContainer } from "./styles/homePage";


const Home = () => {
  return (
    <MainContainer>
      <AppTitle> The JungleTM FastRider Service </AppTitle>
      <IconsPanel/>
    </MainContainer>
  );
}

export default Home;
