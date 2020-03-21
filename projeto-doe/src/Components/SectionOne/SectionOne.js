import React from 'react';

import ImgSection from '../SectionOne/bloodSection.png'
import 'bootswatch/dist/minty/bootstrap.min.css';
import '../Header/style.css';

const SectionOne = () =>

    <section className="caixaSectionOne">
        <div className="containerSectionOne">
            <div className="row">
            <div className="col-md-6">
                    <img src={ImgSection} width="400px" alt="image of section" className="ImgS" />
                </div>
                <div className="col-md-6 d-flex">
                    <div className="align-self-center">
                        <p className="textSection">
                        A doação de sangue é um gesto solidário de doar uma pequena quantidade do próprio sangue para salvar a vida de pessoas que se submetem a tratamentos e intervenções médicas de grande porte e complexidade, como transfusões, transplantes, procedimentos oncológicos e cirurgias.</p>
                        <a href="" className="btn bt-section">Veja mais</a>
                    </div>
                </div>
            </div>
        </div>


    </section>


export default SectionOne;