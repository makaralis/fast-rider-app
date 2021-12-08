import { useState, useEffect, useCallback, useRef } from "react";
import IconsPanel from "./components/IconsPanel";
import { AppTitle, RidesContainer, InputContainer, StyledInput, StyledButton, StyledMobileButton } from "./styles/homePage";
import axios from "axios";
import RideCard from "./components/RideCard";
import BookedCard from "./components/BookedCard";
import { StyledDiv } from "./styles/globalStyles";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useRecoilState } from "recoil";
import { selectedRideAtom } from "./recoil/selected-ride/atoms";
import { enteredPinAtom } from "./recoil/entered-pin/atoms";
import { checkIsPinValid, inTime } from "./utils";
import IconContainer from "./components/IconContainer";


const Home = () => {
  const ref = useRef();
  const [rides, setRides] = useState();
  const [loading, setLoading] = useState(true);
  const [successfulBooking, setSuccessfulBooking] = useState(false);
  const [bookedRideDetails, setBookedRideDetails] = useState();
  const [offset, setOffset] = useState(0);
  const [scrolledDown, setScrolledDown] = useState(false);
  const [selectedRideState, setSelectedRideState] = useRecoilState(selectedRideAtom);
  const [enteredPin, setEnteredPin] = useRecoilState(enteredPinAtom);
  const scrollVal = ref?.current?.clientHeight - (window.innerHeight + offset);
  const bodyFormData = new FormData();
 
  const fetchRides = useCallback (async () => {
    try {
      const res = await axios.get(`https://fast-rider.herokuapp.com/api/v1/rides?token=${process.env.REACT_APP_FAST_RIDER_API_KEY}`);

      if(res && res.data) {
        setRides(res.data);
        setLoading(false);
      }
    }
    catch (e) {
      toast.error("Error while fetching the rides", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      setLoading(false);
    }
  }, []);

  const handleSubmit = async() => {
    bodyFormData.append('pin',enteredPin);
    bodyFormData.append('ride_id',selectedRideState.id);
    bodyFormData.append('token',process.env.REACT_APP_FAST_RIDER_API_KEY);

    // validation for a currect pin
    if (!(checkIsPinValid(enteredPin))) {
      toast.error("Please enter a valid pin", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });

      return;
    }

    // validation for availability of remaining tickets for the selected ride
    if (selectedRideState.remaining_tickets === 0) {
      toast.error("You can't book a ride with no available tickets for it", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });

      return;
    }

    // validation for the opening hours
    if (!(inTime())) {
      toast.error("You can't book a ride when a park is closed. Please book the tickets between 09:00-19:00", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });

      return;
    }

    try {
      const res = await axios({
        method: "post",
        url: "https://fast-rider.herokuapp.com/api/v1/tickets",
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      })

      if (res && res.data) {
        setBookedRideDetails(res.data);
        setSuccessfulBooking(true);
        setSelectedRideState(null);
      }
    }
    catch (e) {
      toast.error("Only one FastRider ticket can be held at any given time. Please wait until your return time and try again",{
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  }

  useEffect(() => {
    fetchRides();
  }, [fetchRides]);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);

      if (scrollVal > -100 && scrollVal < 100) {
        setScrolledDown(true);
      }
      else {
        setScrolledDown(false);
      }
    }
  }, [scrollVal]);

  return (
    <div ref={ref}>
      <AppTitle> The Jungle™ FastRider Service </AppTitle>
      {successfulBooking ? 
      <StyledDiv display='flex' flexdirection='column' alignitems='center'>
          <IconContainer iconPath="./done.png" description='Thank you for using The Jungle™ FastRider ticket system - your access code is now ready!'/>
          <BookedCard rideDetails={bookedRideDetails}/>
      </StyledDiv> : 
      <>
        <div><IconsPanel/></div>
        <StyledDiv display='flex' justifycontent='center'>
          {loading ? <StyledDiv color="#fff" fontsize="20px" textalign='center' padding='20px 0 0 0'>Loading the rides...</StyledDiv> :
          <StyledDiv display='flex' justifycontent='center' flexdirection='column' alignitems='center'>
            <InputContainer>
              <StyledInput type="text" placeholder="#PIN" value={enteredPin} onChange={(e) => {setEnteredPin(e.target.value)}}/>
              <StyledButton onClick={handleSubmit} disabled={enteredPin === '' || !selectedRideState}><StyledDiv fontsize='18px'>SUBMIT</StyledDiv></StyledButton>
            </InputContainer>
              <RidesContainer>{rides?.map((ride) => <RideCard rideDetails={ride} key={ride.id}/>)}</RidesContainer>
              <StyledMobileButton scrolleddown={scrolledDown} onClick={handleSubmit} disabled={enteredPin === '' || !selectedRideState}><StyledDiv fontsize={scrolledDown ? '18px' : '24px'}>SUBMIT</StyledDiv></StyledMobileButton>
          </StyledDiv>}
          <ToastContainer/>
        </StyledDiv>
      </>}
    </div>
  );
}

export default Home;
