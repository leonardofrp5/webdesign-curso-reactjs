import React, { Component } from 'react';
// import { ReactComponent as UsuarioLogin } from '../../assets/usuario.svg';

// import { INPUT_LOGIN } from './constants';
import './style.css';

class Login extends Component {
  state = {
    count: 0
  }

  handleOnClickPlus = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 })
  }

  handleOnClickLess = () => {
    const { count } = this.state;
    this.setState({ count: count - 1 })
  }

  renderItem = (item) => {
    return (
      <div key={item.name} className="content-input">
        <label className="text-label">{item.label}:</label>
        <input type={item.type} name={item.name} className="decoration-input"/>
      </div>
    );
  };

  render() {
    const { count } = this.state;
    return (
      // <div className="from-container">
      //   <UsuarioLogin className="image-login"/>
      //   <form>
      //   {INPUT_LOGIN.map(this.renderItem)}
      //     <input type="submit" value="Ingresar"  className="btn-login"/>
      //   </form>
      // </div>
      <div className="from-container">
        <button type="button" className="btn-login" onClick={this.handleOnClickPlus}>Sumar</button>
        <span className="count">{count}</span>
        <button type="button" className="btn-login" onClick={this.handleOnClickLess}>Restar</button>
      </div>
    )
  }
}

// function Login() {

//   const renderItem = (item) => {
//     return (
//       <div key={item.name} className="content-input">
//         <label className="text-label">{item.label}:</label>
//         <input type={item.type} name={item.name} className="decoration-input"/>
//       </div>
//     );
//   };

//   return (
//     <div className="from-container">
//       <UsuarioLogin className="image-login"/>
//       <form>
//       {INPUT_LOGIN.map(renderItem)}
//         <input type="submit" value="Ingresar"  className="btn-login"/>
//       </form>
//     </div>
//   )
// }

export default Login
