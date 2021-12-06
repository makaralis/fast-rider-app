import { useState, useEffect, useCallback } from "react";
import IconsPanel from "./components/IconsPanel";
import { AppTitle, RidesContainer} from "./styles/homePage";
import axios from "axios";
import RideCard from "./components/RideCard";
import { StyledDiv } from "./styles/globalStyles";
import { toast } from "react-toastify";


const Home = () => {
  const [rides, setRides] = useState();
  const [loading, setLoading] = useState(true);


  const fetchRides = useCallback (async () => {
    try {
      const res = await axios.get(`http://fast-rider.herokuapp.com/api/v1/rides?token=${process.env.REACT_APP_FAST_RIDER_API_KEY}`);

      if(res && res.data) {
        setRides(res.data);
        setLoading(false);
      }
    }
    catch (e) {
      toast.error("Error while fetching the rides");
      setLoading(false);
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
        {loading ? <StyledDiv color="#fff" fontsize="20px" textalign='center' padding='20px 0 0 0'>Loading the rides...</StyledDiv> :
        <RidesContainer>{rides?.map((ride) => <RideCard rideDetails={ride} key={ride.id}/>)}</RidesContainer>}
      </StyledDiv>
    </div>
  );
}

export default Home;
