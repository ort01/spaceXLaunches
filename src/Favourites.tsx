import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useContext } from 'react';
import FavouritesContext from './FavoritesContext';

export default function Favourites (props:any) {

    const [ arrayOfFavourites, toggleFavourite ] = useContext(FavouritesContext)

    return(
        <i onClick={() => toggleFavourite(props.lauchId)}>{arrayOfFavourites.includes(props.lauchId)  ? <StarIcon sx={{color: "#ffdf76", fontSize: 30}}/> : <StarBorderIcon sx={{fontSize: 30}}/> }</i>
    )
}

