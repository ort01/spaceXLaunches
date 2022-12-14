import "./showFavourites.css"
import { useContext } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useQuery } from 'urql';
import FavouritesContext from './FavoritesContext';
import { Launch } from '../../gql/graphql';
import Loading from '../Loading';
import RocketLaunchCard from '../LaunchCard';
import { spaceXLaunchesMain } from "../../Query/spaceXQuery";



function renderFavourites(data: any, arrayOfFavourites: string[]) {
    if (arrayOfFavourites.length === 0) {
        return <h2>No Favourites Found</h2>
    } else {
        return data?.launchesPast?.map((eachLaunch: Launch) => {
            if (eachLaunch.id && arrayOfFavourites.includes(eachLaunch.id)) {
                return (
                    <RocketLaunchCard
                        missionName={eachLaunch.mission_name}
                        key={eachLaunch.id}
                        id={eachLaunch.id}
                        launchDate={eachLaunch.launch_date_local}
                        launchSite={eachLaunch.launch_site?.site_name_long}
                    />
                )
            }
        })
    }
}


export default function ShowFavourites(props: any) {

    const [arrayOfFavourites, toggleFavourite] = useContext(FavouritesContext)
    const [result] = useQuery({
        query: spaceXLaunchesMain,
    });

    const { data, fetching, error } = result;

    if (fetching) return <Loading />
    if (error) return <pre>{error.message}</pre>

    return (
        <div className="show-favourites">
            <div className="body">
                {renderFavourites(data, arrayOfFavourites)}
            </div>
        </div>
    )
}