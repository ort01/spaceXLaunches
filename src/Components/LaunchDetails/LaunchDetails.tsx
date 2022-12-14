import "./launchDetails.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
    useParams,
    useNavigate
} from "react-router-dom";
import { useQuery } from "urql";
import { Launch } from '../../gql/graphql';
import { spaceXLaunchesDetails } from "../../Query/spaceXQuery";
import YoutubeEmbed from './iFrame';
import FunctionalityOfFavourite from "../FavouriteLaunches/FunctionalityOfFavourite"
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Loading from '../Loading';
import Slider from "react-slick";
import { useWindowSize } from "../utils";



export default function LaunchDetails(props: any) {

    let { id } = useParams()
    if (id == undefined){
        return <div className="details">
            Invalid ID provided
        </div>
    }
    const navigate = useNavigate()
    const [result] = useQuery({
        query: spaceXLaunchesDetails,
        variables: { id: id }
    });

    const [width, height] = useWindowSize()

    const { data, fetching, error } = result;

    if (fetching) return <Loading/>
    if (error) return <pre>{error.message}</pre>

    if (data == undefined || data.launch == undefined){
        return <div className="details">
            No data returned :(
        </div>
    }

    const launch: Launch = data.launch
    const videoID = launch.links?.video_link?.substring(16)
    const payloads = launch.rocket?.second_stage?.payloads
    const images = launch.links?.flickr_images
    const { name: shipName, home_port: shipHomePort, image: shipImage } = launch.ships?.[0] || {}
    const [date, time] = launch.launch_date_local.split("T")


    function renderImages (){
        return images?.slice(0, 8).map((img) => {
            return img && <div className='launch-details-img'><img src={img} alt="spaceX_launch_img" /></div>
        })
    }
    
    var sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: width > height ? 2 : 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
      };

    return (
        <div className="details">
            <KeyboardBackspaceIcon onClick={() => { navigate("/") }} className='back' sx={{ fontSize: 35 }} />
            <div className="star">
                <FunctionalityOfFavourite lauchId={id} />
            </div>
            <div className="heading"> 
                <h1>{launch.mission_name}</h1>
                <div className='date-time'>
                    <h3><CalendarMonthIcon sx={{paddingRight: 1}}/> {date}</h3>
                    <h3><AccessTimeFilledIcon sx={{paddingRight: 1}}/> {time}</h3>
                    <h3><LocationOnIcon sx={{paddingRight: 1}}/> {launch.launch_site?.site_name_long}</h3>
                </div>
            </div>
            <div className="top-container">
                {videoID != undefined &&
                    <YoutubeEmbed embedId={videoID} />
                }
                <p className='text'>{launch.details}</p>
            </div>
            <div className='middle-container'>
                <div style={{overflowX: "auto"}}>
                    {payloads && <table>
                        <thead>
                            <tr>
                                <th>Rocket Name</th>
                                <th>Rocket Type</th>
                                {payloads && <th>Payload Type</th>}
                                {payloads && <th>Manufacturer</th>}
                                {payloads && <th>Customer</th>}
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ fontStyle: "italic" }}>
                                <td>{launch.rocket?.rocket_name}</td>
                                <td>{launch.rocket?.rocket_type}</td>
                                <td>{payloads[0]?.payload_type}</td>
                                <td>{payloads[0]?.manufacturer}</td>
                                <td>{payloads[0]?.customers && payloads[0]?.customers[0]}</td>
                            </tr>
                        </tbody>
                    </table>}
                </div>
                {(images || []).length > 0 && 
                <Slider {...sliderSettings} className="details-slider">
                    {renderImages()}
                </Slider>
                }
            </div>
                {(launch.ships || []).length > 0 &&
                <div className='ships-text'>
                <p>SpaceX charters a fleet of marine vessels to support their offshore recovery program. All vessels are highly specialized for their roles, whether it be landing Falcon 9 rockets, recovering payload fairings, or retrieving astronauts after their Dragon capsule lands in the ocean after a trip to space.</p>
                </div> }
            
            {(launch.ships?.length || 0) > 0 &&
                <div className='lower-container'>

                    <table>
                        <tbody>
                            <tr>
                                <td>Name of the ship: </td>
                                <td style={{ fontStyle: "italic", textAlign: 'left', fontSize: 30 }}>{shipName}</td>
                            </tr>
                            <tr>
                                <td>Home port of the ship: </td>
                                <td style={{ fontStyle: "italic", textAlign: 'left', fontSize: 30 }}>{shipHomePort}</td>
                            </tr>
                        </tbody>
                    </table>
                    {shipImage && <img src={shipImage} alt="spaceX_ship" />}
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

