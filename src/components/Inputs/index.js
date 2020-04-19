import React from 'react';

import './style.css';

function Input(item) {
  return (
    <div key={item.name} className="content-input">
      <label className="text-label">{item.label}:</label>
      <input type={item.type} name={item.name} className="decoration-input"/>
    </div>
  );
}

export default Input;
