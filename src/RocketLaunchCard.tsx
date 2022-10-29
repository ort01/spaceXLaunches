import React from "react";
import { Link, useNavigate } from "react-router-dom";

import Grid3x3Icon from '@mui/icons-material/Grid3x3';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import IconButton from '@mui/material/IconButton';
import Favourites from "./Favourites";







function RocketLaunchCard (props: any) {

    const navigate = useNavigate()

    return (
        <div className="launchCard">
            <div className="launchCard-text" onClick={()=> {navigate("/" + props.id)}}>
                <h1>{props.missionName}</h1>
                <p><Grid3x3Icon/>  {props.id}</p>
                <p><CalendarMonthIcon/><br/>{props.launchDate}</p>
                <p><LocationOnIcon/><br/>{props.launchSite}</p>
            </div>
            <div className="star-icon">
                <Favourites lauchId={props.id} toggle={props.toggle} favourites={props.favourites}/>
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