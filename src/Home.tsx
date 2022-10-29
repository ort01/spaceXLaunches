import { useQuery } from 'urql';
import RocketLaunchCard from "./RocketLaunchCard";
import {spaceXLaunchesMain} from "./spaceXQuery";
import { Launch } from './gql/graphql';
import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";

 
export default function Home(props:any) {
  const [result] = useQuery({
    query: spaceXLaunchesMain,
  });

  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>
  if (error) return <pre>{error.message}</pre>
 
  // const breakPoints = [
  //   {width: 1, itemsToShow: 1},
  //   {width: 550, itemsToShow: 2},
  //   {width: 768, itemsToShow: 3},
  //   {width: 1200, itemsToShow: 4},
  // ]
  
  return (
      <div className="container">
          <div className="container-body">
            {/* <Carousel breakPoints={breakPoints}> */}
            {data?.launchesPast?.map((eachLaunch: Launch, index: number) => {
              return ( 
                <RocketLaunchCard
                    missionName = {eachLaunch.mission_name}
                    key= {eachLaunch.id}
                    id = {eachLaunch.id}
                    launchDate = {eachLaunch.launch_date_local}
                    launchSite = {eachLaunch.launch_site?.site_name_long}
                    launchSuccess = {eachLaunch.launch_success}
                    toggle = {props.toggle}
                    favourites= {props.favourites}
                />    
              )
            })}
            {/* </Carousel> */}
          </div>
      </div>
  )
}
 