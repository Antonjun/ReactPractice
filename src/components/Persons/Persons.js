import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {


  // Evaluate the need for ShouldComponent update and wrapping
  // export in memo. IF used on multiple function components 
  // it beats the purpose of saving component rendering 

  
  shouldComponentUpdate(nextProps, nextState){
    console.log('[Persons.js] shouldComponentUpdate');
    if (nextProps.persons !== this.props.persons){
      return true;
    }else {
      return false;
    }
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return { message: 'Snapshot!' };
  }

  render(){
    console.log('[Persons.js] rendering...');
    return this.props.persons.map((person, index) => {
      return ( 
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={event => this.props.changed(event, person.id)}
        />
      );
    });
  }
};

export default Persons; 