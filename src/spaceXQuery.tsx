import { graphql } from '../src/gql'

const spaceXLaunchesMain = graphql(`
  query spaceXLaunchesMain{
    launchesPast(limit: 10) {
        id
        mission_name
        launch_date_local
        launch_site {
            site_name_long
        }
        launch_success
    }
  }
`)

const spaceXLaunchesDetails = graphql(`
  query spaceXLaunchesDetails ($id: ID!){
        launch(id: $id) {
            details
            id
            mission_name
            launch_date_local
            launch_site {
              site_name_long
            }
            links {
              article_link
              video_link
              flickr_images
            }
            rocket {
              rocket_name
              rocket_type
              second_stage {
                payloads {
                  payload_type
                  manufacturer
                  customers
                }
              }
            }
            ships {
              name
              home_port
              image
            }
          }
        }
`)       

export {spaceXLaunchesMain, spaceXLaunchesDetails}