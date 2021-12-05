import { useState, useEffect, useCallback } from "react";
import IconsPanel from "./components/IconsPanel";
import { AppTitle, RidesContainer} from "./styles/homePage";
import axios from "axios";
import CardRide from "./components/RideCard";
import { StyledDiv } from "./styles/globalStyles";


const Home = () => {
  const [rides, setRides] = useState();

  const fetchRides = useCallback (async () => {
    try {
      const res = await axios.get(`http://fast-rider.herokuapp.com/api/v1/rides?token=${process.env.REACT_APP_FAST_RIDER_API_KEY}`);

      if(res && res.data) {
        setRides(res.data);
      }
    }
    catch (e) {

    }
  }, []);

  useEffect(() => {
    fetchRides();
  }, [fetchRides]);

  return (
    <div>
      <AppTitle> The Jungle™ FastRider Service </AppTitle>
      <div><IconsPanel/></div>
      <StyledDiv display='flex' justifycontent='center'>
        <RidesContainer>{rides?.map((ride) => <CardRide rideDetails={ride} key={ride.id}/>)}</RidesContainer>
      </StyledDiv>
    </div>
  );
}

export default Home;
