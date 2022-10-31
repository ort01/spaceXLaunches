import { useNavigate } from "react-router-dom";

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Grid3x3Icon from '@mui/icons-material/Grid3x3';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FunctionalityOfFavourite from "./FunctionalityOfFavourite";


function RocketLaunchCard(props: any) {

    const navigate = useNavigate()
    const [date, time] = props.launchDate.split("T")

    return (
        <div className="launchCard">
            <div className="launchCard-text" onClick={() => { navigate("/" + props.id) }}>
                <h1>{props.missionName}</h1>
                <p><Grid3x3Icon />  {props.id}</p>
                <p><CalendarMonthIcon /><br />{date}<br/>{time}</p>
                <p><LocationOnIcon /><br />{props.launchSite}</p>
            </div>
            <div className="launchCard-star">
                <FunctionalityOfFavourite lauchId={props.id} />
            </div>
        </div>
    )
}

export default RocketLaunchCard

// // First route will be displaying last SpaceX rocket launches in home screen (at least
// 10).
// Launches will be displayed as Cards
// Each Card will hold some basic information about the launch (id, mission name,
// launch date, site, and other ...)