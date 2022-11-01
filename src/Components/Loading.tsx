import "./loading.css"
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

export default function Loading () {
    return (
        <div className="loading">
            <RocketLaunchIcon className='icon' sx={{fontSize: 50}}/>
            <p>Loading...</p>
        </div>
    )
}
