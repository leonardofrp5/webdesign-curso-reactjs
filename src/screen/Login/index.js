import React, { Component } from 'react';
import { ReactComponent as UsuarioLogin } from '../../assets/usuario.svg';

import Input from '../../components/Inputs';
import Button from '../../components/Buttons';
import { INPUT_LOGIN, TEXT_BUTTON_LOGIN } from './constants';
import Child from './components/Child';
import './style.css';

// class Login extends Component {
//   state = {
//     count: 0
//   }

//   handleOnClickPlus = () => {
//     const { count } = this.state;
//     this.setState({ count: count + 1 })
//   }

//   handleOnClickLess = () => {
//     const { count } = this.state;
//     this.setState({ count: count - 1 })
//   }

//   // renderItem = (item) => {
//   //   return (
//   //     <div className="content-input">
//   //       <label className="text-label">{item.label}:</label>
//   //       <input type={item.type} name={item.name} className="decoration-input"/>
//   //     </div>
//   //   );
//   // }

//   render() {
//     const { count } = this.state;
//     return (
//       // <div className="from-container">
//       //   <UsuarioLogin className="image-login"/>
//       //   <form>
//       //   {INPUT_LOGIN.map(this.renderItem)}
//       //     <input type="submit" value="Ingresar"  className="btn-login"/>
//       //   </form>
//       // </div>
//       <div className="from-container">
//         <button type="button" className="btn-login" onClick={this.handleOnClickPlus}>Sumar</button>
//         <span className="count">{count}</span>
//         <button type="button" className="btn-login" onClick={this.handleOnClickLess}>Restar</button>
//       </div>
//     )
//   }
// }

class Login extends Component {
  state =  {
    numeroPadre: 0
  }

  handleOnClickLogon = () => {
    console.log('mensaje al dar click');
  }

  handlePadre = (NumeroHijo) => {
    this.setState({numeroPadre: NumeroHijo})
    console.log('funcion del padre');
  }

  render() {
    const { numeroPadre } = this.state;
    return (
      <div className="from-container">
        <UsuarioLogin className="image-login"/>
        <form>
        {INPUT_LOGIN.map(input => <Input item={input} key={input.name}/>)}
          <Button value={TEXT_BUTTON_LOGIN} handleOnClickLogon={this.handleOnClickLogon}/>
          <Child  handlePadre={this.handlePadre}/>
          <h1>{numeroPadre}</h1>
        </form>
      </div>
    )
  }
}

export default Login
