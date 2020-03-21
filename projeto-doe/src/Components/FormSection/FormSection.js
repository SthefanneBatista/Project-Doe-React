import React from 'react';


import FormImg from './FormSection.png'
import 'bootswatch/dist/minty/bootstrap.min.css';
import '../Header/style.css';

const FormSection = () =>

    <section className="FormSection">
        <div className="containerFormSection">
            <div className="row">
                <div className="col-md-7 d-flex form">

                    <div className="align-self-center formInput">
                        <div className="input-group mb-4">
                            <div className="input-group-prepend">
                                <span className="input-group-text colorInput">@</span>
                            </div>
                            <input type="text" className="form-control" placeholder="Digite seu email" />
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
                        <button type="button" className="btn btnStyle">Cadastrar</button>
                        </div>
                    </div>
                   
                </div>
                <div className="col-md-5 d-none d-md-block formImg">
                    <img src={FormImg} width="450" alt="image of section" className="ImgS" />
                </div>
            </div>
        </div>
    </section>


export default FormSection;