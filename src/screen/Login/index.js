import React from 'react';
import { ReactComponent as UsuarioLogin } from '../../assets/usuario.svg';

import { INPUT_LOGIN } from './constants';
import './style.css';

// class Login extends Component {
//   store = {}

//   renderItem = (item) => {
//     return (
//       <div key={item.name} className="content-input">
//         <label className="text-label">{item.label}:</label>
//         <input type={item.type} name={item.name} className="decoration-input"/>
//       </div>
//     );
//   };

//   render() {
//     return (
//       <div className="from-container">
//         <UsuarioLogin className="image-login"/>
//         <form>
//         {INPUT_LOGIN.map(this.renderItem)}
//           <input type="submit" value="Ingresar"  className="btn-login"/>
//         </form>
//       </div>
//     )
//   }
// }

function Login() {

  const renderItem = (item) => {
    return (
      <div key={item.name} className="content-input">
        <label className="text-label">{item.label}:</label>
        <input type={item.type} name={item.name} className="decoration-input"/>
      </div>
    );
  };

  return (
    <div className="from-container">
      <UsuarioLogin className="image-login"/>
      <form>
      {INPUT_LOGIN.map(renderItem)}
        <input type="submit" value="Ingresar"  className="btn-login"/>
      </form>
    </div>
  )
}

export default Login
