import React from 'react';

import Contacto from '../components/Contacto';
import Footer from '../components/Footer';
import Habilidades from '../components/Habilidades';
import Header from '../components/Header';
import Main from '../components/Main';
import MenuHamb from '../components/MenuHamb';
import Proyectos from '../components/Proyectos';
import SobreMi from '../components/SobreMi';

const Home = () => {
    return (
        <>
            <Header />
            <MenuHamb />
            <Main />
            <SobreMi />
            <Habilidades />
            <Proyectos />
            <Contacto />
            <Footer />
        </>
    );
}
 
export default Home;