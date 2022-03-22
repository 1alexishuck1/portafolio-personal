import React, { useState } from 'react';
import { Link } from 'react-scroll';

import './styles/MenuHamb.css';
import menu from '../assets/menu.png';

const MenuHamb = () => {

    const [valMenu, setValMenu] = useState(false);

    const stylesLinks = {
        cursor: 'pointer'
    }
    

    const changeValueMenu = () => {
        setValMenu(!valMenu);
    }

    console.log(valMenu);

    return ( 
        <>
            

            <div className="container-menuHamb">
                <div className="icon-hamb">
                    <img style={stylesLinks} onClick={changeValueMenu} src={menu} alt="menu bars" />
                </div>
                {valMenu && 
                <div className="container-links">
                    <div className="links-container">
                        <div className="links">
                            <Link style={stylesLinks} onClick={changeValueMenu} to="sobreMi" spy={true} smooth={true} offset={-100} duration={500}>Sobre mi</Link>
                        </div>
                        <div className="links">
                            <Link style={stylesLinks} onClick={changeValueMenu} to="habilidades" spy={true} smooth={true} offset={-100} duration={500} >Habilidades</Link>
                        </div>
                        <div className="links">
                            <Link style={stylesLinks} onClick={changeValueMenu} to="proyectos" spy={true} smooth={true} offset={-100} duration={500} >Proyectos</Link>
                        </div>
                        <div className="links">
                            <Link style={stylesLinks} onClick={changeValueMenu} to="contacto" spy={true} smooth={true} offset={-170} duration={500} >Contacto</Link>
                        </div>
                    </div>
                </div> }
            </div>
        </>
    );
}
 
export default MenuHamb;