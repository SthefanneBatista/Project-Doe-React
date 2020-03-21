import React from 'react';


import FormImg from './FormSection.png'
import 'bootswatch/dist/minty/bootstrap.min.css';
import '../style.css';

const FormSection = () =>

    <section>
        <div>
            <div className="row caixaSection">
                <div className="col-md-7 d-flex form">
                    <div className="align-self-center">
                       
                        <h2>Torne-se um doador!</h2>
                        <div className="inputForm">
                    <input type="email" class="form-control" placeholder="Enter email"/>
                    </div>
                        <select className="custom-select">
                            <option selected="">Selecione o tipo sanguíneo</option>
                            <option value="1">A+</option>
                            <option value="3">A-</option>
                            <option value="3">B+</option>
                            <option value="3">B-</option>
                            <option value="2">O+</option>
                            <option value="3">O-</option>
                            <option value="3">AB-</option>
                            <option value="3">AB+</option>
                        </select>
                        <div className="buttonCadastro">
                        <button type="button" className="btn colorStyle">Cadastrar</button>
                        </div>
                    </div>
                   
                </div>
                <div className="col-md-5 d-none d-md-block colorStyle">
                    <img src={FormImg} width="450" alt="image of section" />
                </div>
            </div>
        </div>
    </section>


export default FormSection;