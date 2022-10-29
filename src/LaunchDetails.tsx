import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {
    useParams
} from "react-router-dom";
import { useQuery } from "urql";
import { Launch } from './gql/graphql';
import { spaceXLaunchesDetails } from "./spaceXQuery";
import YoutubeEmbed from './iFrame';
import Favourites from "./Favourites"


export default function LaunchDetails(props: any) {
    
    let { id } = useParams()
    const [result] = useQuery({
        query: spaceXLaunchesDetails,
        variables: {id: id}
    });

    const { data, fetching, error } = result;

    if (fetching) return <p>Loading...</p>
    if (error) return <pre>{error.message}</pre>

    const launch: Launch = data.launch
    const videoID = launch.links?.video_link?.substring(16)

    return (
        <div className="details">
            <div className="details-heading">
                <h1>{launch.mission_name}</h1>
                <h3><CalendarMonthIcon/> {launch.launch_date_local}</h3>
                <h3><LocationOnIcon/> {launch.launch_site?.site_name_long}</h3>
                <Favourites lauchId={id} toggle={props.toggle} favourites={props.favourites}/>
            </div>
            <div className="details-top-container">
                {videoID != undefined &&
                    <div className='links'>
                        <YoutubeEmbed embedId={videoID} />
                    </div>
                }   
                <div className='details-string'>
                    <p>{launch.details}</p>
                </div>
            </div>
                <div className='rocket'>
                    <h2>Name of the Rocket: {launch.rocket?.rocket_name}</h2>
                    <p>Rocket type: {launch.rocket?.rocket_type}</p>
                </div>
                <div className='ships'>
                    
                </div>
        </div>
    )
}

