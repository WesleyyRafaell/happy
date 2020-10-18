import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

import './index.css'


import LogoImg from '../../images/logo.svg';

function Landing(){
    return(
        <div id="page-landing">
            <div className="content-wrap">
                <img src={LogoImg} alt="logo happy"/>

                <main>
                    <h1>Leve felicidade para o mundo</h1>
                    <p>Visite orfanatos e mude o dia de muitas crianças.</p>
                </main>

                <div className="location">
                    <strong>São Luís</strong>
                    <span>Maranhão</span>
                </div>

                <Link to="/orphanagesmap" className="enter-app">
                    <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />
                </Link>
            </div>
        </div>
    )
}

export default Landing;