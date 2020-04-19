import React from 'react';
import { ReactComponent as UsuarioLogin } from '../../assets/usuario.svg';
import Input from '../../components/Inputs';

import { INPUT_LOGIN } from './constants';
import './style.css';

// class Login extends Component {
  // state = {
  //   count: 0
  // }

  // handleOnClickPlus = () => {
  //   const { count } = this.state;
  //   this.setState({ count: count + 1 })
  // }

  // handleOnClickLess = () => {
  //   const { count } = this.state;
  //   this.setState({ count: count - 1 })
  // }

  // render() {
  //   const { count } = this.state;
  //   return (
  //     <div className="from-container">
  //       <UsuarioLogin className="image-login"/>
  //       <form>
  //       {INPUT_LOGIN.map(this.renderItem)}
  //         <input type="submit" value="Ingresar"  className="btn-login"/>
  //       </form>
  //     </div>
  //     <div className="from-container">
  //       <button type="button" className="btn-login" onClick={this.handleOnClickPlus}>Sumar</button>
  //       <span className="count">{count}</span>
  //       <button type="button" className="btn-login" onClick={this.handleOnClickLess}>Restar</button>
  //     </div>
  //   )
  // }
// }

function Login() {

  return (
    <div className="from-container">
      <UsuarioLogin className="image-login"/>
      <form>
      {INPUT_LOGIN.map(Input)}
        <input type="submit" value="Ingresar"  className="btn-login"/>
      </form>
    </div>
  )
}

export default Login
