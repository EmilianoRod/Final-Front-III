import '../styles/DentistHomeCard.css'

function DentistFavCard({dentist, onClick}){

    return (
        <div className="dentist-card">
            <h3 className="dentist-name">{dentist.name}</h3>
            <p className="dentist-username">{dentist.username}</p>
            <img
                className="dentist-image"
                src="public/dentist.jpg"
                alt='imagen dentista'
            />
            <br />
            <button className="favorite-button" onClick={ () => onClick?.(dentist) }>Unfavourite</button>
        </div>

);
}

export default DentistFavCard;