import "./home.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useQuery } from 'urql';
import { Launch } from '../gql/graphql';
import { spaceXLaunchesMain } from "../Query/spaceXQuery";
import Loading from './Loading';
import RocketLaunchCard from "./LaunchCard";
import Slider from "react-slick";


export default function Home(props: any) {
  const [result] = useQuery({
    query: spaceXLaunchesMain,
  });

  const { data, fetching, error } = result;

  if (fetching) return <Loading />
  if (error) return <pre>{error.message}</pre>


  function getCard() {
    return data?.launchesPast?.map((eachLaunch) => {
      return (
        eachLaunch && <div className="home">
          <div className="body">
            <RocketLaunchCard
              missionName={eachLaunch.mission_name}
              key={eachLaunch.id}
              id={eachLaunch.id}
              launchDate={eachLaunch.launch_date_local}
              launchSite={eachLaunch.launch_site?.site_name_long}
              launchSuccess={eachLaunch.launch_success}
            />
          </div>
        </div>
      )
    })
  }

  var sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: screen.width > screen.height ? 3 : 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true
  };

  return (
    <Slider {...sliderSettings} className="home-slider">
      {getCard()}
    </Slider>
  );
}
