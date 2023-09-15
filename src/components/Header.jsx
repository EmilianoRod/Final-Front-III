import ReactSwitch from 'react-switch';
import '../styles/Header.css';
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useThemeContext } from '../context/ThemeContext';

function Header() {

    const {contextTheme, setContextTheme} = useThemeContext();
    const [checked, setChecked] = useState(false);
    const handleSwitch = (nextChecked) => {
        setContextTheme( (state) => (state === 'Light' ? 'Dark' : 'Light'))
        setChecked(nextChecked)
    }

    return (
        <header>
            <nav>
                <Link to="/home">Dentistas</Link>
                <Link to="/contacto">Contacto</Link>
                <Link to="/favs">Favoritos</Link>
                <ReactSwitch
                    checked={checked}
                    onChange={handleSwitch}
                    onColor="#86d3ff"
                    onHandleColor="#2693e6"
                    handleDiameter={30}
                    uncheckedIcon={false}
                    checkedIcon={false}
                    boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                    activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                    height={20}
                    width={48}
                    className="react-switch"
                    id="material-switch"
                />
                <h4>{contextTheme} Mode</h4>
            </nav>
        </header>
    )
}

export default Header;