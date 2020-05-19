import React, { Component } from 'react';
import { ReactComponent as UsuarioLogin } from '../../assets/usuario.svg';

import Input from '../../components/Inputs';
import Button from '../../components/Buttons';
import { INPUT_LOGIN, TEXT_BUTTON_LOGIN } from './constants';
import './style.css';
 
class Login extends Component {
  state = {
    countLogin: 'leonardo',
  }

  render() {
    const { countLogin } = this.state;
    return (
      <div className="from-container">
        <UsuarioLogin className="image-login"/>
        <form>
        {INPUT_LOGIN.map(input => <Input item={input} key={input.name}/>)}
          <Button value={TEXT_BUTTON_LOGIN} countLogin={countLogin}/>
        </form>
      </div>
    )
  }
}

export default Login
