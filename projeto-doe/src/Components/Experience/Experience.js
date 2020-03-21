import React from 'react';

import 'bootswatch/dist/minty/bootstrap.min.css';
import Avatar1 from '../Experience/avatarMulher.png';
import Avatar2 from '../Experience/avatarHomem.png';
import Avatar3 from '../Experience/avatarMulherOculos.png';
import '../style.css';



const Experience = () =>

    <section>
        <div className="caixaSection" align="center">
        <h1>Depoimentos</h1>

            <div className="row caixaSection">

            <div className="col-md-4 d-flex">
                    <div>
                        <img src={Avatar1} width="120px" alt="Logo doe" />
                        <div >
                    <h3>Ana</h3>
                    
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et finibus metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                        </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 d-flex">
                    <div>
                        <img src={Avatar2} width="120px" alt="Logo doe" />
                        <div className="Text">
                    <h3>Carlos</h3>
                    
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et finibus metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                        </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 d-flex">
                    <div>
                        <img src={Avatar3} width="120px" alt="Logo doe" />
                        <div className="Text">
                    <h3>Felipa</h3>
                    
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et finibus metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

       
    </section>;

export default Experience;