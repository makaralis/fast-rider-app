import { StyledCard } from "../styles/rideCard";
import { StyledDiv } from "../styles/globalStyles";
import moment from "moment";
import { useRecoilState } from "recoil";
import { selectedRideAtom } from "../recoil/selected-ride/atoms";

const RideCard = ({rideDetails}) => {
    const [selectedRideState, setSelectedRideState] = useRecoilState(selectedRideAtom);

    return <StyledCard bordercolor={rideDetails.zone.color} onClick={() => { setSelectedRideState(rideDetails) }} backgroundcolor={rideDetails.id === selectedRideState?.id ? rideDetails.zone.color : '#373737'}>
        <StyledDiv alignself='end'  fontsize='14px'>{rideDetails.zone.name}</StyledDiv>
        <StyledDiv color='#fff'  padding='15px 0' fontsize='20px' display='flex' alignitems='center' justifycontent='center' height='50px'>{rideDetails.name}</StyledDiv>
        <StyledDiv display='flex' flexdirection='row' justifycontent='space-between' fontsize='14px'>
            <StyledDiv display='flex' flexdirection='row' alignitems='center' justifycontent='center'>
                <img height='20px' src={'./time.png'} alt='time'/>
                <StyledDiv paddingstart='5px'>{moment(rideDetails.return_time).format("HH:mm")}</StyledDiv>
            </StyledDiv>
            <StyledDiv display='flex' flexdirection='row' alignitems='center' justifycontent='center'>
                <img height='20px' src={'./tickets.png'} alt='tickets'/>
                <StyledDiv paddingstart='5px'>{rideDetails.remaining_tickets}</StyledDiv>
            </StyledDiv>
        </StyledDiv>
    </StyledCard>
}


export default RideCard;