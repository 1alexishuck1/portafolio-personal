import React from 'react';
import './styles/Proyectos.css';

import proyML from '../assets/proyecto-ML.png';
import proyCentroMedico from '../assets/proyecto-CentroMedico.png';
import proyPeliculas from '../assets/proyecto-Películas.png';

const Proyectos = () => {
    return (  
        <div className="proyectos">
            <div className="container-titulo-proy">
                    <h1>Proyectos</h1>
                </div>
            <div className="container-proyectos-card">
                
                <div className="card-proy">
                    <div className="card-descripcion">
                        <h2>API Mercado Libre</h2>
                        <div className="card-img">
                            <img src={proyML} alt="" />
                        </div>
                        <div className="contariner-btn">
                            <div className="descripcion-btn">
                                <a href="https://github.com/1alexishuck1/Proyecto-final-API-ML">GitHub</a>
                            </div>
                            <div className="descripcion-btn">
                                <a href="https://mercadolibre-api-alexishuck.netlify.app/">Web</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card-proy">
                    <div className="card-descripcion">
                        <h2>Taller Integrador Final</h2>
                        <div className="card-img">
                            <img src={proyCentroMedico} alt="" />
                        </div>
                        <div className="contariner-btn">
                            <div className="descripcion-btn">
                                <a href="https://github.com/1alexishuck1/MedicalCenter-Terminado">GitHub</a>
                            </div>    
                        </div>
                    </div>
                </div>

                <div className="card-proy">
                    <div className="card-descripcion">
                        <h2>API TMDB</h2>
                        <div className="card-img">
                            <img src={proyPeliculas} alt="" />
                        </div>
                        <div className="contariner-btn">
                            <div className="descripcion-btn">
                                <a href="https://github.com/1alexishuck1/SPA-pelicula-vanilla">GitHub</a>
                            </div>
                            <div className="descripcion-btn">
                                <a href="https://1alexishuck1.github.io/SPA-pelicula-vanilla/">Web</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Proyectos;