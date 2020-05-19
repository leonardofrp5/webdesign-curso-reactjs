import React, { Component, Fragment } from 'react';
import './style.css';

class Button extends Component {
  state = {
    count: 1,
    error: false
  }
  

  componentDidMount() {
    const { count } = this.state;
    console.log('componentDidMount', count);
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.userName !== prevProps.userName) {
      this.fetchData(this.props.userName);
    }
    console.log(prevProps, prevState);
   }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeListener)
  }

  componentDidCath(error, info) {
    console.log(error, info);
    this.setState({ error, info });
  }

  handleOnClick = () => {
    const { count, error } = this.state;
    this.setState({count: count + 1});
    this.setState({error: !error});
  }

  render()  {
    const { value, countLogin } = this.props;
    const { error } = this.state;
      if (this.state.error) { 
        return <button className="btn-login" type="button" onClick={this.handleOnClick}>{error.toString ()}</button>
      }
      return (
        <Fragment>
          <button className="btn-login" type="button" onClick={this.handleOnClick}>{value}</button>
          Hello {countLogin}
        </Fragment>
    );
  }
}

export default Button;
