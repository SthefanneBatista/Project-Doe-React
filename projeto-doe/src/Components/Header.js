import React from 'react';

import 'bootswatch/dist/minty/bootstrap.min.css';
import '../styleHeader.css';
import Doe from '../Components/blood.png'


const Header = () => <header>
    
    <div className="container">
      <div className="row">
        <div className="col-md-6 d-flex caixa">
          <div className="align-self-center">
            <h1 className=" textHeader">Doe sangue, doe vida</h1>
                    <button type="button" className="btn btn-lg buttonStyle">Cadastre-se</button>
          </div>
        </div>
        <div className="col-md-6 d-none d-md-block">
          <img src={Doe} width="520"/> 
        </div>
      </div>
    </div>
    
    
    
    </header>;

export default Header;