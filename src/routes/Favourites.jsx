import { useState } from "react";
import DentistFavCard from "../components/DentistFavCard";

function Favourites(){

    const [favourites, setFavourites] = useState(
        JSON.parse(localStorage.getItem('favourites') || '[]') 
    );


    const removeFromFavourites = (dentist) => {
        const newFavourites = favourites.filter((fav) => fav.id !== dentist.id);
        setFavourites(newFavourites);
        localStorage.setItem('favourites', JSON.stringify(newFavourites));
    }


    return(
        <div>
            <div className="dentist-cards-container">
                {favourites.map( (favourite)  =>
                (
                    <div key={favourite.id} >
                        <DentistFavCard dentist={favourite} onClick={ () => removeFromFavourites(favourite)}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Favourites;