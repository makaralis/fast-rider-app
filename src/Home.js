import { useState, useEffect, useCallback } from "react";
import IconsPanel from "./components/IconsPanel";
import { AppTitle, RidesContainer, InputContainer, StyledInput, StyledButton} from "./styles/homePage";
import axios from "axios";
import RideCard from "./components/RideCard";
import BookedCard from "./components/BookedCard";
import { StyledDiv } from "./styles/globalStyles";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";
import { selectedRideAtom } from "./recoil/selected-ride/atoms";
import { enteredPinAtom } from "./recoil/entered-pin/atoms";


const Home = () => {
  const [rides, setRides] = useState();
  const [loading, setLoading] = useState(true);
  const [successfulBooking, setSuccessfulBooking] = useState(false);
  const [accessCode, setAccessCode] = useState('');
  const [selectedRideState, setSelectedRideState] = useRecoilState(selectedRideAtom);
  const [enteredPin, setEnteredPin] = useRecoilState(enteredPinAtom);
  const bodyFormData = new FormData();


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

  const handleSubmit = async() => {
    bodyFormData.append('pin',enteredPin);
    bodyFormData.append('ride_id',selectedRideState.id);
    bodyFormData.append('token',process.env.REACT_APP_FAST_RIDER_API_KEY);

    try {
      const res = await axios({
        method: "post",
        url: "http://fast-rider.herokuapp.com/api/v1/tickets",
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      })

      if (res && res.data) {
        setSuccessfulBooking(true);
        setAccessCode(res.data.access_code);
      }
    }
    catch (e) {
      toast.error("Error submitting the ride");
    }
  }

  useEffect(() => {
    fetchRides();
  }, [fetchRides]);

  return (
    <div>
      <AppTitle> The Jungle™ FastRider Service </AppTitle>
      <div><IconsPanel/></div>
      <StyledDiv display='flex' justifycontent='center'>
        {successfulBooking ? <BookedCard accessCode={accessCode}/> : 
        loading ? <StyledDiv color="#fff" fontsize="20px" textalign='center' padding='20px 0 0 0'>Loading the rides...</StyledDiv> :
        <StyledDiv display='flex' justifycontent='center' flexdirection='column' alignitems='center'>
          <InputContainer>
            <StyledInput type="text" placeholder="#PIN" value={enteredPin} onChange={(e) => {setEnteredPin(e.target.value)}}/>
            <StyledButton onClick={handleSubmit} disabled={enteredPin === '' || !selectedRideState}><StyledDiv fontsize='18px'>SUBMIT</StyledDiv></StyledButton>
          </InputContainer>
          <RidesContainer>{rides?.map((ride) => <RideCard rideDetails={ride} key={ride.id}/>)}</RidesContainer>
        </StyledDiv>}
      </StyledDiv>
    </div>
  );
}

export default Home;
