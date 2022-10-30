import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {
    useParams,
    useNavigate
} from "react-router-dom";
import { useQuery } from "urql";
import { Launch } from './gql/graphql';
import { spaceXLaunchesDetails } from "./spaceXQuery";
import YoutubeEmbed from './iFrame';
import Favourites from "./Favourites"
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';


export default function LaunchDetails(props: any) {

    let { id } = useParams()
    const navigate = useNavigate()
    const [result] = useQuery({
        query: spaceXLaunchesDetails,
        variables: { id: id }
    });

    const { data, fetching, error } = result;

    if (fetching) return <p>Loading...</p>
    if (error) return <pre>{error.message}</pre>

    const launch: Launch = data.launch
    const videoID = launch.links?.video_link?.substring(16)
    const [payloads] = launch.rocket?.second_stage?.payloads
    const { payload_type, manufacturer, customers } = payloads
    const images = launch.links?.flickr_images
    const { name, home_port, image } = launch.ships?.[0] || {}
    const [date, time] = launch.launch_date_local.split("T")


    return (
        <div className="details">
            <KeyboardBackspaceIcon onClick={() => { navigate("/") }} className='back' sx={{ fontSize: 35 }} />
            <div className="star">
                <Favourites lauchId={id} />
            </div>
            <div className="heading">
                <h1>{launch.mission_name}</h1>
                <h3><CalendarMonthIcon /> {date} <br /> {time}</h3>
                <h3><LocationOnIcon /> {launch.launch_site?.site_name_long}</h3>
            </div>
            <div className="top-container">
                {videoID != undefined &&
                    <YoutubeEmbed embedId={videoID} />
                }
                <p className='text'>{launch.details}</p>
            </div>
            <div className='middle-container'>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Rocket Name</th>
                                <th>Rocket Type</th>
                                <th>Payload Type</th>
                                <th>Manufacturer</th>
                                <th>Customer</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ fontStyle: "italic" }}>
                                <td>{launch.rocket?.rocket_name}</td>
                                <td>{launch.rocket?.rocket_type}</td>
                                <td>{payload_type}</td>
                                <td>{manufacturer}</td>
                                <td>{customers[0]}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='images'>
                    {images?.slice(0, 8).map((img) => {
                        return <img src={img} alt="spaceX_img" />
                    })}
                </div>
            </div>
            <div className='ships-text'>
                <p>SpaceX charters a fleet of marine vessels to support their offshore recovery program. All vessels are highly specialized for their roles, whether it be landing Falcon 9 rockets, recovering payload fairings, or retrieving astronauts after their Dragon capsule lands in the ocean after a trip to space.</p>
            </div>
            {
                (launch.ships?.length || 0) > 0 &&
                <div className='lower-container'>

                    <table>
                        <tbody>
                            <tr>
                                <td>Name of the ship: </td>
                                <td style={{ fontStyle: "italic", textAlign: 'left', fontSize: 30 }}>{name}</td>
                            </tr>
                            <tr>
                                <td>Home port of the ship: </td>
                                <td style={{ fontStyle: "italic", textAlign: 'left', fontSize: 30 }}>{home_port}</td>
                            </tr>
                        </tbody>
                    </table>
                    <img src={image} alt="spaceX_ship" />
                </div>
            }

            <div className='article-link'>
                {launch.links?.article_link != undefined &&
                    <a href={launch.links?.article_link}>READ MORE...</a>
                }
            </div>
        </div>
    )
}

