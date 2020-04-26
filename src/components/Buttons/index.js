import React from 'react';
import './style.css';

function Button({value, handleOnClickLogon}) {
  return(
    <button className="btn-login" type="button" onClick={handleOnClickLogon}>{value}</button>
  );
}

export default Button;
