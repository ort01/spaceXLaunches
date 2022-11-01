import "./launchCard.css"
import { useNavigate } from "react-router-dom";

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Grid3x3Icon from '@mui/icons-material/Grid3x3';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FunctionalityOfFavourite from "./FavouriteLaunches/FunctionalityOfFavourite";
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';


function RocketLaunchCard(props: any) {

    const navigate = useNavigate()
    const [date, time] = props.launchDate.split("T")

    return (
        <div className="launchCard">
            <div className="text" onClick={() => { navigate("/" + props.id) }}>
                <h1>{props.missionName}</h1>
                <p><Grid3x3Icon sx={{ color: "#76c6ff" }} /> <br /> {props.id}</p>
                <p><CalendarMonthIcon sx={{ color: "#76c6ff" }} /> <br /> {date}</p>
                <p><AccessTimeFilledIcon sx={{ color: "#76c6ff" }} /> <br /> {time}</p>
                <p><LocationOnIcon sx={{ color: "#76c6ff" }} /> <br /> {props.launchSite}</p>
            </div>
            <div className="star">
                <FunctionalityOfFavourite lauchId={props.id} />
            </div>
        </div>
    )
}

export default RocketLaunchCard
