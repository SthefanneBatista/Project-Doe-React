import React from 'react';

import 'bootswatch/dist/minty/bootstrap.min.css';
import Doe from '../Header/blood.png';
import '../style.css';


const Header = () =>

<header>
    <div className="container">
      <div className="row">
        <div className="col-md-6 d-flex caixa">
          <div className="align-self-center">
            <h1 className=" textHeader">Doe sangue, doe vida</h1>
                    <button type="button" className="btn btn-lg colorStyle">Cadastre-se</button>
          </div>
        </div>
        <div className="col-md-6 d-none d-md-block">
          <img src={Doe} width="520" alt="Logo doe"/> 
        </div>
      </div>
    </div>
    </header>;

export default Header;