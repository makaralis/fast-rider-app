import { StyledCard } from "../styles/bookedCard";
import { StyledDiv } from "../styles/globalStyles";
import { useRecoilValue } from "recoil";
import { selectedRideAtom } from "../recoil/selected-ride/atoms";
import moment from "moment";

const BookedCard = ({accessCode}) => {
    const selectedRideState = useRecoilValue(selectedRideAtom);

    return <StyledCard bordercolor={selectedRideState.zone.color}>
        <StyledDiv display='flex' flexdirection='row' justifycontent='space-between' fontsize='14px'>
            <StyledDiv color="#fff">{selectedRideState.name}</StyledDiv>
            <StyledDiv>{selectedRideState.zone.name}</StyledDiv>
        </StyledDiv>
        <StyledDiv display='flex' flexdirection='column' justifycontent='center' alignitems='center'>
            <StyledDiv padding='15px 0 0 0' fontsize='14px'>Return At</StyledDiv>
            <StyledDiv color="#fff">{moment(selectedRideState.return_time).format('HH:mm')}</StyledDiv>
        </StyledDiv>
        <StyledDiv display='flex' flexdirection='column' justifycontent='center' alignitems='center'>
            <StyledDiv padding='8px 0 0 0' fontsize='14px'>Use Access Code</StyledDiv>
            <StyledDiv color="#fff">{accessCode}</StyledDiv>
        </StyledDiv>
       
    </StyledCard>
}


export default BookedCard;