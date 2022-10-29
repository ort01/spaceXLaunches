import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { Link, useNavigate } from "react-router-dom";
import StarBorderIcon from '@mui/icons-material/StarBorder';

export default function Header() {

    const navigate = useNavigate()
    return (
        <div className="header">
            <h1 onClick={()=>{navigate("/")}}> SpaceX Launch <RocketLaunchIcon sx={{fontSize: 40}}/></h1>
            <StarBorderIcon className='show-favourites' sx={{fontSize: 35}}/>
        </div>
    )
}

