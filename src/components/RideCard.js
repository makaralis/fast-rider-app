import { StyledCard } from "../styles/rideCard";

const CardRide = ({rideDetails}) => {
    return <StyledCard bordercolor={rideDetails.zone.color}></StyledCard>
}


export default CardRide;