import { useContext } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useQuery } from 'urql';
import FavouritesContext from './FavoritesContext';
import { Launch } from './gql/graphql';
import Loading from './Loading';
import RocketLaunchCard from './RocketLaunchCard';
import { spaceXLaunchesMain } from "./spaceXQuery";

export default function ShowFavourites (props:any) {

        const [arrayOfFavourites, toggleFavourite] = useContext(FavouritesContext)
        const [result] = useQuery({
            query: spaceXLaunchesMain,
          });
        
          const { data, fetching, error } = result;
        
          if (fetching) return <Loading/>
          if (error) return <pre>{error.message}</pre>

          return (
              <div className="container">
                  <div className="container-body">
                    {arrayOfFavourites.map((id: number) => {
                      return (data?.launchesPast?.filter((eachLaunch: Launch)=> {
                        return (
                            <RocketLaunchCard
                            missionName = {id.mission_name}
                            key= {eachLaunch.id}
                            id = {eachLaunch.id}
                            launchDate = {eachLaunch.launch_date_local}
                            launchSite = {eachLaunch.launch_site?.site_name_long}
                            launchSuccess = {eachLaunch.launch_success}
                        /> 
                        )}))
                    })}
                  </div>
              </div>
          )
        }