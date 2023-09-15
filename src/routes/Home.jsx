import "../styles/Home.css"
import { useEffect, useState } from "react";
import DentistHomeCard from "../components/DentistHomeCard";

function Home() {

    const [dentists, setDentists] = useState([]);
    const [loading, setLoading] = useState(false);
    const [favourites, setFavourites] = useState(
        JSON.parse(localStorage.getItem('favourites') || '[]')
    );





    async function handleFetch() {
        setLoading(true)
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setDentists(data)
        console.log(data);
        setLoading(false)
    }

    useEffect(() => {
        handleFetch();
    }, [])


    const addToFavourites = (dentist) => {
        if (favourites.some((fav) => fav.id === dentist.id)) {
            // Dentista ya está en favoritos
            return;
        }
        const newFavourites = [...favourites, dentist];
        setFavourites(newFavourites);
        localStorage.setItem('favourites', JSON.stringify(newFavourites));
    }


    return (
        <div >
            {loading ? 'Cargando' : null}
            <div className="dentist-cards-container">
                {dentists.map((dentist) =>
                (
                    <div key={dentist.id} >
                        <DentistHomeCard dentist={dentist} onClick={() => addToFavourites(dentist)} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home;