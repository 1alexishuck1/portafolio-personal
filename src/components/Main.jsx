import React from 'react';
import './styles/Main.css';

import fondo from '../assets/fondo-main.png';

const Main = () => {
    return ( 
        <div className="container-main">
            <div className="fondo">
                <img src={fondo} alt="" />
            </div>
            <div className="main-texto">
                <h2>¡HOLA!</h2>
                <h3>Mi nombre es <i className="fa-solid fa-bracket-curly"> <b>Alexis Huck</b></i></h3>
                <h1>BIENVENIDO A MI PORTAFOLIO</h1>
            </div>
        </div>
     );
}
 
export default Main;