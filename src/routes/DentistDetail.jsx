import '../styles/DentistDetail.css';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DentistDetail() {

    const params = useParams();
    const [dentist, setDentist] = useState({});

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
            const data = await response.json();
            console.log(data);
            setDentist(data)
        }
        fetchData();
    }, [])

    return (
        <div className="dentist-detail-card">
            <h3 className="dentist-name">{dentist.name}</h3>
            <p className="dentist-username">{dentist.username}</p>
            <p className="dentist-details">Email: {dentist.email}</p>
            <p className="dentist-details">Telefono: {dentist.phone}</p>
            <p className="dentist-details">Website: {dentist.website}</p>
            <div className="dentist-image-container">
                <img
                    className="dentist-image"
                    src="../public/dentist.jpg"
                    alt='imagen dentista'
                />
            </div>

            <br />
            {/* <button className="favorite-button">Favorite</button> */}
        </div>
    )
}

export default DentistDetail;

// Donde mostrarán en detalle la información de cada dentista (nombre, email, teléfono, website).
// Cada card renderizada en la ruta /home debe ser un link hacia esta dirección.