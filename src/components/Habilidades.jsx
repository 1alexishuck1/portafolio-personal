import React from 'react';
import css3 from '../assets/css3.png';
import figma from '../assets/figma.png';
import github from '../assets/github.png';
import html from '../assets/html.png';
import javascript from '../assets/javascript-logo.png';
import python from '../assets/python.png';
import xd from '../assets/xd.png';
import react from '../assets/react.png';

import './styles/Habilidad.css'

const Habilidades = () => {

    return (  
        <div className="habilidades">
            <div className="container-titulo-hab">
                <h1>Habilidades</h1>
            </div>
            <div className="container-card-hab">
                <div className="card-hab">
                    <img src={css3} alt="" />
                </div>
                <div className="card-hab">
                    <img src={figma} alt="" />
                </div>
                <div className="card-hab">
                    <img src={github} alt="" />
                </div>
                <div className="card-hab">
                    <img src={html} alt="" />
                </div>
                <div className="card-hab">
                    <img src={javascript} alt="" />
                </div>
                <div className="card-hab">
                    <img src={python} alt="" />
                </div>
                <div className="card-hab">
                    <img src={xd} alt="" />
                </div>
                <div className="card-hab">
                    <img src={react} alt="" />
                </div>
            </div>
        </div>
    );
}
 
export default Habilidades;