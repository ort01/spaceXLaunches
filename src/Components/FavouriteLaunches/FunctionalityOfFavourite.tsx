import "./functionalityOfFavourites.css"

import { useContext } from 'react';

import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import FavouritesContext from './FavoritesContext';

export default function FunctionalityOfFavourite(props: any) {

    const [arrayOfFavourites, toggleFavourite] = useContext(FavouritesContext)

    return (
        <i onClick={() => toggleFavourite(props.lauchId)}>{arrayOfFavourites.includes(props.lauchId) ? <StarIcon className='star-icon' sx={{ fontSize: 30 }} /> : <StarBorderIcon className='star-icon-outlined' sx={{ fontSize: 30 }} />}</i>
    )
}

