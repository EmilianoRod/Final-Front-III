import '../styles/Contact.css';
import { useState } from "react";

function Contact() {

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [mensajeError, setMensajeError] = useState('');
    const [mensajeExito, setMensajeExito] = useState('');


    function validateEmail(email) {
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (emailRegex.test(email)){
            return true;
        }
        return false;
}

    const handleSubmit = (event) =>{
        setMensajeExito('')
        event.preventDefault();
        if(nombre.trim() === '' || email.trim() === ''){
            setMensajeError("Alguno de los campos está vacio")
        }else if(nombre.trim().length < 6){
            setMensajeError("El nombre debe tener mas de 5 caracteres")
        }else if(!validateEmail(email)){
            setMensajeError('El mail no es valido')
        }
        else{
            // props.onSubmit({nombre, email});
            setNombre('');
            setEmail('');
            setMensajeError('')
            setMensajeExito(`Gracias ${nombre}, te contactaremos cuanto antes via mail`)
        }
    }

    return (
        <div className="contacto-form">
            <h2>Contacto</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Nombre Completo:
                    <input
                        type="text"
                        value={nombre}
                        onChange={(event) => {setNombre(event.target.value)}}
                        />
                </label>
                <br/>
                <label>
                    Email:
                    <input
                        type="text"
                        value={email}
                        onChange={(event) => {setEmail(event.target.value)}}
                        />
                </label>
                <br/>
                <button type="submit">Outlined</button>
            </form>
            {mensajeError && <p className="error-message">{mensajeError}</p>}
            {mensajeExito && <p className='success-message'>{mensajeExito}</p>}
        </div>
    )
}

export default Contact;