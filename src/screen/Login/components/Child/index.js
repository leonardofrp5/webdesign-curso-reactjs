import React, { Component } from 'react';

class Child extends Component {
  state = {
    NumeroHijo: 3
  }

  handleHijo = () => {
    const { handlePadre } = this.props;
    const { NumeroHijo } = this.state;
      handlePadre(NumeroHijo);
  }

  render() {
    return <button type="button" onClick={this.handleHijo}>Child</button>
  }
}

export default Child;
