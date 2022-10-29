import React, { useState } from "react"
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

export default function Favourites (props:any) {

    const arrayOfFavourites = props.favourites

    return(
        <div>
            {/* {arrayOfFavourites.filter() } */}
            <i onClick={() => props.toggle(props.lauchId)}>{arrayOfFavourites.includes(props.lauchId)  ? <StarIcon sx={{color: "#ffdf76"}}/> : <StarBorderIcon/> }</i>
        </div>
    )
}
