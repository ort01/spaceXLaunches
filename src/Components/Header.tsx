import "./header.css"

import { useNavigate } from "react-router-dom";

import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import StarIcon from '@mui/icons-material/Star';
import Button from '@mui/material/Button';
import { useState } from "react";


export default function Header() {

    const [buttonState, setButtonState] = useState(false)

    function expand () {
        return setButtonState(true) 
    }
    function shrink () {
        return setButtonState(false) 
    }

    const navigate = useNavigate()
    return (
        <div className="header">
            <h1 onClick={()=>{navigate("/")}}> SpaceX Launches Cards <RocketLaunchIcon /></h1>
            <Button onMouseOver={expand} onMouseOut={shrink} variant="outlined" href="/favourites" className='show-favourites-button'>{buttonState ? <div><StarIcon sx={{fontSize: 15}}/> Show Favourites</div> : "Show Favourites" }</Button>
        </div>
    )
}

