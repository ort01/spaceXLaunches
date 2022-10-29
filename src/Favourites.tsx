import React, { useState } from "react"
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

export default function Favourites () {

    const [favourites, selectedFavourites] = useState(false)

    function mark (){
        selectedFavourites(!favourites)
    }

    return(
        <div>
            <i onClick={mark}>{favourites ? <StarIcon/> : <StarBorderIcon/> }</i>
        </div>
    )
}