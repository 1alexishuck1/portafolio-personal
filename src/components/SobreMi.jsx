import React from 'react';
import imgProg from '../assets/img-perfil.jpg';

import './styles/SobreMi.css';

const SobreMi = () => {
    return ( 
        <div className="sobreMi">
            <div className="container-sobremi">
                <div className="container-titulo-sobrResponsive">
                    <h1>Sobre Mí</h1>
                </div>
                <div className="sobremi-img">
                    <img src={imgProg} alt="" />
                </div>
                <div className="sobremi-texto">
                    <div className="container-titulo-sobr">
                        <h1>Sobre Mí</h1>
                    </div>

                    <p>  Me llamo <i className="fa-solid fa-bracket-curly"> <b>Alexis Huck</b></i>, tengo 22 años y soy de Urdinarrain - Entre Ríos. Actualmente residente en Concepción del Uruguay - Entre Ríos.</p>
                        <br />
                    <p><i className="fa-solid fa-bracket-curly"><b>Analista en sistemas</b></i>, recibido el 2 de marzo de 2022, de la <i className="fa-solid fa-bracket-curly"><b>Universidad Autónoma de Entre Ríos</b></i>.</p>
                        <br />
                    <p>Actualmente estudiante de 4to año de la carrera <i className="fa-solid fa-bracket-curly"><b>"Licenciatura en Sistemas de Información"</b></i> de la Universidad Autónoma de Entre Ríos.</p>
                        <br />
                    <p>Conocimientos sobre HTML, CSS (incluido Responsive Design), JS, REACT, Adobe XD y Figma.
                            Conocimientos básicos sobre FireBase.</p>

                    <div className="container-btn-CVL">
                        <button>Descargar CV</button>
                        <button>
                            <a href="https://www.linkedin.com/in/alexis-huck-a3474b182/">Linkedin</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default SobreMi;