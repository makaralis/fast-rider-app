import { StyledCard } from "../styles/rideCard";
import { StyledDiv } from "../styles/globalStyles";
import moment from "moment";

const CardRide = ({rideDetails}) => {
    return <StyledCard bordercolor={rideDetails.zone.color}>
        <StyledDiv alignself='end'  fontsize='14px'>{rideDetails.zone.name}</StyledDiv>
        <StyledDiv color='#fff'  padding='15px 0' fontsize='20px'>{rideDetails.name}</StyledDiv>
        <StyledDiv display='flex' flexdirection='row' justifycontent='space-between' fontsize='14px'>
            <StyledDiv display='flex' flexdirection='row' alignitems='center' justifycontent='center'>
                <img height='20px' src={'./time.png'} alt='time'/>
                <StyledDiv paddingstart='5px'>{moment(rideDetails.return_time).format("HH:MM")}</StyledDiv>
            </StyledDiv>
            <StyledDiv display='flex' flexdirection='row' alignitems='center' justifycontent='center'>
                <img height='20px' src={'./tickets.png'} alt='tickets'/>
                <StyledDiv paddingstart='5px'>{rideDetails.remaining_tickets}</StyledDiv>
            </StyledDiv>
        </StyledDiv>
    </StyledCard>
}


export default CardRide;