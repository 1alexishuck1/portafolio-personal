import React from 'react';
import './styles/Footer.css';

const Footer = () => {
    return (
        <div className="container-footer">
            <div className="item-footer">
                <div className="nombre-logo">
                    <a href="#">
                        <h2>ALEXIS HUCK</h2>
                        <h3>WEB DESIGNER</h3> <h3> & </h3> <h3> DEVELOPER</h3>
                    </a>
                </div>
            </div>
            <div className="item-footer">
                <div className="redes-sociales">
                    <h2>Redes sociales</h2>
                    <a href="https://www.instagram.com/alexishuck7/">Instagram</a>
                    <a href="https://www.linkedin.com/in/alexis-huck-a3474b182/">Linkedin</a>
                </div>
            </div>
        </div>
    );
}
 
export default Footer;