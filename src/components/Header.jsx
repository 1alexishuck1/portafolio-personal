import React from 'react';
import { Link } from 'react-scroll';
import './styles/Header.css';

const Header = () => {

    const stylesLinks = {
        cursor: 'pointer'
    }

    return ( 
        <div className="container-header header">
            <div className="nombre-logo">
                <Link style={stylesLinks} to="App" spy={true} smooth={true} offset={0} duration={500}>
                    <h2>ALEXIS HUCK</h2>
                    <h3>WEB DESIGNER</h3> <h3> & </h3> <h3> DEVELOPER</h3>
                </Link>
            </div>
            <div className="links">
                <Link style={stylesLinks} to="sobreMi" spy={true} smooth={true} offset={-200} duration={500}>Sobre mi</Link>
                <Link style={stylesLinks} to="habilidades" spy={true} smooth={true} offset={-100} duration={500} >Habilidades</Link>
                <Link style={stylesLinks} to="proyectos" spy={true} smooth={true} offset={-100} duration={500} >Proyectos</Link>
                <Link style={stylesLinks} to="contacto" spy={true} smooth={true} offset={-170} duration={500} >Contacto</Link>
            </div>
        </div> 
     );
}
 
export default Header;