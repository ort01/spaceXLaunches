import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import StarIcon from '@mui/icons-material/Star';

import { useNavigate } from "react-router-dom";

export default function Header() {

    const navigate = useNavigate()
    return (
        <div className="header">
            <h1 onClick={()=>{navigate("/")}}> SpaceX Launches Cards <RocketLaunchIcon sx={{fontSize: 40}}/></h1>
            <p onClick={()=>{navigate("/favourites")}} className='show-favourites-link'><StarIcon sx={{fontSize: 15}}/> Show Favourites</p>
        </div>
    )
}

