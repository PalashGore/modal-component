import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';

import ModalComponent from './ModalComponent';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  
  constructor() {
    super();   
    
    this.state = { 
      modal: false,
      title: 'Modal Title',
      buttonLabel: 'Close',
      className: 'show',
      modalBody: 'Modal Body'
    };

    this.toggle = this.toggle.bind(this);

  }

  toggle() {
    const show = this.state.modal; 
    if(!show) {
      this.setState({ modal: true });
    }
  }

  render() {
    return (
      <div className="App">
          <Jumbotron>
            <Button color="primary" onClick={this.toggle}>Toggle Modal</Button>
            <ModalComponent 
              isOpen={true} 
              toggle={this.toggle} 
              title={this.state.title}
              buttonLabel={this.state.buttonLabel}
              classNames={this.state.classNames}
              modalBody={this.state.modalBody}
            /> 
          </Jumbotron>
      </div>
    );
  }
}

export default App;
