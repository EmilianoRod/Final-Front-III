import { Link } from 'react-router-dom';
import '../styles/DentistHomeCard.css'
import { useState } from 'react';

function DentistHomeCard({ dentist, onClick}) {


    
    return (
            <div className="dentist-card">
                <Link to={`/dentist/${dentist.id}`}>
                <h3 className="dentist-name">{dentist.name}</h3>
                <p className="dentist-username">{dentist.username}</p>
                <img
                    className="dentist-image"
                    src="public/dentist.jpg"
                    alt='imagen dentista'
                />
                </Link>
                <br />
        
                <button className="favorite-button"  onClick={ () => onClick?.(dentist)}>Favorite</button>

                
    
            </div>

    );
}

export default DentistHomeCard;