import React, { useState } from "react"
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

export default function Favourites (props:any) {

    const arrayOfFavourites = props.favourites

    return(
        <div>
            {/* {arrayOfFavourites.filter() } */}
            <i onClick={() => props.add(props.lauchId)}>{arrayOfFavourites.includes(props.lauchId)  ? <StarIcon/> : <StarBorderIcon/> }</i>
        </div>
    )
}
