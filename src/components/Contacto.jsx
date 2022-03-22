import React, { useState } from 'react';
import './styles/Contacto.css';
import emailjs from "@emailjs/browser";

const Contacto = () => {

    const [mensajeExito, setMensajeExito] = useState(false)

    const enviarMensaje = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_we2bgut', 'template_lbe3inm', e.target , 'user_lXjm83Of39uLExTTJEs0r')
        .then((result) => {
                console.log(result.text);
                setMensajeExito(!mensajeExito)
                e.target.reset();
                setTimeout(() =>{
                    setMensajeExito(false)
                }, 2000);
            }, (error) => {
                console.log(error.text);
            });
   
    }


    console.log(mensajeExito)

    return ( 
        <div className="contacto">
            <div className="container-titulo-cont">
                <h1>Contacto</h1>
            </div>
            <div className="container-contacto">
                <form onSubmit={enviarMensaje}>
                    <div className="contacto-item">
                        <label htmlFor="nombre">Nombre</label>
                        <input  type="text" name="nomApe" id="nombre" placeholder="Escriba su nombre" required/>
                    </div>
                    <div className="contacto-item">
                        <label htmlFor="mail">Correo electrónico</label>
                        <input  type="mail" name="userEmail" id="mail" placeholder="ejemplo@gmail.com" required/>
                    </div>
                    <div className="contacto-item">
                        <label htmlFor="mensaje">Mensaje</label>
                        <textarea  name="mensaje" id="mensaje" placeholder="Escriba su mensaje" required/>
                    </div>
                    <div className="contacto-item">
                        <input type="submit" on value="Enviar" />
                    </div>
                    <div className="contacto-item">
                        {mensajeExito &&
                            <p>Mensaje enviado con éxito.</p> }
                    </div>
                </form>
            </div>
        </div>
    );
}
 
export default Contacto;