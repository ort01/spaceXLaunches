import { useQuery } from 'urql';
import { Link, useNavigate } from "react-router-dom"
 
import RocketLaunchCard from "./RocketLaunchCard";
import {spaceXLaunchesMain} from "./spaceXQuery";
import { Launch } from './gql/graphql';


 
export default function Home() {
  const [result] = useQuery({
    query: spaceXLaunchesMain,
  });

  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>
  if (error) return <pre>{error.message}</pre>
 
  
  return (
      <div className="container">
          <div className="container-body">
            {data?.launchesPast?.map((eachLaunch: Launch, index: number) => {
              return ( 
                <RocketLaunchCard
                    missionName = {eachLaunch.mission_name}
                    key= {eachLaunch.id}
                    id = {eachLaunch.id}
                    launchDate = {eachLaunch.launch_date_local}
                    launchSite = {eachLaunch.launch_site?.site_name_long}
                    launchSuccess = {eachLaunch.launch_success}
                   
                />    
              )
            })}
          </div>
      </div>
  )
}
 