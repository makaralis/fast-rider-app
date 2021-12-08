import { StyledCard } from "../styles/bookedCard";
import { StyledDiv } from "../styles/globalStyles";
import moment from "moment";

const BookedCard = ({rideDetails}) => ( <StyledCard bordercolor={rideDetails?.zone?.color}>
        <StyledDiv display='flex' flexdirection='row' justifycontent='space-between' fontsize='14px'>
            <StyledDiv color="#fff">{rideDetails?.ride?.name}</StyledDiv>
            <StyledDiv>{rideDetails?.ride?.zone?.name}</StyledDiv>
        </StyledDiv>
        <StyledDiv display='flex' flexdirection='column' justifycontent='center' alignitems='center'>
            <StyledDiv padding='15px 0 0 0' fontsize='14px'>Return At</StyledDiv>
            <StyledDiv color="#fff">{moment(rideDetails?.return_time).format('HH:mm')}</StyledDiv>
        </StyledDiv>
        <StyledDiv display='flex' flexdirection='column' justifycontent='center' alignitems='center'>
            <StyledDiv padding='8px 0 0 0' fontsize='14px'>Use Access Code</StyledDiv>
            <StyledDiv color="#fff">{rideDetails?.access_code}</StyledDiv>
        </StyledDiv>
    </StyledCard>
)


export default BookedCard;