import "./header.css"

import { useNavigate } from "react-router-dom";

import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import StarIcon from '@mui/icons-material/Star';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useState } from "react";


export default function Header() {

    const [state, setState] = useState(true)

    function expand () {
        return setState(true) 
    }
    function shrink () {
        return setState(false) 
    }

    const navigate = useNavigate()
    return (
        <div className="header">
            <h1 onClick={()=>{navigate("/")}}> SpaceX Launches Cards <RocketLaunchIcon sx={{fontSize: 40}}/></h1>
            <Button onMouseOver={expand} onMouseOut={shrink} variant="outlined" href="/favourites" className='show-favourites-button'>{state ? <div><StarIcon sx={{fontSize: 15}}/> Show Favourites</div> : "Show Favourites" }</Button>
        </div>
    )
}

