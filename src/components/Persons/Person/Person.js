import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
  constructor(props) {
    super(props);
      this.inputElementRef = React.createRef();
    }
  
  componentDidMount(){
    this.inputElementRef.current.focus();
  }

  render(){
    console.log('[Person.js] rendering...');
    return (
      <Fragment>
        <AuthContext.Consumer>
          {context =>
          context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p>}
        </AuthContext.Consumer>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p> {this.props.children}</p>
        <input
          ref={this.inputElementRef}
          type="text"
          onChange={this.props.changed}
          value={this.props.name} />
      </Fragment>
    );
  }
};

// PropTypes are used to get a clear message when inserting wrong value to functions
Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default Person;
